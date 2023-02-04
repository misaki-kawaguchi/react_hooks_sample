import React, { useState } from "react";

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  return (
    // <></>で囲ってもok
    <React.Fragment>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>reset</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </React.Fragment>
  );
};

App.defaultProps = {
  name: "サンプル",
  price: 1000,
};

export default App;
