import { memo } from 'react';

import type { ButtonProps } from '~/components/assets/Button';
import { Button } from '~/components/assets/Button';

const FilledButton = memo((props: ButtonProps) => {
  return <Button variant="filled" {...props} />;
});

FilledButton.displayName = 'FilledButton';

export default FilledButton;
