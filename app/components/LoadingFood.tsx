export default function LoadingFood() {
  return (
    <div className="my-7 md:px-5 px-3 flex flex-col gap-3 max-w-7xl">
      <div className="flex sm:flex-row flex-col gap-5">
        <div className="min-h-[260px] w-full bg-foreground/20 rounded-md" />
        <div className="min-h-[260px] w-full bg-foreground/20 rounded-md" />
      </div>
      <div className="p-4 w-full bg-foreground/20 rounded-md" />
      <div className="p-4 w-full bg-foreground/20 rounded-md" />
      <div className="p-4 w-full bg-foreground/20 rounded-md" />
      <div className="min-h-[260px] w-[70vw] bg-foreground/20 rounded-md" />
    </div>
  );
}
