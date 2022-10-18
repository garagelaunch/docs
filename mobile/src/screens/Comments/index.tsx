import { Feather, Fontisto } from '@expo/vector-icons';
import {
  useNavigation,
  useRoute,
  RouteProp,
  NavigationProp,
} from '@react-navigation/native';
import {
  Box,
  FlatList,
  Flex,
  Icon,
  IconButton,
  Spinner,
  Text,
} from 'native-base';
import React from 'react';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { LoadingFallback } from '@src/components/LoadingFallback';
import { UserComment } from '@src/components/UserComment';
import { PER_PAGE_ITEMS } from '@src/configs';
import { CommentOwner } from '@src/contracts/Comment';
import { useComments } from '@src/hooks/queries/useComments';
import { StackForumNavigatorParamList } from '@src/routes/stacks/forumStack.routes';

export type CommentsScreenNavigationProps = NavigationProp<
  StackForumNavigatorParamList,
  'Comments'
>;

export const Comments = () => {
  const navigation = useNavigation<CommentsScreenNavigationProps>();
  const route = useRoute<RouteProp<StackForumNavigatorParamList, 'Comments'>>();
  const { postId } = route.params;

  const {
    data,
    isLoading,
    isFetchingNextPage,
    isRefetching,
    hasNextPage,
    refetch,
    fetchNextPage,
  } = useComments<{
    owner: CommentOwner;
  }>({
    postId,
    perPage: PER_PAGE_ITEMS,
    range: [0, PER_PAGE_ITEMS],
    sort: ['createdAt', 'DESC'],
    filter: {
      postId,
    },
    include: {
      owner: true,
    },
  });

  const statusBarHeight = getStatusBarHeight();

  const handleNavigateGoBack = () => {
    navigation.goBack();
  };

  const handlePullCommentListToRefresh = () => {
    refetch();
  };

  const handleLoadMoreComments = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <Flex px={4} flex={1} pt={statusBarHeight}>
      <IconButton
        colorScheme="gray"
        variant={'solid'}
        icon={<Icon as={<Feather name="arrow-left" />} />}
        onPress={handleNavigateGoBack}
        position="absolute"
        top={10}
        left={4}
        zIndex={1}
      />
      <FlatList
        width={'100%'}
        data={data?.pages.map((page) => page.results).flat()}
        renderItem={({ item }) => (
          <Box marginBottom={4}>
            <UserComment comment={item} />
          </Box>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 350 }}
        onEndReached={handleLoadMoreComments}
        onEndReachedThreshold={0.85}
        refreshing={isRefetching && !isFetchingNextPage}
        onRefresh={handlePullCommentListToRefresh}
        ListFooterComponent={
          <LoadingFallback
            fallback={<Spinner color="orange.500" size="lg" />}
            isLoading={isFetchingNextPage}
          >
            <Flex width="100%" alignItems="center" justifyContent="center">
              <Text color="gray.500">Não há mais comentários nesse post.</Text>
            </Flex>
          </LoadingFallback>
        }
      />
    </Flex>
  );
};