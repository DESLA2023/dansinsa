/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  Gender: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export enum AuthType {
  Apple = 'Apple',
  Email = 'Email',
  Facebook = 'Facebook',
  Google = 'Google'
}

export type Mutation = {
  __typename?: 'Mutation';
  createDraft?: Maybe<Post>;
  deletePost?: Maybe<Post>;
  publish?: Maybe<Post>;
  signIn?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
  updateProfile?: Maybe<User>;
};


export type MutationCreateDraftArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int']['input'];
};


export type MutationPublishArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignUpArgs = {
  user: UserCreateInput;
};


export type MutationUpdateProfileArgs = {
  user: UserUpdateInput;
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  published?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  authType?: Maybe<AuthType>;
  id?: Maybe<Scalars['ID']['output']>;
  socialId?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  feed?: Maybe<Array<Maybe<Post>>>;
  filterPosts?: Maybe<Array<Maybe<Post>>>;
  me?: Maybe<User>;
  post?: Maybe<Post>;
};


export type QueryFilterPostsArgs = {
  searchString?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  userSignedIn?: Maybe<User>;
  userUpdated?: Maybe<User>;
};


export type SubscriptionUserSignedInArgs = {
  userId: Scalars['String']['input'];
};


export type SubscriptionUserUpdatedArgs = {
  userId: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  birthDay?: Maybe<Scalars['DateTime']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Gender']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nickname?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  photoURL?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<Array<Maybe<Post>>>;
  profile?: Maybe<Profile>;
  thumbURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserCreateInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['Gender']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateInput = {
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  gender?: InputMaybe<Scalars['Gender']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  statusMessage?: InputMaybe<Scalars['String']['input']>;
};
