import React, { Component } from "react";
import styled from "styled-components";

const Letter = styled.div`
  color: #4fd673;
  text-shadow: 0 0 2px #4bcb62;
  // transform: scaleX(-1);
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
      counter: 0,
      draw: [],
      columnHeight: 0,
      columnCheck: [],
      randomSymbols: [
        "ｦ",
        "ｧ",
        "ｨ",
        "ｩ",
        "ｪ",
        "ｫ",
        "ｬ",
        "ｭ",
        "ｮ",
        "ｯ",
        "ｰ",
        "ｱ",
        "ｲ",
        "ｳ",
        "ｴ",
        "ｵ",
        "ｶ",
        "ｷ",
        "ｸ",
        "ｹ",
        "ｺ",
        "ｻ",
        "ｼ",
        "ｽ",
        "ｾ",
        "ｿ",
        "ﾀ",
        "ﾁ",
        "ﾂ",
        "ﾃ",
        "ﾄ",
        "ﾅ",
        "ﾆ",
        "ﾇ",
        "ﾈ",
        "ﾉ",
        "ﾊ",
        "ﾋ",
        "ﾌ",
        "ﾍ",
        "ﾎ",
        "ﾏ",
        "ﾐ",
        "ﾑ",
        "ﾒ",
        "ﾓ",
        "ﾔ",
        "ﾕ",
        "ﾖ",
        "ﾗ",
        "ﾘ",
        "ﾙ",
        "ﾚ",
        "ﾛ",
        "ﾜ",
        "ﾝ",
        "𐌀",
        "𐌁",
        "𐌂",
        "𐌃",
        "𐌄",
        "𐌅",
        "𐌆",
        "𐌇",
        "𐌈",
        "𐌉",
        "𐌊",
        "𐌋",
        "𐌌",
        "𐌍",
        "𐌎",
        "𐌏",
        "𐌐",
        "𐌑",
        "𐌒",
        "𐌓",
        "𐌔",
        "𐌕",
        "𐌖",
        "𐌗",
        "𐌘",
        "𐌙",
        "𐌚",
        "٠",
        "١",
        "٢",
        "٣",
        "٤",
        "٥",
        "٦",
        "٧",
        "٨",
        "٩",
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
      ]
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 75);

    const { text, columnHeight } = this.props;
    const { columnCheck } = this.state;
    let draw = [];

    for (let i = 0; i < text.length; i++) {
      columnCheck.push([false]);
      let blankColumn = [];
      for (let x = 0; x < columnHeight; x++) {
        blankColumn.push([" "]);
      }
      draw.push([blankColumn]);
    }

    const middle = Math.round(columnHeight / 2) - 1;

    this.setState({ timer, draw, text, columnHeight, middle });
  }

  tick = () => {
    let { draw, text, middle, randomSymbols, columnCheck } = this.state;
    // letter at the end is half the opacity
    // second character is lighter in color
    // first character is an empty space
    // real character is #ACFED7 color

    let random;

    // If all the middle characters are correct stop

    let middleCorrect = false;

    for (let i = 0; i < draw.length; i++) {
      const finalChar = text.charAt(i);
      const middleChar = draw[i][0][middle].toString();

      if (finalChar === middleChar) {
        columnCheck[i] = true;
        this.setState({ columnCheck });
      }

      if (columnCheck.every((val, i, arr) => val === arr[0])) {
        // console.log("true");
        middleCorrect = true;
      }

      if (middleCorrect !== true) {
        // if first spot and second spot don't have a character chance to generate random character in first spot
        if (
          draw[i][0][0].toString() === " " &&
          draw[i][0][1].toString() === " "
        ) {
          random = Math.random() * 100;
          if (random < 1) {
            let randomChar =
              randomSymbols[Math.floor(Math.random() * randomSymbols.length)];
            if (draw[i][0][0] !== randomChar) {
              draw[i][0][0] = randomChar;
              this.setState({ draw });
            }
          }
        }

        for (let x = 0; x < draw[i][0].length; x++) {
          // randomly place spots on existing spots if they are not the final character
          random = Math.random() * 100;
          if (random < 5) {
            if (draw[i][0][x].toString() !== " " && x !== middle) {
              let randomChar =
                randomSymbols[Math.floor(Math.random() * randomSymbols.length)];
              if (draw[i][0][x] !== randomChar) {
                draw[i][0][x] = randomChar;
                this.setState({ draw });
              }
            }
          }

          random = Math.random() * 100;
          if (random < 20) {
            if (x !== draw[i][0].length - 1) {
              // // if current location has a spot but the next one doesn't draw a character
              if (
                draw[i][0][x].toString() !== " " &&
                draw[i][0][x + 1].toString() === " "
              ) {
                let randomChar =
                  randomSymbols[
                    Math.floor(Math.random() * randomSymbols.length)
                  ];
                if (draw[i][0][x + 1] !== randomChar) {
                  if (x + 1 !== middle) {
                    draw[i][0][x + 1] = randomChar;
                    this.setState({ draw });
                  } else {
                    if (draw[i][0][x + 1].toString() !== finalChar) {
                      draw[i][0][x + 1] = finalChar;
                      this.setState({ draw });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (this.state.counter < 1800) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  };

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  render() {
    const { draw } = this.state;

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
