import Sidebar from "./sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}
