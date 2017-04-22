import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import './CodeBlock.css';

class CodeBlock extends Component {
  render() {
    let { children, ...rest } = this.props;

    return (
      <CodeMirror
        value={children}
        options={{
          ...rest,
        }}
      />
    );
  }
}

export default CodeBlock;
