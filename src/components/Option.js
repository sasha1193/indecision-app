import React from 'react';


const Option = (props) =>  (
        <div className="option">
                <p className="option__text">{props.count}. {props.textOption}</p>
                
                <button 
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.textOption);
                }}>remove</button>
        </div>
    )

export  { Option };