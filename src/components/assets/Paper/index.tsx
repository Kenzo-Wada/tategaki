import { Paper as MantinePaper } from '@mantine/core';
import type { PaperProps as MantinePaperProps } from '@mantine/core';
import { memo } from 'react';

type PaperProps = MantinePaperProps;

const Paper = memo((props: PaperProps) => {
  return <MantinePaper {...props} />;
});

Paper.displayName = 'Paper';

export default Paper;
