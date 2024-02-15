import React from "react";
import { useData } from "./DataContext";

function DisplayData(){
    const {data, loading} = useData();

    return(
        <div>
            {loading ? (
                <p>Loading</p>
            ): (
                <ul>
                {data.map((items)=>(
                    <li key={items.id}>{items.body}</li>
                ))}
                </ul>
            )}
        </div>
    )
};
export default DisplayData;