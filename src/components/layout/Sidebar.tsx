import { Layout, Menu } from "antd";
import { sideBarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { AdminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
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
        items={sideBarItemsGenerator(AdminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
