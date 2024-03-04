import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center mt-11 mb-11 custom-margin">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/logo.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">SmartAI is thinking...</p>
    </div>
  );
};
