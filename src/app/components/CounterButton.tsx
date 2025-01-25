

type ButtonProps<T> = {
  label: string;
  incrementor: T;
  onClick: (...args:[T,string])=> void;
}

const CountButton = <T,>({label,incrementor, onClick}:ButtonProps<T>)=>{
    return (
    <button
     onClick={()=> onClick(incrementor,label)}>
      {label}
    </button>
    )
  
 }

export default CountButton;

