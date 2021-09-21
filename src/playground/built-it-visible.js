
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.handleVisibility = this.handleVisibility.bind(this);
    } 
    handleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility
             }
            
        })
        
    }
    render() {
        return (
            <div>
            <h1>Visibility toggle</h1>
            <button onClick={this.handleVisibility}>
            {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>
            {this.state.visibility && <p>Show this paragraph</p>}
        </div> 
        )
    }
}

ReactDOM.render(
    <VisibilityToggle />,
    document.getElementById('app')
);









