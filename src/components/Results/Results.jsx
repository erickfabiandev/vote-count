import { useContext } from 'react'
import { FilterContext } from '../../store/FilterContext'
import { CountContext } from '../../store/CountContext'
import './Results.scss'


const Results = () => {
  const {filterOption} = useContext(FilterContext)
  const storeCandidate = useContext (CountContext)
  const totalVote = storeCandidate.voteCount()
  

  return (
    <div className='results'>
      <h2 className='results__title'> Resultados de la Votacion </h2>
      {storeCandidate.dataVote.map((item)=>{
        return(
          <div key={item.id} className={filterOption.filterCandidate===item.name || filterOption.filterCandidate==='Todos' ? 'visible' : 'novisible'}>
            <p>{`- ${item.name}:`}</p>
            <p>{filterOption.filterDatatype==='Numerico'?item.count:`${Math.ceil((item.count/totalVote)*100)}%`}</p> 
          </div>
        )
      })
      }
    </div>
  )
}

export default Results;