import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src="/empty2.png" fill alt="Empty" />
      </div>
      {/* (text-muted-foreground) jo text grey karva hoy to /// optional  */}
      <p className=" text-sm text-center text-black">{label}</p>
    </div>
  );
};
