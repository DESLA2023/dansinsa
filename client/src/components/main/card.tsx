import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { IClothes } from './IClothes';
import { parsePrice } from '../../utils/parsePrice';

export default function Card() {
  const [clothes, setClothes] = useState<IClothes[] | null>(null);
  const [vtonImageOn, setVtonImageOn] = useState(false); // TODO: 전역 상태로 관리할 것
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
          <img
            src={cth.image}
            className='aspect-square object-cover'
            alt='clothes'
          />
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
