

type DisplayProps = {
  count: number;
  trueCount: number;
  acesDrawn: number;
}

const CountDisplay = ({count,trueCount,acesDrawn}:DisplayProps) =>{

  return(
    <div>
      <span>
      Count: {count} &nbsp;
      True Count: {trueCount} &nbsp;
      Remaining Aces: {acesDrawn}
      </span>
    </div>
  )
}

export default CountDisplay