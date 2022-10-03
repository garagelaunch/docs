import { FlatList, Flex, Heading } from 'native-base';

import { CategoriesList } from './CategoriesList';
import { CreatePostForm } from './CreatePostForm';
import { Header } from './Header';

import { Post } from '@src/components/Post';
import { useAuth } from '@src/hooks/useAuth';
import { posts } from '@src/utils/fakeData';

export const Home = () => {
  const { user } = useAuth();

  const categories = [
    {
      name: 'Saúde',
    },
    {
      name: 'Educação',
    },
    {
      name: 'Lazer',
    },
    {
      name: 'Cultura',
    },
  ];

  return (
    <Flex flex={1}>
      <Header
        username={String(user?.name)}
        avatar={user?.picture}
        subtitle="Compartilhe experiências no fórum"
      />
      <Flex
        backgroundColor="gray.50"
        width="100%"
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
        marginTop={-4}
        paddingBottom={40}
      >
        <CreatePostForm />

        <CategoriesList categories={categories} />

        <Flex width="100%" padding={6}>
          <Heading>Últimas postagens</Heading>
        </Flex>

        <FlatList
          width={'100%'}
          data={posts}
          renderItem={({ item }) => <Post post={item} isPreview />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 400 }}
          onEndReached={() => console.log('end reached')}
        />
      </Flex>
    </Flex>
  );
};