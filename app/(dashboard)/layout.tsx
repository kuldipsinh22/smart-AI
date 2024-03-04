import { Provider } from "@/components/Provider";
import Navbar from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="w-full h-full relative"
      style={{
        backgroundImage: "url('background.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="w-full">
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </main>
    </div>
  );
};

export default DashboardLayout;
