import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';
import './PlayGround.css';

class PlayGround extends Component {
  state = {
    isCodeExpanded: false,
  };

  onBtnCodeClick = () => {
    this.setState({
      isCodeExpanded: !this.state.isCodeExpanded,
    });
  }

  render() {
    let { title, component } = this.props;
    let { isCodeExpanded } = this.state;

    return (
      <div className="playground">
        <div className="ts borderless flatted fitted clearing segment">
          <h3 className="ts left floated header">{title}</h3>
          <button
            className="ts small right floated labeled icon button"
            onClick={this.onBtnCodeClick}
          >
            <i className="code icon"></i>
            程式碼
          </button>
        </div>
        {!isCodeExpanded && (
          <div className="ts segment fitted preview">
            {component}
          </div>
        )}
        {isCodeExpanded && (
          <div className="ts segments">
            <div className="ts segment preview">
              {component}
            </div>
            <div className="ts secondary fitted segment">
              <CodeMirror
                value={jsxToString(component)}
                options={{
                	mode: 'jsx',
                  readOnly: true,
                  theme: 'solarized light',
                  lineNumbers: true,
                }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PlayGround;
