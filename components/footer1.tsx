import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="py-5 test-sm transition-all duration-300 border-t border-solid border-blue-200"
      style={{ marginTop: "12%", marginLeft: "7%", marginRight: "7%" }}
    >
      {/*style={{ marginTop: "25%" }} */}
      <div className="text-center text-black">
        &copy; Copyright{" "}
        <strong>
          <span>SmartAI</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="pt-1 text-center text-base text-black">
        Designed by{" "}
        <a href="https://theyoohoostore.com/">
          <strong>KK & KB</strong>
        </a>
      </div>
    </footer>
  );
}
