export default function NotFoundView({ message }: { message: string }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-black pvp-gradient-text mb-4">404</h1>
      <p className="text-zinc-400 text-sm">{message}</p>
    </main>
  );
}
