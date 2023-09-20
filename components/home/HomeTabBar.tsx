"use client";
import { useState } from "react";
import { Box, styled } from "@mui/material";
import { TabPanel } from "@mui/lab";
import { BLUE_GREY_COLOR, homeTabItems } from "@/constants";
import Tab from "@/shared/Tab";

// Tab Panels
import HomeGroupTabPanel from "./tab/HomeGroupTabPanel";
import HomeChannelTabPanel from "./tab/HomeChannelTabPanel";
import HomeUserTabPanel from "./tab/HomeUserTabPanel";

// @types
import { Users } from "@/@types";

interface Props {
  users: Users;
}

export default function HomeTabBar({ users }: Props) {
  const [activeTab, setActiveTab] = useState<string>("1");
  const onChangeTabs = (value: string) => setActiveTab(value);

  const printTabPanel = (id: string) => {
    switch (id) {
      case "1":
        return <HomeGroupTabPanel users={users} />;
      case "2":
        return <HomeChannelTabPanel />;
      case "3":
        return <HomeUserTabPanel users={users} />;
      default:
        return <></>;
    }
  };

  return (
    <TabContainer>
      <Tab
        onChangeTabs={onChangeTabs}
        items={homeTabItems}
        activeTab={activeTab}
      >
        {homeTabItems.map((tabItem) => (
          <TabPanel className="tabPanel" value={tabItem.id} key={tabItem.id}>
            {printTabPanel(tabItem.id)}
          </TabPanel>
        ))}
      </Tab>
    </TabContainer>
  );
}

const TabContainer = styled(Box)(() => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  "& > .tabPanel": {
    padding: 0,
    width: "100%",
    flex: 1,
    overflow: "auto",
    background: BLUE_GREY_COLOR[900],
  },
}));
