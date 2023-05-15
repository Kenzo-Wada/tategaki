import type { UseFormReturnType } from '~/lib/mantine/form';
import { useForm, zodResolver } from '~/lib/mantine/form';
import { z } from '~/lib/zod';
import idSchema from '~/schema/idSchema';
import nameSchema from '~/schema/nameSchema';
import passwordSchema from '~/schema/passwordSchema';

interface HooksType {
  form: UseFormReturnType<
    { name: string; id: string; password: string },
    (values: { name: string; id: string; password: string }) => { name: string; id: string; password: string }
  >;
}

const schema = z.object({
  name: nameSchema,
  id: idSchema,
  password: passwordSchema,
});

const useDetailForm = (): HooksType => {
  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      name: '',
      id: '',
      password: '',
    },
  });

  return { form };
};

export default useDetailForm;
