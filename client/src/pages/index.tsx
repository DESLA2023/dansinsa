import Card from '../components/main/card';
import MyVtonBar from '../components/main/myVtonBar';

export default function Main() {
  return (
    <main className='mb-[80px]'>
      <div className='m-4'>
        <h2 className='text-xl'>당신만을 위한 패션,</h2>
        <h1 className='text-4xl font-bold'>DANSINSA 스토어.</h1>
      </div>
      <MyVtonBar />
      <Card />
    </main>
  );
}
