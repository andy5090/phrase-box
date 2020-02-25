import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  align-items: center;
`;

const Phrase = styled.span`
  font-size: 80px;
  padding: 50px;
`;

const InputBox = styled.input`
  font-size: 80px;
  width: 500px;
  border: none;
  border-bottom: 5px solid;
  :focus {
    outline: none;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;

const EmojiBox = styled.span`
  font-size: 120px;
  padding: 50px;
`;

const App = () => {
  const [emojiCode, setEmoji] = useState(128513);
  const [text, setText] = useState("");

  const keyHandling = event => {
    event.preventDefault();
    console.log(event.keyCode);
    if (event.keyCode === 40) {
      setEmoji(emojiCode + 1);
    } else if (event.keyCode === 38 && emojiCode > 128513) {
      setEmoji(emojiCode - 1);
    } else if (event.keyCode === 13) {
      setText(text + String.fromCodePoint(emojiCode));
    } else if (event.keyCode === 27) {
      setText("");
    }
  };

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setText(value);
  };

  return (
    <>
      <Container>
        <Phrase>We make</Phrase>
        <InputBox
          type="text"
          onKeyUp={keyHandling}
          onChange={onChange}
          value={text}
          id="phrase-box"
          autoFocus
        />
        <Phrase>#better</Phrase>
      </Container>
      <EmojiContainer>
        <EmojiBox>{String.fromCodePoint(emojiCode)}</EmojiBox>
      </EmojiContainer>
    </>
  );
};

export default App;
