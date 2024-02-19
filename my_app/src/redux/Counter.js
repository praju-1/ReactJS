import React from "react";
import { connect } from "react-redux";

const Counter= ({counter, increament, decreament})=>{
    return(
        <div>
            <h2>Counter : {counter} </h2>
            <button onClick={increament}>INCREMENT</button>
            <button onClick={decreament}>DECREMENT</button>
        </div>
    )
};

const mapStateToProps = (state)=>{
    return{
        counter: state.counter
    }
}

const mapDistpatchToprops = (dispatch)=>{
    return{
        increament:()=> dispatch({type: 'INCREMENT'}),
        decreament:()=> dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDistpatchToprops)(Counter);