// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DeleteInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Id = {
  id: Scalars['String']['input'];
};

export type Info = {
  __typename?: 'Info';
  note?: Maybe<Scalars['String']['output']>;
  runDown?: Maybe<Array<RunDown>>;
};

export type InformationInput = {
  note: Scalars['String']['input'];
  runDown: Array<RunDownInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTravel?: Maybe<Travel>;
  createUser: User;
  deleteProduct?: Maybe<Travel>;
  loginUser: Scalars['String']['output'];
  updateUserInfo: User;
};


export type MutationCreateTravelArgs = {
  input?: InputMaybe<TravelInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteProductArgs = {
  input?: InputMaybe<DeleteInput>;
};


export type MutationLoginUserArgs = {
  input: LoginInput;
};


export type MutationUpdateUserInfoArgs = {
  input?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  get1Product?: Maybe<Travel>;
  getAllCustomers?: Maybe<Scalars['String']['output']>;
  getAllTravel?: Maybe<Array<Travel>>;
};


export type QueryGet1ProductArgs = {
  input?: InputMaybe<Id>;
};

export type RunDownInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Travel = {
  __typename?: 'Travel';
  _id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  endAt: Scalars['String']['output'];
  facilities?: Maybe<Array<Scalars['String']['output']>>;
  imageUrl: Scalars['String']['output'];
  informations: Info;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  startAt: Scalars['String']['output'];
};

export type TravelInput = {
  description: Scalars['String']['input'];
  duration: Scalars['String']['input'];
  endAt: Scalars['String']['input'];
  facilities?: InputMaybe<Array<Scalars['String']['input']>>;
  imageUrl: Scalars['String']['input'];
  informations: InformationInput;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
  startAt: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type RunDown = {
  __typename?: 'runDown';
  description?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type GetAllTravelQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTravelQuery = { __typename?: 'Query', getAllTravel?: Array<{ __typename?: 'Travel', _id: string, name: string, imageUrl: string, location: string, price: number, description: string, rating: number, startAt: string, endAt: string, duration: string, facilities?: Array<string> | null, informations: { __typename?: 'Info', note?: string | null, runDown?: Array<{ __typename?: 'runDown', title?: string | null, description?: string | null }> | null } }> | null };

export type Get1ProductQueryVariables = Exact<{
  input?: InputMaybe<Id>;
}>;


export type Get1ProductQuery = { __typename?: 'Query', get1Product?: { __typename?: 'Travel', _id: string, name: string, imageUrl: string, location: string, price: number, description: string, rating: number, startAt: string, endAt: string, duration: string, facilities?: Array<string> | null, informations: { __typename?: 'Info', note?: string | null, runDown?: Array<{ __typename?: 'runDown', description?: string | null, title?: string | null }> | null } } | null };

export type LoginUserMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: string };

export type CreateUserMutationVariables = Exact<{
  input?: InputMaybe<CreateUserInput>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', email?: string | null, name?: string | null, password?: string | null } };


export const GetAllTravelDocument = gql`
    query GetAllTravel {
  getAllTravel {
    _id
    name
    imageUrl
    location
    price
    description
    rating
    startAt
    endAt
    duration
    facilities
    informations {
      runDown {
        title
        description
      }
      note
    }
  }
}
    `;
export type GetAllTravelProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetAllTravelQuery, GetAllTravelQueryVariables>
    } & TChildProps;
export function withGetAllTravel<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetAllTravelQuery,
  GetAllTravelQueryVariables,
  GetAllTravelProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetAllTravelQuery, GetAllTravelQueryVariables, GetAllTravelProps<TChildProps, TDataName>>(GetAllTravelDocument, {
      alias: 'getAllTravel',
      ...operationOptions
    });
};

/**
 * __useGetAllTravelQuery__
 *
 * To run a query within a React component, call `useGetAllTravelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTravelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTravelQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTravelQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTravelQuery, GetAllTravelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTravelQuery, GetAllTravelQueryVariables>(GetAllTravelDocument, options);
      }
export function useGetAllTravelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTravelQuery, GetAllTravelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTravelQuery, GetAllTravelQueryVariables>(GetAllTravelDocument, options);
        }
export function useGetAllTravelSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTravelQuery, GetAllTravelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTravelQuery, GetAllTravelQueryVariables>(GetAllTravelDocument, options);
        }
export type GetAllTravelQueryHookResult = ReturnType<typeof useGetAllTravelQuery>;
export type GetAllTravelLazyQueryHookResult = ReturnType<typeof useGetAllTravelLazyQuery>;
export type GetAllTravelSuspenseQueryHookResult = ReturnType<typeof useGetAllTravelSuspenseQuery>;
export type GetAllTravelQueryResult = Apollo.QueryResult<GetAllTravelQuery, GetAllTravelQueryVariables>;
export const Get1ProductDocument = gql`
    query Get1Product($input: Id) {
  get1Product(input: $input) {
    _id
    name
    imageUrl
    location
    price
    description
    rating
    startAt
    endAt
    duration
    facilities
    informations {
      note
      runDown {
        description
        title
      }
    }
  }
}
    `;
export type Get1ProductProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Get1ProductQuery, Get1ProductQueryVariables>
    } & TChildProps;
export function withGet1Product<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Get1ProductQuery,
  Get1ProductQueryVariables,
  Get1ProductProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Get1ProductQuery, Get1ProductQueryVariables, Get1ProductProps<TChildProps, TDataName>>(Get1ProductDocument, {
      alias: 'get1Product',
      ...operationOptions
    });
};

/**
 * __useGet1ProductQuery__
 *
 * To run a query within a React component, call `useGet1ProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet1ProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet1ProductQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGet1ProductQuery(baseOptions?: Apollo.QueryHookOptions<Get1ProductQuery, Get1ProductQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Get1ProductQuery, Get1ProductQueryVariables>(Get1ProductDocument, options);
      }
export function useGet1ProductLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Get1ProductQuery, Get1ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Get1ProductQuery, Get1ProductQueryVariables>(Get1ProductDocument, options);
        }
export function useGet1ProductSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<Get1ProductQuery, Get1ProductQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<Get1ProductQuery, Get1ProductQueryVariables>(Get1ProductDocument, options);
        }
export type Get1ProductQueryHookResult = ReturnType<typeof useGet1ProductQuery>;
export type Get1ProductLazyQueryHookResult = ReturnType<typeof useGet1ProductLazyQuery>;
export type Get1ProductSuspenseQueryHookResult = ReturnType<typeof useGet1ProductSuspenseQuery>;
export type Get1ProductQueryResult = Apollo.QueryResult<Get1ProductQuery, Get1ProductQueryVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($input: loginInput!) {
  loginUser(input: $input)
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;
export type LoginUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>
    } & TChildProps;
export function withLoginUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LoginUserMutation,
  LoginUserMutationVariables,
  LoginUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, LoginUserMutation, LoginUserMutationVariables, LoginUserProps<TChildProps, TDataName>>(LoginUserDocument, {
      alias: 'loginUser',
      ...operationOptions
    });
};

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput) {
  createUser(input: $input) {
    email
    name
    password
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>
    } & TChildProps;
export function withCreateUser<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps, TDataName>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;