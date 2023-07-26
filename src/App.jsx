import './App.scss'
import { useContext } from 'react';
import Candidate from './components/candidate/Candidate'
import { CountContext } from './store/CountContext'
import TotalVotes from './components/TotalVotes/TotalVotes';
import Filter from './components/Filter/Filter';
import Results from './components/Results/Results';
import { GiVote } from "react-icons/gi";

function App() {
  const {dataVote} = useContext(CountContext)

  return (
    <div className='container'>
      <p className='container__title'>Elecciones 2023 <GiVote size={30}/></p>
      <section className='container__candidates'>
        {dataVote.map((item)=>{
          return (
            <div key={item.id}>
                <Candidate  id={item.id} name={item.name} img={item.img}/>  
            </div>               
          )
        })}
      </section>
      <section className='container__results'>
        <div className='container__results--filters'>
          <Filter/>
          <Results/> 
        </div>
        <div className='container__results--totals'>
            <TotalVotes/>
        </div>        
      </section>
      <footer className='container__footer'>
        <p>Create by <a href='https://erickfabiandev.com/'> erickfabiandev </a></p>
      </footer>
    </div>
  )
}

export default App
