import { createContext, useState } from 'react';

export const CountContext = createContext()

export const CountProvider = ({ children }) =>{
  const [ dataVote, setDataVote ] = useState([
    {id:0,name:'Juan Perez',img:'https://res.cloudinary.com/dkddd5aky/image/upload/v1690357293/voteCount/can4_pwk28s.webp',count:0},
    {id:1,name:'Jorge Ramirez',img: 'https://res.cloudinary.com/dkddd5aky/image/upload/v1690357245/voteCount/can3_ayz4bn.webp',count:0},
    {id:2,name:'Ana Ortiz', img:'https://res.cloudinary.com/dkddd5aky/image/upload/v1690357209/voteCount/can2_znupky.webp',count:0},
    {id:3,name:'Beatriz Palacios',img:'https://res.cloudinary.com/dkddd5aky/image/upload/v1690357144/voteCount/can1_f2muxb.webp',count:0}
  ])

  const handleChange = (id) =>{
    const updateVote = dataVote.map((candidate)=>{
      return candidate.id === id ? {...candidate, count: candidate.count+1}:candidate 
    })
    setDataVote(updateVote)
  }

  const voteCount = () =>{
    const countTotal = dataVote.reduce((acumulator,item)=>acumulator+item.count,0)    
    return countTotal
  }

  const dataProvider = {
    dataVote,
    handleChange,
    voteCount
  }

  return (
    <CountContext.Provider
      value = {dataProvider}
    >
      {children}
    </CountContext.Provider>
  )

}