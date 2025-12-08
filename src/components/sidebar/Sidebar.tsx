import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Link } from "react-router-dom";

interface Props {
  theme: string;
}

const SideBar = ({ theme }: Props) => {
  return (
    <div className="App">
      <Sidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: theme === "dark" ? "#212529" : "#6c757d",
            width: "250px",
            height: "120vh",
            color: theme === "dark" ? "#add8e6" : "#000000ff",
          },
        }}
      >
        <Menu>
          <MenuItem component={<Link to="/gaming" />}> Gaming </MenuItem>
          <MenuItem component={<Link to="/anime" />}> Anime </MenuItem>
          <MenuItem component={<Link to="/food" />}> Food </MenuItem>
          <MenuItem component={<Link to="/music" />}> Music </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SideBar;
/*

<SubMenu label="Charts">
            <MenuItem component={<Link to="/Gaming" />}> Gaming </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
 */
