import DashboardLayout from "./layout/DashboardLayout";
import UserManagement from "./pages/UserManagement";

export default function App() {
  return (
    <DashboardLayout>
      <UserManagement />
    </DashboardLayout>
  );
}
