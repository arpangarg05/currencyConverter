import { useState, useEffect, useCallback } from "react"

import Card from "./Card"
export default function App() {
  const [currData, setCurrData] = useState(null);
  const [keys, setKeys] = useState(null);

  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("inr");

  const [fromVal, setFromVal] = useState(1);
  const [toVal, setToVal] = useState();

  const getLatestRates = useCallback((currency) => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setCurrData(res));
  }, [from])

  useEffect(()=>getLatestRates(from),[from]);


  useEffect(() => {
    if (currData) {
      console.log(currData)
        setKeys(Object.keys(currData[from]));
        setToVal(fromVal*currData[from][to])
    }
  }, [currData,to,fromVal]);



  return (
    <div className="w-full h-dvh pt-1 bg-slate-700">
      <div className="mt-32 ">
        <Card  className="pt-5" def={from} list = {keys} value={fromVal} changeSet={(e)=>{setFrom(e)}} changeFromVal={(e)=>{setFromVal(e)}} status={"From"} />
        <Card className="pb-5 mt-5" def={to} list = {keys} value={toVal} changeSet={(e)=>{setTo(e)}} status={"To"} />
        <div className="flex justify-center">
</div>
        
      </div>
    </div>
  )
}