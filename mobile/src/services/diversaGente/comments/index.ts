import { diversagenteBaseApi } from '../baseUrl';

import { IncludeInto } from '@src/@types/generics/includeInto';
import { Comment } from '@src/contracts/Comment';
import { QueryOptions } from '@src/contracts/QueryOptions';
import { parseQueryOptions } from '@src/utils/parseQuery';

export const findAllComments = async <GenericIncluded extends object = object>(
  postId: string,
  options: QueryOptions = {},
) => {
  try {
    const response = await diversagenteBaseApi.get<
      IncludeInto<Comment, GenericIncluded>[]
    >(`/posts/${postId}/comments/`, {
      params: parseQueryOptions(options),
    });
    const comments = response.data;

    return { results: comments };
  } catch (error: any) {
    console.error('error when fetch all comments');
    console.error(postId);
    console.error(options);

    if (error.isAxiosError) {
      console.error(error.response);
    }

    throw error;
  }
};
