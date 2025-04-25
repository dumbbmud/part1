// import { use, useState } from "react"

// const History = (props) => {
//   if (props.allClicks.length == 0){
//     return(
//     <div>
//       the app is used by pressing the buttons
//     </div>
//     )
//   }
//   return(
//     <div>
//       button pressed history: {props.allClicks.join(" ")}
//     </div>
//   )
// }

// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

// const App = () => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([])
//   const [total, setTotal] = useState(0)

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left+1)
//     setTotal(total+1)
//   }
//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right+1)
//     setTotal(total+1)
//   }

//   return (
//     <div>
//       {left}
//       <Button onClick={handleLeftClick} text="left"/>
//       <Button onClick={handleRightClick} text="right"/>
//       {right}
//       <br/>
//       total: {total}
//       <br/>
//       <History allClicks={allClicks}/>
//     </div>
//   )
// }

import { useState } from 'react'

const Display = ({text}) => <><h1>{text}</h1></>

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = (props) => {
  console.log(props)
  return(
    <div><p>{props.text} {props.count}</p></div>
  )
}

const Statistics = ({good, bad, neutral}) => {

  const displayAverage = () => <>{(good*1 + bad*-1)/(good+bad+neutral)}</>
  const displayPositive = () => <>{good*100/(good+bad+neutral)}%</>
  if (good+bad+neutral > 0){
  return(
  <div>
    <table>
      <tbody>
      <tr><td><StatisticLine text="good:" count={good}/></td></tr>
      <tr><td><StatisticLine text="neutral:" count={neutral}/></td></tr>
      <tr><td><StatisticLine text="bad:" count={bad}/></td></tr>
      <tr><td><StatisticLine text="all:" count = {bad+good+neutral} /></td></tr>
      <tr><td><StatisticLine text="average:" count={displayAverage()}/></td></tr>
      <tr><td><StatisticLine text="positive:" count={displayPositive()}/></td></tr>
      </tbody>
    </table>
  </div>)}
  else{
    return (
    <>
    <p>No feedback given</p>
    </>)
  }

}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodIncrement = () => setGood(good+1)
  const neutralIncrement = () => setNeutral(neutral+1)
  const badIncrement = () => setBad(bad+1)


  return (
    <div>
      <Display text="give feedback" />
      <Button onClick={goodIncrement} text="good"/>
      <Button onClick={neutralIncrement} text="neutral"/>
      <Button onClick={badIncrement} text="bad"/>
      <Display text={"statistics"} />
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App