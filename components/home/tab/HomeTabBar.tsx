"use client";

import { useState } from "react";
import { TabPanel } from "@mui/lab";

import Tab from "@/shared/Tab";

// Tab Panels
import HomeGroupTabPanel from "./HomeGroupTabPanel";
import HomeChannelTabPanel from "./HomeChannelTabPanel";
import HomeUserTabPanel from "./HomeUserTabPanel";
import { homeTabItems } from "@/constants";
import { Users } from "@/@types";

// define props
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
    <Tab onChangeTabs={onChangeTabs} items={homeTabItems} activeTab={activeTab}>
      {homeTabItems.map((tabItem) => (
        <TabPanel value={tabItem.id} key={tabItem.id}>
          {printTabPanel(tabItem.id)}
        </TabPanel>
      ))}
    </Tab>
  );
}
