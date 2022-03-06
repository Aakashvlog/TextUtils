import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const onChangeText = (event) => {
    // console.log(event.target.value);
    setText(event.target.value);
  };

  const convertUpperCase = () => {
    setText(text.toUpperCase());
  };

  const convertLowerCase = () => {
    setText(text.toLowerCase());
  };

  const summary = {
    a: text.split(' '),
    words: function () {
      let b = this.a.filter((value) => value !== '');
      return b.length;
    },
    charac: function () {
      let b = this.a.reduce(function (acc, value) {
        return acc + value.length;
      }, 0);
      return b;
    },
  };

  const convertTitleCase = () => {
    let a = text.split(' ');
    let c = a
      .map((value) => {
        let a = value
          .slice(0, 1)
          .toUpperCase()
          .concat(value.slice(1).toLowerCase());
        return a;
      })
      .join(' ');
    // console.log(c);
    setText(c);
  };

  const remove = () => {
    let a = text.split(' ');
    let ans = '';
    a.forEach((value) => {
      if (value !== '') {
        ans = ans + ' ' + value;
      }
    });
    setText(ans.slice(1));
  };

  const clear = () => {
    let newText = '';
    setText(newText);
  };
  return (
    <>
      <div className="mb-3">
        <h1 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          {props.heading}{' '}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            value={text}
            onChange={onChangeText}
            placeholder="Enter your text..."
          ></textarea>
        </div>
        <button onClick={convertUpperCase} className="btn btn-primary mx-1">
          Convert to UpperCase
        </button>{' '}
        <button onClick={convertLowerCase} className="btn btn-primary mx-1">
          Convert to LowerCase
        </button>{' '}
        <button onClick={convertTitleCase} className="btn btn-primary mx-1">
          Convert to TitleCase
        </button>
        <button onClick={clear} className="btn btn-primary mx-1">
          Clear
        </button>
        <button onClick={remove} className="btn btn-primary mx-1">
          Remove WhiteSpaces
        </button>
      </div>
      <div
        className={`container my-3 text-${
          props.mode === 'light' ? 'dark' : 'light'
        }`}
      >
        <h1>Your text summary:</h1>
        <p>
          {summary.words()} <b>Words</b>{' '}
        </p>
        <p>
          {summary.charac()} <b> Characters </b>{' '}
        </p>
        <h5>Preview: </h5>
        <p>{text}</p>
      </div>
    </>
  );
}
