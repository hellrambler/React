class Hello extends React.Component {
    render() {
        return (
        <div>
            <h1>Hello World!</h1>
            <p>This is the first component</p>
        </div>
        );
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
