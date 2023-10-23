import { Toggle } from '../ui';
import { useRecoilState } from 'recoil';
import { vtonAtom } from '../../assets/atoms/vtonAtom';

export default function MyVtonBar() {
  const [onVton, setOnVton] = useRecoilState(vtonAtom);
  return (
    <div className='flex content-center justify-between mx-4 bg-amber-300 py-2 px-3 rounded-lg'>
      <span>가상피팅을 경험 해보세요!</span>
      <Toggle checked={onVton} onClick={() => setOnVton(!onVton)} />
    </div>
  );
}
