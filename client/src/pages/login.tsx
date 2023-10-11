import Input from '../components/ui/Input';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const { login } = useAuth();
  const handle = {
    submit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      login({
        email: 'test@test.com',
        password: '1234',
      });
    },
  };
  return (
    <div className='p-3'>
      <form className='flex flex-col gap-3' onSubmit={handle.submit}>
        <Input type='text' placeholder='아이디' />
        <Input type='password' placeholder='비밀번호' />
        <button type='submit'>로그인</button>
      </form>
    </div>
  );
}
