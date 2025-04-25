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
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(8).fill(0))
  
  const incrementVote = (x) => {
    const copy = [...votes]
    copy[x] += 1
    setVotes(copy)

  }
  
  const [selected, setSelected] = useState(() => Math.floor(Math.random() * anecdotes.length))
  


  return (
    <div>
      <Display text="Anecdote of the day" />
      {anecdotes[selected]}
      <p><strong>has votes:</strong> {votes[selected]}</p>
      <br/>
      <Button onClick={() => incrementVote(selected)} text={"vote"} />
      <Button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))} text={"next anecdote"}/>
      <Display text="Anecdote with most votes" />
      {anecdotes[votes.indexOf(Math.max(...votes))]}

      <br/>
    </div>
  )
}

export default App