class App extends React.Component {
    render() {
        return (
            <div>
                <Hello />
                <Hello />
                <Hello />
            </div>
        );
    }
}

// function Hello() {
//     return (
//         <div>
//             <h1>Hello World!</h1>
//             <p>This is the first component</p>
//         </div>
//     );
// }

ReactDOM.render(<App />, document.getElementById('root'));
