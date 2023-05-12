import { memo, useCallback, useEffect, useState } from 'react';

import MultiSelect from '~/components/assets/MultiSelect';
import { IconTags } from '~/components/icon/Tags';
import useGetAPI from '~/components/pages/Post/Edit/TagSelect/hooks/useGetAPI';
import usePostAPI from '~/components/pages/Post/Edit/TagSelect/hooks/usePostAPI';

const TagSelector = memo(() => {
  const [tag, setTag] = useState<{ value: string; label: string }[]>([]);
  console.log(tag);

  const { callPostAPI } = usePostAPI();
  const { callAPI: fetchTags } = useGetAPI();

  const [newTagName, setNewTagName] = useState('');

  const handleCreateTag = (name: string) => {
    setNewTagName(name);

    return { value: name, label: name };
  };

  const getInitialTags = useCallback(async () => {
    const { tags } = await fetchTags();
    if (tags) {
      const formattedTags = tags.map((t) => ({ value: t.id, label: t.name }));
      setTag(formattedTags);
    }
  }, [fetchTags]);

  useEffect(() => {
    getInitialTags();
  }, [getInitialTags]);

  useEffect(() => {
    if (newTagName) {
      const fetchNewTag = async () => {
        await callPostAPI(newTagName);

        const item = { value: newTagName, label: newTagName };
        setTag((current) => [...(current || []), item]);
      };

      fetchNewTag();
    }
  }, [newTagName, callPostAPI]);

  return (
    <MultiSelect
      data={tag}
      defaultValue={['clhk3guoa0006op87tfzw6j2i', 'clhk31snw0000op879ba9tl2k']}
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
