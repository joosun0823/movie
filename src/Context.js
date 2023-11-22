import {createContext, useReducer,useState} from 'react'
import {themoviedb} from './comp/instans'
export const MyContext = createContext();

function Context({children}) {
    
  const [data, setState] = useState(0);

  const dataTrans = async (type,url)=>{
    let res;
    res = await themoviedb(url);
    setState(res.data.result);
  }

    return (
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
  )
}

export default Context