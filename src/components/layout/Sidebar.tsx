import { Layout, Menu } from "antd";
import { sideBarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/admin.routes";
import { FacultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
const Sidebar = () => {
  const user = useAppSelector(selectCurrentUser);
  const role = user!.role;
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sideBarItemsGenerator(AdminPaths, role);
      break;
    case userRole.FACULTY:
      sidebarItems = sideBarItemsGenerator(FacultyPaths, role);
      break;
    case userRole.STUDENT:
      sidebarItems = sideBarItemsGenerator(StudentPaths, role);
      break;
    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <div
        style={{
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "white", height: "20px" }}>UM</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
