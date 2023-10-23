import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IClothes } from './IClothes';
import { parsePrice } from '../../utils/parsePrice';
import { useRecoilValue } from 'recoil';
import { vtonAtom } from '../../assets/atoms/vtonAtom';
import { HashLoader } from 'react-spinners';

export default function Card() {
  const [clothes, setClothes] = useState<IClothes[] | null>(null);
  const vtonOn = useRecoilValue(vtonAtom);
  const fetchData = async () => {
    const { data } =
      await axios.get<AxiosResponse<IClothes[]>>('/data/clothes.json');
    setClothes(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {clothes?.map((cth) => (
        <div
          key={cth.id}
          className='overflow-hidden flex flex-col items-center justify-center rounded-xl shadow-lg m-4'
        >
          <div className='aspect-square w-full overflow-hidden flex items-center justify-center'>
            {vtonOn ? (
              cth.vtonImage !== null ? (
                <img src={cth.vtonImage} alt='vton' className='object-cover' />
              ) : (
                <HashLoader />
              )
            ) : (
              <img src={cth.image} className='object-cover' alt='clothes' />
            )}
          </div>
          <div className='flex flex-col content-center p-4 w-full bg-black text-white'>
            <div className='text-xs w-full flex justify-between content-between'>
              <span>[ {cth.brand} ]</span> <p>₩ {parsePrice(cth.price)}</p>
            </div>
            <p className='text-xl'>{cth.name}</p>
            <p className='text-sm'>" {cth.description} "</p>
          </div>
        </div>
      ))}
    </div>
  );
}
