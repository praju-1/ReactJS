import React, { useEffect, useState } from 'react'

function CountApp() {
    const [count, setCount] = useState(0)

    // useEffect(()=>{
    //     document.title = `User clicked on ${count} Times`
    // })

    const useDocumentTitle = title =>{
        useEffect(()=>{
            document.title = title
        })
    }

    useDocumentTitle(`Virat clicked on ${count} times`)
    return (
        <>
            <div>CountApp</div>
            <h4>User clicked on a Button for {count} times.</h4>
            <button onClick={() => {
                setCount(count + 1)
            }}>count</button>
        </>
    )
}

export default CountApp