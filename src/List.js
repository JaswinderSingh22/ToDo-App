import React from 'react'

export const List = (props) => {
    
    
    
    
    return (
        <div>
            <div className='todo_style'>
            
            <li>{props.text}</li>
            <i 
            onClick={()=>{
                props.onSelect(props.id);
            }}
            className="fas fa-times" aria-hidden="true"></i>
            </div>
        </div>
    
    )
}
