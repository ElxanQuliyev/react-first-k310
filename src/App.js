import { useState } from 'react';
import './App.scss';
import Product from './components/Product';

function App() {
  let arr=["Iphone","Samsung","Huawai"]
  const [phones, setphones] = useState(arr)
  const [searchText, setsearchText] = useState("")
  const addHandler =()=>{
    setphones(old=>[...old,searchText])
  } 
  return (
    <div className=''>
        {phones.map((c,i)=>(
          <div key={i} className='product'>
            <p>{c}</p>
          </div>
        ))}
      <input placeholder='text...' onChange={(e)=>setsearchText(e.target.value)}/>
      <button onClick={addHandler}>Click</button>
    </div>
    );  
}

export default App;
