import React from 'react';
import AddOption from './/AddOption';
import { Options } from './/Options';
import Action from './/Action';
import Header from './/Header';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const x = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: x
        }))
    };
    handleClearPick = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }


    handleAddOption = (option) => {
        console.log(this.state.options.indexOf(option))
        if(!option) {
            return 'Enter valid value';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        
    };

    //fetching data
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json); 

             if(options) {
                this.setState(() => ({ options }))
            }
        } catch(e) {
            //Do nothing at all
        }
       
       
       console.log('fetchin data')
        }
    //data saving
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data')
        }

        
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer';
    
        return (
            <div>
            <Header title={title}  subtitle={subtitle} />
            <div className="container">
                <Action  
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <div className="widget">
                <Options 
                    handleDeleteOption={this.handleDeleteOption}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    options={this.state.options} 
                 />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                 />
                </div>
            </div>
            
             <OptionModal 
             handleClearPick={this.handleClearPick}
             selectedOption={this.state.selectedOption}
             />
            </div>
        )
    }
}

export default IndecisionApp;