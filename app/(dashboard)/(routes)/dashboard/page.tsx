"use client";

import Footer from "@/components/footer1";
import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import { Montserrat, Raleway, Edu_TAS_Beginner } from "next/font/google";
import Footer_landing from "@/components/footer";

const raleway = Raleway({
  weight: "500",
  subsets: ["latin"],
});

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div
      className={(cn(""), raleway.className)}
      style={{
        backgroundImage: "url('background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex" style={{ padding: "100px" }}>
        <b>
          <div
            className=""
            style={{
              fontSize: "60px",
              marginTop: "50px",
            }}
          >
            Explore the power of SMART AI.
          </div>
        </b>
        <div>
          <img
            src="/miss.png"
            alt="img"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      </div>
      <Footer_landing />
    </div>
  );
};

export default DashboardPage;
