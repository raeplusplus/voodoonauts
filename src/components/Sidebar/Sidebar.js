import { SidebarContainer, Icon, CloseIcon } from "./SidebarElements";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="news">News</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="alumni">Alumni</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="contact">Contact Us</SidebarLink>
          </SidebarMenu>
          <SidebarMenu>
            <SidebarLink to="signup">Sign Up</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
