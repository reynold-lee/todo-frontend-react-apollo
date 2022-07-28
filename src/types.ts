import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Acronym = {
  __typename?: 'Acronym';
  acronym_form: Scalars['String'];
  full_form: Scalars['String'];
  id: Scalars['Int'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  delete: Acronym;
  login: AuthPayload;
  patch?: Maybe<Acronym>;
  post: Acronym;
  signup: AuthPayload;
  todoDelete: Todo;
  todopatch: Todo;
  todopost: Todo;
};


export type MutationDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPatchArgs = {
  acronym_form?: InputMaybe<Scalars['String']>;
  full_form?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};


export type MutationPostArgs = {
  acronym_form: Scalars['String'];
  full_form: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTodoDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationTodopatchArgs = {
  content: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
};


export type MutationTodopostArgs = {
  content: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  acronym?: Maybe<Acronym>;
  acronyms: Array<Acronym>;
  todo?: Maybe<Todo>;
  todos: Array<Todo>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAcronymArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryAcronymsArgs = {
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryTodoArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryTodosArgs = {
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};


export type QueryUsersArgs = {
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  content: Scalars['String'];
  id: Scalars['Int'];
  owner?: Maybe<User>;
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
  todos: Array<Todo>;
};

export type CreateAcronymMutationVariables = Exact<{
  acronymForm: Scalars['String'];
  fullForm: Scalars['String'];
}>;


export type CreateAcronymMutation = { __typename?: 'Mutation', post: { __typename?: 'Acronym', id: number, acronym_form: string, full_form: string } };

export type UpdateAcronymMutationVariables = Exact<{
  acronymForm: Scalars['String'];
  fullForm: Scalars['String'];
  patchId: Scalars['Int'];
}>;


export type UpdateAcronymMutation = { __typename?: 'Mutation', patch?: { __typename?: 'Acronym', id: number, acronym_form: string, full_form: string } | null };

export type DeleteAcronymMutationVariables = Exact<{
  deleteId: Scalars['Int'];
}>;


export type DeleteAcronymMutation = { __typename?: 'Mutation', delete: { __typename?: 'Acronym', id: number } };

export type GetAcronymQueryVariables = Exact<{
  acronymId: Scalars['Int'];
}>;


export type GetAcronymQuery = { __typename?: 'Query', acronym?: { __typename?: 'Acronym', id: number, acronym_form: string, full_form: string } | null };

export type GetAcronymsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type GetAcronymsQuery = { __typename?: 'Query', acronyms: Array<{ __typename?: 'Acronym', id: number, acronym_form: string, full_form: string }> };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: number, name: string, email: string, role: string } } };

export type RegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', id: number, name: string, email: string, role: string } } };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', todopost: { __typename?: 'Todo', id: number, title: string, content: string, owner?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null } };

export type UpdateTodoMutationVariables = Exact<{
  todopatchId: Scalars['Int'];
  todopatchTitle2: Scalars['String'];
  todopatchContent2: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', todopatch: { __typename?: 'Todo', id: number, title: string, content: string, owner?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null } };

export type DeleteTodoMutationVariables = Exact<{
  todoDeleteId: Scalars['Int'];
}>;


export type DeleteTodoMutation = { __typename?: 'Mutation', todoDelete: { __typename?: 'Todo', id: number, title: string, content: string, owner?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null } };

export type GetTodosQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type GetTodosQuery = { __typename?: 'Query', todos: Array<{ __typename?: 'Todo', id: number, title: string, content: string, owner?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null }> };

export type GetTodoQueryVariables = Exact<{
  todoId: Scalars['Int'];
}>;


export type GetTodoQuery = { __typename?: 'Query', todo?: { __typename?: 'Todo', id: number, title: string, content: string, owner?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null } | null };

export type GetUsersQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: number, name: string, email: string, role: string, todos: Array<{ __typename?: 'Todo', id: number, title: string, content: string }> }> };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['Int'];
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, name: string, email: string, role: string } | null };


