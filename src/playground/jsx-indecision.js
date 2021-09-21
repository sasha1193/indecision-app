console.log('APP');

const app = {
    title: 'Indecision app',
    subtitle: 'Some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option);
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFunction();
    } 
};

const removeAllButton = () => {
    app.options = [];
    renderFunction();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option + randomNumber);
};

const root = document.getElementById('app');



const renderFunction = () => {
    const template = (
        <div>
                <h1>{app.title}</h1> 
                {app.subtitle && <p>{app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={removeAllButton}>RemoveAll</button>
                {
                   /* numbers.map((number) => {
                        return <p key={number}>Number: {number}</p>
                    })*/
                }
                <ol>
                    {
                        app.options.map((option) => <li key={option}>{option}</li>)
                    }
                </ol>
                <form onSubmit={onFormSubmit}>
                    <input type='text' name='option' />
                    <button>Add Option</button>
                </form>
        </div>
        );
        ReactDOM.render(template, root);
}

renderFunction();