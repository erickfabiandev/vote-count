import { useContext } from 'react';
import { CountContext } from '../../store/CountContext';
import './Candidate.scss'

const Candidate = ({id, name, img}) => {

  const store = useContext(CountContext)
    
  const onChange = () =>{
    store.handleChange(id)
  }

  return (
    <div className='candidate'>
      <img className='candidate__img'src={img}/>
      <p className='candidate__name'>{name}</p>
      <button className='candidate--button' onClick={onChange}>VOTAR</button>
    </div>
  );
};

export default Candidate;