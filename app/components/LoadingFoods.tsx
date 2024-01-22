export default function LoadingFoods() {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 md:px-4 px-3 place-content-center h-full">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number, id: number) => (
        <div className="flex flex-col gap-2" key={id}>
          <div className="rounded-md bg-foreground/20 p-2 min-h-[300px]" />
          <div className="bg-foreground/20 rounded-md p-2" />
        </div>
      ))}
    </div>
  );
}
