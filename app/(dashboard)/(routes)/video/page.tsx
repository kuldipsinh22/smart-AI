"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/empty";

import { formSchema } from "./constants";
import Footer from "@/components/footer1";
import Navbar from "@/components/navbar";
import { Raleway } from "next/font/google";
import { cn } from "@/lib/utils";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const VideoPage = () => {
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post("/api/video", values);

      setVideo(response.data[0]);
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
        title="GIF Generation"
        description="Turn your prompt into video."
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
            {isLoading && (
              <div className="p-20">
                <Loader />
              </div>
            )}
            {!video && !isLoading && (
              <Empty label="No video files generated." />
            )}
            {video && (
              <video
                controls
                className="w-full aspect-video mt-8 rounded-lg border bg-black"
              >
                <source src={video} />
              </video>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
