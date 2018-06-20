import React, { Component } from "react";
import PhotoCard from "./components/PhotoCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pictures from "./pictures.json";
import TopBar from "./components/TopBar"
import "./App.css";

class App extends Component {
  state = {
    pictures,
    score: 0,
    highScore: 0
  };

  clickCheck = id => {
    console.log(id);
    const pictures = this.state.pictures;
    if (pictures[id - 1].clicked === false) {
      pictures[id - 1].clicked = true;
      const score = this.state.score + 1;
      this.setState({ pictures, score });
    } else {
      console.log("this has already been clicked");
      this.setState({ score: 0});
    }
  };

  shuffle = () => {
    var currentIndex = this.state.pictures.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = pictures[currentIndex];
      pictures[currentIndex] = pictures[randomIndex];
      pictures[randomIndex] = temporaryValue;
    }
    return pictures;
  };

  render() {
    this.shuffle();
    return (
      <Wrapper>
        <TopBar score={this.state.score} highScore={this.state.highScore} />
        <Title>Clicky Game</Title>
        {this.state.pictures.map(picture => (
          <PhotoCard
            id={picture.id}
            key={picture.id}
            image={picture.image}
            clicked={picture.clicked}
            clickCheck={this.clickCheck}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

