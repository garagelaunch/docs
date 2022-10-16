import { Feather } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import {
  FlatList,
  Flex,
  Heading,
  Box,
  IconButton,
  useToast,
  Spinner,
  Skeleton,
  VStack,
  Text,
} from 'native-base';
import { useCallback, useEffect, useState } from 'react';

import { CategoriesList } from './CategoriesList';
import { CreatePostForm } from './CreatePostForm';

import { Header } from '@src/components/Header';
import { Post, UserHasInteracted } from '@src/components/Post';
import { PER_PAGE_ITEMS, userIdHelper } from '@src/configs';
import { useCategories } from '@src/hooks/queries/useCategories';
import { usePosts } from '@src/hooks/queries/usePosts';
import { useAuth } from '@src/hooks/useAuth';
import { StackHomeNavigatorParamList } from '@src/routes/stacks/homeStack.routes';
import { queryClient } from '@src/services/queryClient';

export type HomeScreenNavigationProps = NavigationProp<
  StackHomeNavigatorParamList,
  'Home'
>;

const useMount = (func: CallableFunction) => useEffect(() => func(), [func]);

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useMount(() => {
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();

      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  });

  return { url, processing };
};

export const Home = () => {
  // const { url: initialUrl, processing } = useInitialURL();

  const toast = useToast();
  const { user } = useAuth();
  const navigation = useNavigation<HomeScreenNavigationProps>();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );

  console.log('selectedCategoryId', selectedCategoryId);

  const postFilters = {
    categoryId: selectedCategoryId,
  };

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    usePosts<UserHasInteracted>({
      range: [0, PER_PAGE_ITEMS],
      sort: ['createdAt', 'DESC'],
      filter: {
        ...(postFilters.categoryId ? postFilters : {}),
      },
      include: {
        likes: {
          select: { id: true },
          where: { ownerId: user?.id ?? userIdHelper },
        },
        comments: {
          select: { id: true },
          where: { ownerId: user?.id ?? userIdHelper },
        },
      },
    });

  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    isSuccess: isSuccessCategories,
    isError: isErrorCategories,
  } = useCategories({
    range: [0, 6],
    sort: ['createdAt', 'ASC'],
  });

  const [isReadingModeActive, setIsReadingModeActive] = useState(false);

  const isLoadedCategories =
    isSuccessCategories && !isLoadingCategories && !isErrorCategories;

  const handleSelectCategoryId = (categoryId: string | null) => {
    console.log('categoryId', categoryId);
    queryClient.invalidateQueries('diversagente@posts');
    setSelectedCategoryId(categoryId);
  };

  const handleLoadMorePosts = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const handleNavigateToFormCreatePost = () => {
    navigation.navigate('FormCreatePost');
  };

  const handleNavigatoToCategorySelecionScreen = () => {
    navigation.navigate('SelectCategory');
  };

  const toggleReadingMode = useCallback(() => {
    setIsReadingModeActive(
      (previousIsReadingModeActive) => !previousIsReadingModeActive,
    );
  }, []);

  if (isErrorCategories) {
    toast.show({
      title: 'Tente novamente mais tarde',
      description: 'Erro ao carregar categorias ',
      backgroundColor: 'red.500',
      duration: 3000,
      placement: 'top',
    });
  }

  return (
    <Flex flex={1}>
      <Header
        username={String(user?.name)}
        avatar={user?.picture}
        subtitle="Compartilhe experiências no fórum"
      />
      <Flex
        backgroundColor="gray.100"
        width="100%"
        borderTopLeftRadius={16}
        borderTopRightRadius={16}
        marginTop={-4}
        paddingBottom={40}
      >
        {!isReadingModeActive && (
          <>
            <CreatePostForm />

            <CategoriesList
              onPressSeeMore={handleNavigatoToCategorySelecionScreen}
              categories={
                categoriesData?.pages.map((page) => page.results).flat() ?? []
              }
              isLoaded={isLoadedCategories}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={handleSelectCategoryId}
            />
          </>
        )}

        <Flex
          width="100%"
          padding={6}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <Text>
            {processing
              ? `Processing the initial url from a deep link`
              : `The deep link is: ${initialUrl || 'None'}`}
          </Text> */}
          <Heading>Últimas postagens</Heading>
          <IconButton
            colorScheme={isReadingModeActive ? 'orange' : 'coolGray'}
            variant={'ghost'}
            size={'lg'}
            _icon={{
              as: Feather,
              name: isReadingModeActive ? 'list' : 'grid',
            }}
            onPress={toggleReadingMode}
          />
        </Flex>

        {isLoading ? (
          <VStack space={4}>
            <Skeleton width="100%" height={200} />
            <Skeleton width="100%" height={200} />
            <Skeleton width="100%" height={200} />
          </VStack>
        ) : (
          <FlatList
            width={'100%'}
            data={data?.pages.map((page) => page.results).flat()}
            renderItem={({ item }) => (
              <Box marginBottom={4}>
                <Post post={item} isPreview />
              </Box>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 350 }}
            onEndReached={handleLoadMorePosts}
            onEndReachedThreshold={0.85}
            ListFooterComponent={
              isFetchingNextPage ? (
                <Spinner color="orange.500" size="lg" />
              ) : (
                <Flex width="100%" alignItems="center" justifyContent="center">
                  <Text color="gray.500">
                    Não há mais postagens nessa categoria.
                  </Text>
                  <Text
                    color="blue.500"
                    onPress={handleNavigateToFormCreatePost}
                  >
                    Você pode clicar aqui para criar a sua
                  </Text>
                </Flex>
              )
            }
          />
        )}
      </Flex>
    </Flex>
  );
};
