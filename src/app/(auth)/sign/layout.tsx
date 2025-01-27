export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      {children}
    </div>
  );
}
