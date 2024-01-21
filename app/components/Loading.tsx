import { BiLoaderCircle } from "react-icons/bi";

export default function Loading() {
  return (
    <div className="w-full h-[75vh] flex justify-center items-center bg-primary-foreground">
      <BiLoaderCircle className="text-primary animate-spin" size={60} />
    </div>
  );
}
