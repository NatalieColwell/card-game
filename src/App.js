import React from 'react';
import NavBar from "./components/NavBar"
import MainCard from "./components/MainCard/MainCard";
import Wrapper from "./components/Wrapper";
import card from "./card.json";


class App extends React.Component {
  state = {
    card
  };

  changeCards = id => {
    const cards = this.state.cards.filter(card => card.id);

    this.setState({ cards });
  };

  render() {
    return (
      <div className="nav-container">
        <NavBar />
        <Wrapper>
          {this.state.card.map(card => (
            <MainCard
              id={card.id}
              key={card.id}
              image={card.image}
            />
          ))}
        </Wrapper>
      </div>

    )
  }

}

// const App = () => {
//   return (
// <div className="nav-container">
// <NavBar />
//   <Wrapper>
//     <MainCards 
//     image={cards[0].image}
//     />;
//     <MainCards 
//     image={cards[1].image} 
//     alt={cards[1].id}
//     />;
//     <MainCards 
//     image={cards[2].image}
//     alt={cards[2].id}
//     />;
//     <MainCards 
//     image={cards[3].image}
//     alt={cards[3].id}
//     />;
//     <MainCards 
//     image={cards[4].image}
//     alt={cards[4].id}
//     />;
//     <MainCards image={cards[5].image} />;
//     <MainCards image={cards[6].image} />;
//     <MainCards image={cards[7].image} />;
//     <MainCards image={cards[8].image} />;
//     <MainCards image={cards[9].image} />;
//     <MainCards image={cards[10].image} />;
//     <MainCards image={cards[11].image} />;

//   </Wrapper> 
//   </div> 
// );
// }  

export default App;