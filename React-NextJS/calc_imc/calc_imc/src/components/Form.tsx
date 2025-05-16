interface FormProps {
   label: string,
   state: any,
   funcState: any
};

export default function Form (props: FormProps) {
   return (
      <div>
         <label>{props.label}</label>
         <input value={props.state} onChange={(evt) => props.funcState(evt.target.value)}/>
      </div>
   )
};