import { useState } from "react"

const Search = ({onSearchChange}) => {
  const [term, setTerm] = useState('');
      
  const handleChange = (e) => {
        setTerm(e.target.value);
        onSearchChange(e.target.value);
    }
  return(
    <input className="form-control" 
    type="text" 
    placeholder="What?" value={term} 
    onChange={handleChange}/>
  )
}
export default Search
//<input type="text" class="form-control" placeholder="Default Input">