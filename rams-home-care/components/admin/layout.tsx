import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="ml-64 flex-1">
        <div className="sticky top-0 z-30 bg-gray-100 p-6 pb-0">
          <Header />
        </div>

        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}