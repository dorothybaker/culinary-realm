export default function LoadingLatest() {
  return (
    <div className="flex flex-col gap-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item: number, id: number) => (
        <div className="flex flex-col gap-2" key={id}>
          <div className="bg-foreground/20 rounded-md p-3 w-[200px]" />
          <div className="rounded-md bg-foreground/20 p-2 min-h-[100px]" />
        </div>
      ))}
    </div>
  );
}
