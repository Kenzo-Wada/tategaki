import { memo, useCallback, useEffect, useState } from 'react';

import MultiSelect from '~/components/assets/MultiSelect';
import { IconTags } from '~/components/icon/Tags';
import useGetAPI from '~/components/pages/Post/Edit/TagSelect/hooks/useGetAPI';
import usePostAPI from '~/components/pages/Post/Edit/TagSelect/hooks/usePostAPI';

interface Props {
  setTags?: (tags: string[]) => void;
  tags?: string[];
  readOnly?: boolean;
}

const TagSelector = memo((props: Props) => {
  const { tags, setTags, readOnly = false } = props;
  const [tag, setTag] = useState<{ value: string; label: string }[]>([]);

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

  console.log('tag', tag);
  console.log('tags', tags);

  return (
    <>
      {tag.length !== 0 && (
        <MultiSelect
          data={[{ value: '', label: '' }, ...tag]}
          defaultValue={tags}
          readOnly={readOnly}
          icon={<IconTags />}
          placeholder="タグを追加"
          searchable
          creatable
          getCreateLabel={(query) => `+ 新規作成: ${query}`}
          onCreate={(query) => handleCreateTag(query)}
          onChange={(values) => setTags && setTags(values)}
        />
      )}
    </>
  );
});

TagSelector.displayName = 'TagSelector';

export default TagSelector;
