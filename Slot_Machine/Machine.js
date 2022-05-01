class Machine extends React.Component {
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>
                    {(this.props.first === this.props.second && this.props.second === this.props.third)
                    ? "You win!!!!!" 
                    : "Sorry again"}
                </h4>
                <div>
                    <span>{this.props.first}</span>
                    <span>{this.props.second}</span>
                    <span>{this.props.third}</span>
                </div>

            </div>
            
        );
    }
}