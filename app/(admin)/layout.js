import AdminNavbar from "@/component/AdminNavbar";

export default function AdminLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
}
