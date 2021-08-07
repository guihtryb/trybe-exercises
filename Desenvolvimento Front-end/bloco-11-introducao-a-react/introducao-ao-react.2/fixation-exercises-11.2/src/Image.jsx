// arquivo Image.js
import React from 'react';

class Image extends React.Component {
  render() {
    return (
    <div>
      <img src={this.props.source} alt={this.props.alternativeText} />
    </div>
    );
  }
}

export default Image;