export const CreateAcronymDocument = gql`
    mutation createAcronym($acronymForm: String!, $fullForm: String!) {
  post(acronym_form: $acronymForm, full_form: $fullForm) {
    id
    acronym_form
    full_form
  }
}
    `;
export type CreateAcronymMutationFn = Apollo.MutationFunction<CreateAcronymMutation, CreateAcronymMutationVariables>;

/**
 * __useCreateAcronymMutation__
 *
 * To run a mutation, you first call `useCreateAcronymMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAcronymMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAcronymMutation, { data, loading, error }] = useCreateAcronymMutation({
 *   variables: {
 *      acronymForm: // value for 'acronymForm'
 *      fullForm: // value for 'fullForm'
 *   },
 * });
 */
export function useCreateAcronymMutation(baseOptions?: Apollo.MutationHookOptions<CreateAcronymMutation, CreateAcronymMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAcronymMutation, CreateAcronymMutationVariables>(CreateAcronymDocument, options);
      }
export type CreateAcronymMutationHookResult = ReturnType<typeof useCreateAcronymMutation>;
export type CreateAcronymMutationResult = Apollo.MutationResult<CreateAcronymMutation>;
export type CreateAcronymMutationOptions = Apollo.BaseMutationOptions<CreateAcronymMutation, CreateAcronymMutationVariables>;
export const UpdateAcronymDocument = gql`
    mutation updateAcronym($acronymForm: String!, $fullForm: String!, $patchId: Int!) {
  patch(acronym_form: $acronymForm, full_form: $fullForm, id: $patchId) {
    id
    acronym_form
    full_form
  }
}
    `;
export type UpdateAcronymMutationFn = Apollo.MutationFunction<UpdateAcronymMutation, UpdateAcronymMutationVariables>;

/**
 * __useUpdateAcronymMutation__
 *
 * To run a mutation, you first call `useUpdateAcronymMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAcronymMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAcronymMutation, { data, loading, error }] = useUpdateAcronymMutation({
 *   variables: {
 *      acronymForm: // value for 'acronymForm'
 *      fullForm: // value for 'fullForm'
 *      patchId: // value for 'patchId'
 *   },
 * });
 */
export function useUpdateAcronymMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAcronymMutation, UpdateAcronymMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAcronymMutation, UpdateAcronymMutationVariables>(UpdateAcronymDocument, options);
      }
export type UpdateAcronymMutationHookResult = ReturnType<typeof useUpdateAcronymMutation>;
export type UpdateAcronymMutationResult = Apollo.MutationResult<UpdateAcronymMutation>;
export type UpdateAcronymMutationOptions = Apollo.BaseMutationOptions<UpdateAcronymMutation, UpdateAcronymMutationVariables>;
export const DeleteAcronymDocument = gql`
    mutation deleteAcronym($deleteId: Int!) {
  delete(id: $deleteId) {
    id
  }
}
    `;
export type DeleteAcronymMutationFn = Apollo.MutationFunction<DeleteAcronymMutation, DeleteAcronymMutationVariables>;

/**
 * __useDeleteAcronymMutation__
 *
 * To run a mutation, you first call `useDeleteAcronymMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAcronymMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAcronymMutation, { data, loading, error }] = useDeleteAcronymMutation({
 *   variables: {
 *      deleteId: // value for 'deleteId'
 *   },
 * });
 */
export function useDeleteAcronymMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAcronymMutation, DeleteAcronymMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAcronymMutation, DeleteAcronymMutationVariables>(DeleteAcronymDocument, options);
      }
export type DeleteAcronymMutationHookResult = ReturnType<typeof useDeleteAcronymMutation>;
export type DeleteAcronymMutationResult = Apollo.MutationResult<DeleteAcronymMutation>;
export type DeleteAcronymMutationOptions = Apollo.BaseMutationOptions<DeleteAcronymMutation, DeleteAcronymMutationVariables>;
export const GetAcronymDocument = gql`
    query getAcronym($acronymId: Int!) {
  acronym(id: $acronymId) {
    id
    acronym_form
    full_form
  }
}
    `;

