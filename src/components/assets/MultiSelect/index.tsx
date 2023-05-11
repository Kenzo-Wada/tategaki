import { MultiSelect as MantineMultiSelect } from '@mantine/core';
import type { MultiSelectProps as MantineMultiSelectProps } from '@mantine/core';
import { memo } from 'react';

type MultiSelectProps = MantineMultiSelectProps;

const MultiSelect = memo((props: MultiSelectProps) => {
  return <MantineMultiSelect {...props} />;
});

MultiSelect.displayName = 'MultiSelect';

export default MultiSelect;
