import { ReactNode, SyntheticEvent } from "react";
import { TabContext, TabList } from "@mui/lab";
import { Tab as MuiTab } from "@mui/material";
import { TabItems } from "@/@types";

interface Props {
  onChangeTabs: (activeTab: string) => void;
  activeTab: string;
  items: TabItems;
  children: ReactNode;
}

export default function Tab({
  items,
  onChangeTabs,
  activeTab,
  children,
}: Props) {
  const handleOnChange = (event: SyntheticEvent, newValue: string) => {
    onChangeTabs(newValue);
  };
  return (
    <TabContext value={activeTab}>
      <TabList centered onChange={handleOnChange}>
        {items.map((item) => (
          <MuiTab key={item.id} label={item.text} value={item.id} />
        ))}
      </TabList>
      {children}
    </TabContext>
  );
}
