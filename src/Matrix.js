import React, { Component } from "react";
import styled from "styled-components";

const Letter = styled.div`
  color: #4fd673;
  text-shadow: 0 0 2px #4bcb62;
  transform: scaleX(-1);
  font-style: normal;
  width: 10.08px;
  height: 18px;

  //   color: #90f3bb;
}
`;

const InnerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

export default class Matrix extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      counter: 0
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000 / this.props.framesPerSecond);
    this.setState({ timer });
  }

  tick = () => {
    if (this.state.counter < 1000000) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  };

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  render() {
    const { text, columnHeight } = this.props;

    text.split("");

    const RandomSymbols = [
      "&#xFF66",
      "&#xFF67",
      "&#xFF68",
      "&#xFF69",
      "&#xFF6A",
      "&#xFF6B",
      "&#xFF6C",
      "&#xFF6D",
      "&#xFF6E",
      "&#xFF6F",
      "&#xFF70",
      "&#xFF71",
      "&#xFF72",
      "&#xFF73",
      "&#xFF74",
      "&#xFF75",
      "&#xFF76",
      "&#xFF77",
      "&#xFF78",
      "&#xFF79",
      "&#xFF7A",
      "&#xFF7B",
      "&#xFF7C",
      "&#xFF7D",
      "&#xFF7E",
      "&#xFF7F",
      "&#xFF80",
      "&#xFF81",
      "&#xFF82",
      "&#xFF83",
      "&#xFF84",
      "&#xFF85",
      "&#xFF86",
      "&#xFF87",
      "&#xFF88",
      "&#xFF89",
      "&#xFF8A",
      "&#xFF8B",
      "&#xFF8C",
      "&#xFF8D",
      "&#xFF8E",
      "&#xFF8F",
      "&#xFF90",
      "&#xFF91",
      "&#xFF92",
      "&#xFF93",
      "&#xFF94",
      "&#xFF95",
      "&#xFF96",
      "&#xFF97",
      "&#xFF98",
      "&#xFF99",
      "&#xFF9A",
      "&#xFF9B",
      "&#xFF9C",
      "&#xFF9D",
      "&#x10300",
      "&#x10301",
      "&#x10302",
      "&#x10303",
      "&#x10304",
      "&#x10305",
      "&#x10306",
      "&#x10307",
      "&#x10308",
      "&#x10309",
      "&#x1030A",
      "&#x1030B",
      "&#x1030C",
      "&#x1030D",
      "&#x1030E",
      "&#x1030F",
      "&#x10310",
      "&#x10311",
      "&#x10312",
      "&#x10313",
      "&#x10314",
      "&#x10315",
      "&#x10316",
      "&#x10317",
      "&#x10318",
      "&#x10319",
      "&#x1031A",
      "&#x660",
      "&#x661",
      "&#x662",
      "&#x663",
      "&#x664",
      "&#x665",
      "&#x666",
      "&#x667",
      "&#x668",
      "&#x669",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      " ",
      "`",
      "~",
      "!",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "_",
      "-",
      "+",
      "="
    ];

    // letter at the end is half the opacity
    // second character is lighter in color
    // first character is an empty space
    // real character is #ACFED7 color

    // generate text.length amount of rows
    // generate random lengthed

    // maxColumnRainLines = (Math.random() * (maxColumnRainLines+1));
    // maxLineLength = (Math.random() * (maxLineLength+1));

    // every x time do a move meaning:
    // if !totallydone (do a check for if 2nd character of each row matches the correct character each time)
    // for Each column

    // if !rowdone (if middle spot is equal to the final character)

    // for each spot
    // if first spot and second spot don't have a character 25% chance to generate random character in first spot with a 5% chance to generate the correct one.

    // if spot does have a character 25% chance to randomize (no chance to be correct one)

    // if spot does have a character and the next spot doesn't generate a new one below

    // if spot doesn't have a character but the next spot does 25% chance to delete next spot

    let draw = [];

    for (let i = 0; i < text.length; i++) {
      let blankColumn = [];
      for (let x = 0; x < columnHeight; x++) {
        blankColumn.push(["0"]);
      }
      draw.push([blankColumn]);
    }

    let drawContent = draw.map((item, index) => (
      <div className="item" key={index}>
        {item.map((innerItem, i) => (
          <InnerItem key={i}>
            {item[i].map((something, x) => (
              <Letter key={x}>{something}</Letter>
            ))}
          </InnerItem>
        ))}
      </div>
    ));

    return <Flex>{drawContent}</Flex>;
  }
}
