import React from 'react';
const ReactDOM = require('react-dom');

class TextInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.updateProps({ value: e.target.value });
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <input type="text" onChange={this.onChange} {...props} />
    );
  }
}

export default TextInput;
