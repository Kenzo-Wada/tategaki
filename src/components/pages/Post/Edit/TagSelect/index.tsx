import { memo, useEffect, useState } from 'react';

import MultiSelect from '~/components/assets/MultiSelect';
import { IconTags } from '~/components/icon/Tags';
import useAPI from '~/components/pages/Post/Edit/TagSelect/hooks/usePostAPI';

const TagSelector = memo(() => {
  const [tag, setTag] = useState<{ value: string; label: string }[]>([]);

  const { callAPI } = useAPI();

  const [newTagName, setNewTagName] = useState('');

  const handleCreateTag = (name: string) => {
    setNewTagName(name);

    return { value: name, label: name };
  };

  useEffect(() => {
    if (newTagName) {
      const fetchNewTag = async () => {
        await callAPI(newTagName);

        const item = { value: newTagName, label: newTagName };
        setTag((current) => [...(current || []), item]);
      };

      fetchNewTag();
    }
  }, [newTagName, callAPI]);

  return (
    <MultiSelect
      data={tag}
      icon={<IconTags />}
      placeholder="タグを追加"
      searchable
      creatable
      getCreateLabel={(query) => `+ 新規作成: ${query}`}
      onCreate={(query) => handleCreateTag(query)}
    />
  );
});

TagSelector.displayName = 'TagSelector';

export default TagSelector;
