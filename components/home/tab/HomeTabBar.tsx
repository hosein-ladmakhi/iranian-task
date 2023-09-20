'use client';

import { useState } from 'react';
import { TabPanel } from '@mui/lab';

import Tab from '@/shared/tab';

// Tab Panels
import HomeGroupTabPanel from './HomeGroupTabPanel';
import HomeChannelTabPanel from './HomeChannelTabPanel';
import HomeUserTabPanel from './HomeUserTabPanel';
import { homeTabItems } from '@/constants';

export default function HomeTabBar() {
  const [activeTab, setActiveTab] = useState<string>('1');
  const onChangeTabs = (value: string) => setActiveTab(value);

  const printTabPanel = (id: string) => {
    switch (id) {
      case '1':
        return <HomeGroupTabPanel />;
      case '2':
        return <HomeChannelTabPanel />;
      case '3':
        return <HomeUserTabPanel />;
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
