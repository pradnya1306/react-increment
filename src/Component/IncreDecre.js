import React from "react";


class IncreDecre extends React.Component{
    constructor(){
        super();
        this.state={
            number:0
                }
            }


    increment=()=>{
        this.setState((val)=>{
        return{number:val.number+1}
                
        })
    }
    decrement=()=>{
        this.setState((val)=>{
            if(val.number<=0){
                alert("it will become negative number")
            }
            else{
            return{number:val.number-1}
            }
                
        })
    }
    reset=()=>{
        this.setState((val)=>{
            return{number:0}
        })
    }
    
    render(){
        return(
            <div>
            
            <h1>{this.state.number}</h1>
            <button className="incre" onClick={()=>{this.increment()}}>Increment</button>
            <button className="decre" onClick={()=>{this.decrement()}}>Decrement</button><br></br>
            <button className="reset" onClick={()=>{this.reset()}}>Reset</button>
            </div>
        )
    }
}


export default IncreDecre;