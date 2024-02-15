import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((result) =>{
                setData(result)
                setLoading(false)
            })
            .catch((error)=>{
                console.error('Error while fectching data');
                setLoading(false)
            })


    }, [])

    return(
        <DataContext.Provider value={{data, loading}}>
            {children}
        </DataContext.Provider>
    )

}



