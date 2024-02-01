import React from 'react'

const heading = {
    fontSize: '45px',
    color: 'blue'
}

function Inlinecss() {

    return (
        <>
        <h1 className= 'error'>This is Error Text</h1>
            <h1 style={heading}> Inlinecss component structure</h1>

        </>
    )
}

export default Inlinecss