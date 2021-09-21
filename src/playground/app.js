class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

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
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        console.log(this.state.options.indexOf(option))
        if(!option) {
            return 'Enter valid value';
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        
    }
    render() {
        const title = 'Indecision app';
        const subtitle = 'Put your life in the hands of a computer';
    
        return (
            <div>
            <Header title={title}  subtitle={subtitle} />
            <Action  
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
            />
            <Options 
            handleDeleteOption={this.handleDeleteOption}
            handleDeleteOptions={this.handleDeleteOptions} 
            options={this.state.options} 
            />
            <AddOption 
            handleAddOption={this.handleAddOption}
             />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div> 
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}



const Action = (props) => {
    
        return (
            <div>
                <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        )

}

const Options = (props) => {
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all button</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ul>
                {
                    props.options.map((option) => 
                    <Option 
                    key={option} 
                    textOption={option} 
                    handleDeleteOption={props.handleDeleteOption}
                    />)
                }
            </ul>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <ul>
                {props.textOption}
                <button onClick={(e) => {
                    props.handleDeleteOption(props.textOption);
                }}>remove</button>
            </ul>
        </div>
    )
}


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
       

        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }))
        if(!error) {
            e.target.elements.option.value = '';
        }

        
        
    }
    
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type='text' name='option' />
                    <button>AddOption</button>
                </form>

            </div>
        );
    }
    
}



ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
    );