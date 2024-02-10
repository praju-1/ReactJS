import React, {useContext} from 'react'
import { ContextApi } from './ContextApi'

function Mycomponent(){
    const {text, setText} = useContext(ContextApi);
    return(
        <>
        <div>{text}</div>
        <button onClick={()=>setText('Hello world!')}>Click Me</button>
        </>
    )
}

export default Mycomponent