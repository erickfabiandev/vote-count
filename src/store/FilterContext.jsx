import { createContext, useState } from "react";

export const FilterContext = createContext()

export const FilterProvider = ({ children }) => {
  const [filterOption, setFilterOption] = useState({filterDatatype:'Numerico', filterCandidate:'Todos'})

  const handleChange = (options) =>{
    setFilterOption ({
      filterDatatype: options.filterDatatype, 
      filterCandidate: options.filterCandidate
    })
  }

  const dataProvider = {
    filterOption,
    handleChange
  }

  return (
    <FilterContext.Provider
      value={dataProvider}
    >
      {children}
    </FilterContext.Provider>
  )
  
}
