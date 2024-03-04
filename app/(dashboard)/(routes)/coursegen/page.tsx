"use client";

import * as z from "zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/empty";

import { formSchema } from "./constants";
import { UserButton } from "@clerk/nextjs";
import Footer from "@/components/footer1";
import { Raleway, Rubik } from "next/font/google";
// import Navbar from "@/components/navbar";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const CourseGen = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/coursegen", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div
      id="background"
      className={(cn("w-full"), raleway.className)}
      style={{
        backgroundImage: "url('background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading
        title="Course Generation"
        description="Generate course using descriptive text."
      />
      <div className="px-4 lg:px-8">
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
                bg-white
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter your prompt here..."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                type="submit"
                disabled={isLoading}
                size="icon"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div style={{ marginLeft: "5%", marginRight: "5%" }}>
          <div
            id="card"
            className="mx-auto w-full shadow-md rounded-md backdrop-blur-2xl bg-white bg-opacity-20 p-4 mt-5"
          >
            <div className="space-y-4 mt-4">
              {isLoading && (
                <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                  <Loader />
                </div>
              )}
              {messages.length === 0 && !isLoading && (
                <Empty label="No conversation started." />
              )}
              <div className="flex flex-col-reverse gap-y-4">
                {messages.map((message) => (
                  <div
                    key={message.content}
                    className={cn(
                      "p-8 w-full flex items-start gap-x-8 rounded-lg",
                      message.role === "user"
                        ? "bg-white border border-black/10"
                        : "bg-muted"
                    )}
                  >
                    {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                    <ReactMarkdown
                      components={{
                        pre: ({ node, ...props }) => (
                          <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                            <pre {...props} />
                          </div>
                        ),
                        code: ({ node, ...props }) => (
                          <code
                            className="bg-black/10 rounded-lg p-1"
                            {...props}
                          />
                        ),
                      }}
                      className="text-sm overflow-hidden leading-7"
                    >
                      {message.content || ""}
                    </ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseGen;
