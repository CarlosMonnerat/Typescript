interface FormProps {
   label: string,
   state: any,
   funcState: any
};

export default function Form (props: FormProps) {
   return (
      <div className="flex mx-2">
         <label className="w-[70px] font-bold">{props.label}</label>
         <input className="border p-1 w-full rounded-lg" value={props.state} onChange={(evt) => props.funcState(evt.target.value)}/>
      </div>
   )
};