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
    let { title, desciption, component, notImplemented } = this.props;
    let { isCodeExpanded } = this.state;

    return (
      <div className="playground">
        <div className="ts borderless flatted horizontally fitted clearing segment">
          <h3 className="ts left floated header">{title}</h3>
          {!notImplemented && (
            <button
              className="ts mini right floated labeled icon button"
              onClick={this.onBtnCodeClick}
            >
              <i className="code icon"></i>
              Code
            </button>
          )}
        </div>
        <div className="ts borderless flatted fitted segment">
          {desciption}
        </div>
        {notImplemented && (
          <div className="ts slate">
            <span className="header">Not Implemented</span>
          </div>
        )}
        {!notImplemented && !isCodeExpanded && (
          <div className="ts borderless flatted clearing segment fitted preview">
            {component}
          </div>
        )}
        {!notImplemented && isCodeExpanded && (
          <div className="ts segments">
            <div className="ts clearing segment preview">
              {component}
            </div>
            <div className="ts secondary fitted segment">
              <CodeMirror
                value={jsxToString(component).replace(/={true}/g, '')}
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
