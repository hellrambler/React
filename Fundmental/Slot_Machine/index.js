class App extends React.Component {
    render() {
        return (
            <div>
                <Machine 
                    first="🍏"
                    second="🍎"
                    third="🍏"
                />
                <Machine 
                    first="🍏"
                    second="🍏"
                    third="🍏"
                />
            </div>
            
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));