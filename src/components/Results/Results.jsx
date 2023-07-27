import { useContext } from 'react'
import { FilterContext } from '../../store/FilterContext'
import { CountContext } from '../../store/CountContext'
import './Results.scss'


const Results = () => {
  const {filterOption} = useContext(FilterContext)
  const { dataVote, voteCount } = useContext (CountContext)
  

  return (
    <div className='results'>
      <h2 className='results__title'> Resultados de la Votacion </h2>
      {dataVote.map((item)=>{
        return(
          <div 
          key={item.id} 
          className={filterOption.filterCandidate===item.name || filterOption.filterCandidate==='Todos' ? 'visible' : 'novisible'}>
            <p>{`- ${item.name}:`}</p>
            <p>{filterOption.filterDatatype==='Numerico'?item.count:`${Math.ceil((item.count/voteCount())*100)}%`}</p> 
          </div>
        )
      })
      }
    </div>
  )
}

export default Results;