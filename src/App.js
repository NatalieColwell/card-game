import React from 'react';
import NavBar from "./components/NavBar"
import MainCard from "./components/MainCard";
// import Counter from "./components/Counter";
import card from "./card.json";
import MainCards from "./components/MainCards.css";

const imgStyle = {
  marginBottom: "30px"
}

class App extends React.Component {
  
  state = {
    card: card,
    count: 0
  };

  imageClick = (id) => {
    console.log("THIS IS ", id)
    this.setState({ count: this.state.count + 1 });
    console.log("COUNT", this.state.count)


    const cardClick = this.state.card.filter(function(card, id) {
      //  card.clicked = true;
      // return card.id = id;
      if(cardClicked[0].clicked) {
        this.setState({count: 0});

        for (let i = 0; i < Card.lenght; i++) {
          Card[i].clicked = false;
        } 
      } else {
        cardClick[0].clicked = true;
        this.setState({count: this.state.count +1})
      }

    }); 
    const clicked = 
    card.map(function(setClick) {
      return setClick.id[];
     
    });
    console.log("please", clicked)
    console.log("yooo", id)
    console.log("boooo", this.state.card[id])

    // if (this.state.card[id] === false) {
    //   cardClick.clicked = true;
    //    console.log("end game")
    //    this.setState({count: 0})
    // } 
    // let notcardClick = this.state.card.filter(function(card){
    //   return card.id !==id;
    // })

    // notcardClick.push(cardClick[0]);
    
    
    // this.setState({card:notcardClick});
   
    //  cardClick.clicked = true;
     
    // if(this.state.card.clicked === true) {
    //   console.log("endGame")
    //   this.setState({ count: 0 });
      
    // } else {
    //   this.setState({ count : this.state.count +1 })
    
    // }

    // if(this.state. === )

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
          {cardShuffle.map((card) => (
            <MainCard
              id={card.id}
              key={card.id}
              image={card.image}
              imageClick={this.imageClick}
              onClick={this.id}
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