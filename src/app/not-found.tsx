import NotFoundView from "./not-found-view";

export default function RootNotFound() {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-dvh bg-[#09090b] text-zinc-100">
        <NotFoundView message="Page not found." />
      </body>
    </html>
  );
}
