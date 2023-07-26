import { useContext } from 'react';
import { CountContext } from '../../store/CountContext';
import './TotalVotes.scss'

const TotalVotes = () => {
  const store = useContext(CountContext)
  return (
    <div className='totalvotes'>
      <h2 className='totalvotes__title'>Total de Votos</h2>
      <h2 className='totalvotes__count'>{store.voteCount()}</h2>
    </div>
  );
};

export default TotalVotes;