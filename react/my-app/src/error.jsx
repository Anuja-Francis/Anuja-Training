import React from 'react';

class FaultyComponent extends React.Component {
  componentDidMount() {
    throw new Error("Oops! Something went wrong in FaultyComponent.");
  }

  render() {
    return <div>This is a working component (until it crashes).</div>;
  }
}

export default FaultyComponent;