/**
 * __useGetAcronymQuery__
 *
 * To run a query within a React component, call `useGetAcronymQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAcronymQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAcronymQuery({
 *   variables: {
 *      acronymId: // value for 'acronymId'
 *   },
 * });
 */
export function useGetAcronymQuery(baseOptions: Apollo.QueryHookOptions<GetAcronymQuery, GetAcronymQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAcronymQuery, GetAcronymQueryVariables>(GetAcronymDocument, options);
      }
export function useGetAcronymLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAcronymQuery, GetAcronymQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAcronymQuery, GetAcronymQueryVariables>(GetAcronymDocument, options);
        }
export type GetAcronymQueryHookResult = ReturnType<typeof useGetAcronymQuery>;
export type GetAcronymLazyQueryHookResult = ReturnType<typeof useGetAcronymLazyQuery>;
export type GetAcronymQueryResult = Apollo.QueryResult<GetAcronymQuery, GetAcronymQueryVariables>;
export const GetAcronymsDocument = gql`
    query getAcronyms($search: String, $skip: Int, $take: Int) {
  acronyms(search: $search, skip: $skip, take: $take) {
    id
    acronym_form
    full_form
  }
}
    `;

/**
 * __useGetAcronymsQuery__
 *
 * To run a query within a React component, call `useGetAcronymsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAcronymsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAcronymsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetAcronymsQuery(baseOptions?: Apollo.QueryHookOptions<GetAcronymsQuery, GetAcronymsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAcronymsQuery, GetAcronymsQueryVariables>(GetAcronymsDocument, options);
      }
export function useGetAcronymsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAcronymsQuery, GetAcronymsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAcronymsQuery, GetAcronymsQueryVariables>(GetAcronymsDocument, options);
        }
export type GetAcronymsQueryHookResult = ReturnType<typeof useGetAcronymsQuery>;
export type GetAcronymsLazyQueryHookResult = ReturnType<typeof useGetAcronymsLazyQuery>;
export type GetAcronymsQueryResult = Apollo.QueryResult<GetAcronymsQuery, GetAcronymsQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      name
      email
      role
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    token
    user {
      id
      name
      email
      role
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($title: String!, $content: String!) {
  todopost(title: $title, content: $content) {
    id
    title
    content
    owner {
      id
      name
      email
      role
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($todopatchId: Int!, $todopatchTitle2: String!, $todopatchContent2: String!) {
  todopatch(
    id: $todopatchId
    title: $todopatchTitle2
    content: $todopatchContent2
  ) {
    id
    title
    content
    owner {
      id
      name
      email
      role
    }
  }
}
    `;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      todopatchId: // value for 'todopatchId'
 *      todopatchTitle2: // value for 'todopatchTitle2'
 *      todopatchContent2: // value for 'todopatchContent2'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($todoDeleteId: Int!) {
  todoDelete(id: $todoDeleteId) {
    id
    title
    content
    owner {
      id
      name
      email
      role
    }
  }
}
    `;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      todoDeleteId: // value for 'todoDeleteId'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const GetTodosDocument = gql`
    query getTodos($search: String, $skip: Int, $take: Int) {
  todos(search: $search, skip: $skip, take: $take) {
    id
    title
    content
    owner {
      id
      name
      email
      role
    }
  }
}
    `;

/**
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      search: // value for 'search'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions?: Apollo.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;
export const GetTodoDocument = gql`
    query getTodo($todoId: Int!) {
  todo(id: $todoId) {
    id
    title
    content
    owner {
      id
      name
      email
      role
    }
  }
}
    `;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      todoId: // value for 'todoId'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
      }
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers($search: String, $skip: Int, $take: Int) {
  users(search: $search, skip: $skip, take: $take) {
    id
    name
    email
    role
    todos {
      id
      title
      content
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      search: // value for 'search'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($userId: Int!) {
  user(id: $userId) {
    id
    name
    email
    role
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;