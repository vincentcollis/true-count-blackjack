"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import BettingUnitDisplay from "./components/BettingUnitDisplay";
import CounterInput from "./components/CounterInput";
import CounterButton from "./components/CounterButton";
import CounterDisplay from './components/CounterDisplay';

import { useCallback } from "react";

export default function Home() {

  const [count, setCount] = useState(0)
  const [totalDecks, setTotalDecks] = useState(6)
  const [totalCardsDrawn, setTotalCardsDrawn] = useState(0)
  const [trueCount, setTrueCount] = useState(0)
  const [acesDrawn, setAcesDrawn] = useState(0)
  
  const handleButton = useCallback( (action?:string, label?:string) => {
    // Update total cards drawn
    setTotalCardsDrawn((prevTotalCardsDrawn) => {
      const updatedTotalCardsDrawn = prevTotalCardsDrawn + 1;
  
      // Calculate the updated count
      let updatedCount = count;
      if (action === "add" && label === "+1") {
        updatedCount += 1;
      } else if (action === "subtract" && label === "-1") {
        updatedCount -= 1;
      } else if (action === "subtract" && label === "ace") {
        updatedCount -= 1;
        // Update acesDrawn when an ace is drawn
        setAcesDrawn((prevAcesDrawn) => prevAcesDrawn + 1);
      }
  
      // Update count state
      setCount(updatedCount); 
  
      // Update true count
      const updatedTrueCount = Number(
        (updatedCount / (totalDecks - Math.round(updatedTotalCardsDrawn / 52))).toFixed(1)
      );
      setTrueCount(updatedTrueCount);
  
      return updatedTotalCardsDrawn;
    });
  },[count,totalDecks]);


  useEffect(()=>{
    handleButton()
  },[totalDecks, handleButton])
  
        
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <CounterButton
       label = "+1"
       incrementor = "add"
       onClick={handleButton}
       />
       <CounterButton
       label = "ace"
       incrementor = "subtract"
       onClick={handleButton}
       />
       <CounterButton
       label = "-1"
       incrementor = "subtract"
       onClick={handleButton}
       />
       <CounterDisplay
        count = {count}
        trueCount = {trueCount}
        acesDrawn = {(4*totalDecks) - acesDrawn}
       />
       <BettingUnitDisplay
        trueCount = {trueCount}
       />
       <CounterInput
        label = "Number of Decks"
        totalDecks={totalDecks}
        setInputState={setTotalDecks}
       />
      </main>



      <footer className={styles.footer}>
        Created By: Vincent Collis
        <a
          href="https://github.com/vincentcollis/true-count-blackjack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        
        <a
          href="https://www.linkedin.com/in/vincentcollis/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
