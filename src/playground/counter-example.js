
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    componentDidMount() {
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount, 10);

        if(!isNaN(count)) {
            this.setState(() => ({ count }));
        console.log('fetch');
        }
        
    }
    componentDidUpdate(prevState, prevProps) {
        if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
            console.log('save');
        }
       
    }
    handleAddOne() {
     this.setState((prevState) => {
         return {
             count: prevState.count + 1
         }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
        render() {
            return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
        </div>
            )
        
    }
}



    ReactDOM.render(
        <Counter />,
        document.getElementById('app')
    )




/*let count = 0;
const addOne = () => {
    count ++;
    renderCounterApp();
};
const minuseOne = () => {
    count--;
    renderCounterApp();
};

const resetCount = () => {
    count = 0;
    renderCounterApp();
};



const root = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minuseOne}>-1</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, root);
};

renderCounterApp();
*/