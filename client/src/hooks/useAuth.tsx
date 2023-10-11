import React from 'react';
import { AuthPayload, MutationSignInArgs } from '@/gql/graphql';
import { gql, useMutation } from '@apollo/client';

const LOGIN_USER = gql`
  mutation {
    signIn(email: "test@test.com", password: "test") {
      token
      user {
        id
        email
        name
        createdAt
        updatedAt
      }
    }
  }
`;

export const useAuth = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [signin, { data, loading, error }] = useMutation(LOGIN_USER);

  const login = async (args: MutationSignInArgs) => {
    await signin({
      variables: {
        email: args.email,
        password: args.password,
      },
    });
    if (!loading) console.log(data);
    if (error) console.log(error);
    else {
      setIsLogin(true);
      localStorage.setItem('dansinsa-token', data.signIn.token);
    }
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
