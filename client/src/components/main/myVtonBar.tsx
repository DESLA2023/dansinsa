import { useState } from 'react';
import { Toggle } from '../ui';

export default function MyVtonBar() {
  const [on, setOn] = useState(false);
  return (
    <div className='flex content-center justify-between mx-4 bg-amber-300 py-2 px-3 rounded-lg'>
      <span>가상피팅을 경험 해보세요!</span>
      <Toggle checked={on} onClick={() => setOn(!on)} />
    </div>
  );
}
