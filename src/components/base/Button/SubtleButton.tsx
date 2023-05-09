import { memo } from 'react';

import type { ButtonProps } from '~/components/assets/Button';
import { Button } from '~/components/assets/Button';

const SubtleButton = memo((props: ButtonProps) => {
  return <Button variant="subtle" {...props} />;
});

SubtleButton.displayName = 'SubtleButton';

export default SubtleButton;
