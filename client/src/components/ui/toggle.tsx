import { ComponentProps } from 'react';

interface ToggleProps extends ComponentProps<'input'> {}

export default function Toggle({ checked, ...props }: ToggleProps) {
  return (
    <label>
      <div
        className={`h-6 w-12 ${
          checked ? 'bg-amber-500' : 'bg-white'
        } rounded-full box-border flex items-center justify-center transition-all`}
      >
        <div
          className={`top-[50%] ${
            checked ? 'bg-white' : 'bg-gray-800'
          } aspect-square rounded-full h-[calc(100%-0.5rem)] transition-all`}
          style={{
            transform: `translateX(${checked ? '50%' : '-50%'})`,
          }}
        />
      </div>
      <input
        type='checkbox'
        className='toggle-checkbox hidden'
        checked={checked}
        {...props}
      />
    </label>
  );
}
