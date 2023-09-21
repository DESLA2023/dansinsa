import { ComponentProps } from "react";

export default function Input(props: ComponentProps<"input">) {
   return (
      <input
         className="border-[1.2px] border-slate-300 p-3 rounded-md focus:bg-inherit focus:outline-none"
         {...props}
      />
   );
}
