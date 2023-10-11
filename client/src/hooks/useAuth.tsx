import React from 'react';
import { graphql } from '../gql';
import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AuthPayload, MutationSignInArgs } from '@/gql/graphql';

const signIn = graphql(`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`);

const graphqlQuery = (id: string, password: string) => ({
  query: signIn,
  variables: {
    email: 'test@test.com',
    password: '1234',
  },
});

export const useAuth = () => {
  const queryClient = useQueryClient();
  const [isLogin, setIsLogin] = React.useState(false);

  const sigin = async ({
    email,
    password,
  }: MutationSignInArgs): Promise<AuthPayload> => {
    const { data } = await axios.post<AuthPayload>(
      'http://localhost:6001/graphql',
      {
        query: `
        mutation signIn($email: String!, $password: String!) {
          signIn(email: $email, password: $password) {
            token
          }
        }
      `,
        variables: {
          email,
          password,
        },
      }
    );
    return data;
  };

  const { mutate, isLoading, isError, error, isSuccess, data } =
    useMutation(sigin);

  const login = async (args: MutationSignInArgs) => {
    mutate(args);
    if (isSuccess) console.log(data);
    //  window.location.href = '/';
  };

  const logout = () => {
    setIsLogin(false);
  };

  return {
    isLogin,
    login,
    logout,
  };
};
