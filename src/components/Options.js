import React from 'react';
import { Option } from './Option';

const Options = (props) =>  (
        <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
             <button className="button button--link"
                onClick={props.handleDeleteOptions}
             >
            Remove all button
             </button>
             </div>
        {props.options.length === 0 && <p className="message__p">Please add an option to get started!</p>}
            
                {
                    props.options.map((option, index) => 
                    <Option 
                    key={option} 
                    textOption={option} 
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    />)
                }
            
        </div>
    );


export { Options };