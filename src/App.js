import React from 'react';
import NavBar from "./components/NavBar"
import MainCard from "./components/MainCard";
// import Counter from "./components/Counter";
import card from "./card.json";
// import MainCards from "./components/MainCards.css";

const imgStyle = {
  marginBottom: "30px"
}

class App extends React.Component {
  
  state = {
    card: card,
    selected: [],
    count: 0
  };

  imageClick = (id) => {
    console.log("THIS IS ", id)
    this.setState({ count: this.state.count + 1 });
    console.log("COUNT", this.state.count)

    // if(this.state.id === )

    // const { selected, card, correct } = this.state;

    // if (selected.length === 0) {
    //   this.setState({ selected: [card.id] })
    // } else if (selected.length === 1) {
    //   if (card[selected[0]] === card[card.id]) {
    //     this.setState({
    //       correct: correct.concat([selected[0], card.id]),
    //       selected: []
    //     });
    //   } else {
    //     this.setState({
    //       selected: [selected[0], card.id]
    //     });
    //   }
    // }
  };

 shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}


  render() {
    let cardShuffle = this.shuffleArray(this.state.card)
    return (
      <div className="nav-container">
        <NavBar 
        count={this.state.count}
        />
       <div className="container text-center" style={imgStyle}>
       <div className="row">
       <div className="col-md-12">
          {cardShuffle.map((card, i) => (
            <MainCard
              id={card.id}
              key={card.id}
              image={card.image}
              imageClick={this.imageClick}
              onClick={this.id}
              onCardClick={this.onCardClick}
            />
          ))}
      </div>
      </div>    
      </div>
      </div>

    )
  }
}


export default App;