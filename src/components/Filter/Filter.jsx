import { useContext, useState } from 'react'
import { FilterContext } from '../../store/FilterContext'
import { CountContext } from '../../store/CountContext'
import './Filter.scss'

const Filter = () => {

  const store = useContext(FilterContext)
  const storeCandidate = useContext (CountContext)
  const [selectOption, setSelectOption] = useState({filterDatatype:'', filterCandidate:''})

  const onChange = (event) =>{
    const {name, value} = event.target
    setSelectOption({...selectOption, [name]:value})
  }

  const onSubmit = (event)=>{
    event.preventDefault();
    store.handleChange(selectOption)
  }

  return (
    <div className='filter'>
      <h2 className='filter__title'>Filtrar informacion</h2>
      <form onSubmit={onSubmit} className='filter__form'>
        <div>
          <fieldset className='filter__form--datatype'>
            <legend>Data type</legend>        
            <input id='Numerico' 
              name='filterDatatype' 
              type='radio' 
              value='Numerico' 
              onChange={onChange} 
              required
            />
            <label htmlFor='Numerico'>Numerico</label>        
            <input 
              id='Porcentaje' 
              name='filterDatatype' 
              type='radio' 
              value ='Porcentaje' 
              onChange={onChange}/>
            <label htmlFor='Porcentaje'>Porcentaje</label>
          </fieldset>
          <fieldset className='filter__form--candidate'>
          <legend>Candidate</legend> 
            <select 
            id='selectCandidate' 
            name='filterCandidate' 
            onChange={onChange} 
            required>
              <option value=''>-- Select candidate --</option>
              <option name='Todos' value='Todos'>Todos</option>
              {storeCandidate.dataVote.map((item)=>{
                return(
                  <option 
                  key={item.id} 
                  name={item.name} 
                  value={item.name}>{item.name}</option>
                )
                }                    
              )}
            </select>
          </fieldset> 
        </div>                    
        <button type='submit' className='filter__form--button'>Aplicar Filtros</button>
      </form>
    </div>

    
    
  );
};

export default Filter;