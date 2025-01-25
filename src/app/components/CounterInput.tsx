type CounterInputProps = {
  totalDecks?:number;
  bettingUnit?:number;
  label:string;
  setInputState: (arg:number)=>void
}

const CounterInput = (props:CounterInputProps) => {

  const value = props.totalDecks || props.bettingUnit

  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const inputValue = parseInt(e.target.value, 10); 
    
    if(inputValue < 0) return 0

    if (!isNaN(inputValue)) {
      props.setInputState(inputValue); 
    }
  };

  return(
    <form>
      <label> {props.label}: </label>
      <input
        value={value}
        type="number"
        onChange={handleFormInput}
      />
    </form>
  )
}

export default CounterInput