import styled from "styled-components";
import { MdOutlineDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { GiStrong } from "react-icons/gi";

import { Title } from "../Title";

export const Sidebar = () => {
  return (
    <SidebarLayout>
      <SidebarHeader>
        <Title>Workout</Title>
      </SidebarHeader>
      <SidebarItem className="selected" href={"/"}>
        <MdOutlineDashboard />
        <span>Overview</span>
      </SidebarItem>
      <SidebarItem href={`/exercises`}>
        <GiStrong />
        <span>Exercises</span>
      </SidebarItem>
      <SidebarItem href={`/settings`}>
        <IoSettingsOutline />
        <span>Settings</span>
      </SidebarItem>
    </SidebarLayout>
  );
};

const SidebarLayout = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);

  background-color: var(--color-black-2);
  padding: var(--spacing-3);

  color: var(--color-white-1);
`;

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-6) 0;
`;

const SidebarItem = styled.a`
  padding: var(--spacing-3) 0;
  background-color: var(--color-blue-2);

  text-decoration: none;
  color: var(--color-white-1);

  border-radius: 5px;

  display: flex;
  gap: var(--spacing-1);
  justify-content: space-around;
  align-items: center;

  padding: var(--spacing-2);
  padding-right: var(--spacing-6);

  &:hover {
    background-color: var(--color-blue-3);
  }

  &.selected {
    border-left: 5px solid var(--color-white-1);
  }
`;
