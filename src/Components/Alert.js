import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className = "container" style={{height : "50px"}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong><i>{capitalize(props.alert.type)}</i> : {props.alert.msg}</strong>
         
        </div> 
        } 
        </div>  
    )
}

export default Alert


