import CounterInput from "./CounterInput";
import { useState } from "react";

type BettingUnitDisplayProps = {
  // bettingUnit: number
  trueCount: number
}

const BettingUnitDisplay = ({trueCount}:BettingUnitDisplayProps) => {

  const [bettingUnit, setBettingUnit] = useState(0)

  let recommendedBet
  switch (true) { // Switch on `true` to allow range checks
    case trueCount <= 0:
      recommendedBet = 10; // Minimum bet for True Count ≤ 0
      break;
    case trueCount >= 1 && trueCount < 2:
      recommendedBet = bettingUnit * 2; // Bet $20 for True Count = 1
      break;
    case trueCount >= 2 && trueCount <3:
      recommendedBet = bettingUnit * 4
      break;
    case trueCount >= 3  && trueCount <4:
      recommendedBet = bettingUnit * 6
      break;
    case trueCount >= 4  && trueCount <5:
      recommendedBet = bettingUnit * 8
      break;
    case trueCount >= 5:
      recommendedBet = bettingUnit * 10
      break;
    default:
      recommendedBet = bettingUnit; // Default to minimum bet for unexpected cases
      break;
  }

  return (
    <>    
      <div>
        Recommended Bet: {recommendedBet}
      </div>
      <CounterInput
      label="Betting Unit: "
      bettingUnit={bettingUnit}
      setInputState={setBettingUnit}
      />
      <div>
        Betting Unit: $ {bettingUnit}
      </div>
    </>
  )
}

export default BettingUnitDisplay