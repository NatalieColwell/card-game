import React from "react";
import MainCard from "./MainCard";


class Counter extends React.Component {
    state = {
        count: 0
    };


imageClick = () => {
    this.setState({count: this.state.count +1});
};

handleDecrement = () => {
    this.setState({ count: this.state.count -1});
}

render() {
    return(
        <div>
            <MainCard
            count={this.state.count}
            imageClick={this.imageClick}
       />
       </div>
    )
}
}


export default Counter;