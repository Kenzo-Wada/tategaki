import { Tabs as MantineTabs } from '@mantine/core';
import type { TabsListProps as MantineTabsListProps } from '@mantine/core';
import { memo } from 'react';

type TabsListProps = MantineTabsListProps;

const TabsList = memo((props: TabsListProps) => {
  return <MantineTabs.List {...props} />;
});

TabsList.displayName = 'TabsList';

export default TabsList;
