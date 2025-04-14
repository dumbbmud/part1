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


const Statistics = ({good, bad, neutral}) => {

  const displayAverage = () => <div>average {(good*1 + bad*-1)/(good+bad+neutral)}</div>
  const displayPositive = () => <div>positive {good*100/(good+bad+neutral)}%</div>

  return(
  <div>
    <p><h1>Statistics</h1></p>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {good+bad+neutral}</p>
    <p>{displayAverage()}</p>
    <p>{displayPositive()}</p>



    
  </div>)

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

      <Statistics good={good} bad={bad} neutral={neutral}/>
      {/* <Display text={"statistics"}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {bad+neutral+good}</p> */}
      {/* <DisplayAverage />
      <DisplayPositive /> */}
      
    </div>
  )
}

export default App