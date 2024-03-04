import Banner from "@/components/banner";
import Features from "@/components/features";
import Footer_landing from "@/components/footer";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div>
      {/* Landing Page (Unprotected) */}
      <div>
        <Hero />
        <Features />
        <Footer_landing />
        {/* <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button>Register</Button>
        </Link> */}
      </div>
    </div>
  );
}
