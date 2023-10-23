import { useState } from 'react';
import Input from '../components/ui/input';
import { useAuth } from '../hooks/useAuth';
import { gql, useMutation } from '@apollo/client';

export default function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handle = {
    submit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login({ email, password });
    },
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className='p-3'>
      <form className='flex flex-col gap-3' onSubmit={handle.submit}>
        <Input
          type='text'
          placeholder='아이디'
          name='email'
          onChange={onChange}
          value={email}
        />
        <Input
          type='password'
          placeholder='비밀번호'
          name='password'
          onChange={onChange}
          value={password}
        />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
}
