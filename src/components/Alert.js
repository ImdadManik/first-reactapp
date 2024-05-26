import React from 'react'

function Alert(props) {

    const capitalizeChar=(word) =>{
        const myword =  word.toLowerCase();
        return myword.charAt(0).toUpperCase() + myword.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeChar(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert