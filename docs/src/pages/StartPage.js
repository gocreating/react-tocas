import React from 'react';
import PageLayout from '../utils/PageLayout';
import CodeBlock from '../utils/CodeBlock';
import {
  Segment,
  Header,
} from '../../../lib';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/theme/solarized.css';
import pkg from '../../../package.json';

let CSS_CDN_IMPORT = (
  '<link ' +
  'rel="stylesheet" ' +
  'href="//cdn.rawgit.com/TeaMeow/TocasUI/master/dist/tocas.min.css">'
);
let JSX_DEMO = `import Button from 'react-tocas/lib/Button';
// or this way:
// import { Button } from 'react-tocas';

let App = () => (
  <div>
    <Button info onClick={() => alert('World')}>
      Hello
    </Button>
  </div>
);`;
let UMD_DEMO = `<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/master/dist/tocas.min.css">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/react/15.5.4/react-dom.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
    <script type="text/javascript" src="https://cdn.rawgit.com/gocreating/react-tocas/${pkg.version}/dist/react-tocas.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      var Button = Rts.Button;
      var Menu = Rts.Menu;
      var Item = Rts.Item;

      ReactDOM.render((
        <div>
          <Menu>
            <Item>Hello</Item>
            <Item>World</Item>
          </Menu>
          <Button primary>
            Hello World
          </Button>
        </div>
      ), document.getElementById('root'));
    </script>
  </body>
</html>
`;

let StartPage = () => (
  <PageLayout>
    <Segment borderless basic>
      <Header dividing level={1}>
        Via CommonJS
      </Header>
      <Header level={2}>
        Installation
      </Header>
      <Header huge>
        Install react-tocas from npm.
      </Header>
      <CodeBlock
        theme="solarized light"
        readOnly
        lineNumbers
      >
        {'npm install --save react-tocas'}
      </CodeBlock>
      <Header level={2}>
        Usage
      </Header>
      <Header huge>
        Import css file from CDN.
      </Header>
      <CodeBlock
        mode="htmlmixed"
        theme="solarized light"
        readOnly
        lineNumbers
      >
        {CSS_CDN_IMPORT}
      </CodeBlock>
      <Header huge>
        Start using great react components.
      </Header>
      <CodeBlock
        mode="jsx"
        theme="solarized light"
        readOnly
        lineNumbers
      >
        {JSX_DEMO}
      </CodeBlock>
    </Segment>
    <Segment borderless basic>
      <Header dividing level={1}>
        Via Browser
      </Header>
      <Header huge>
        You can access react-tocas from the global variable <code>Rts</code>.
        See the complete
        {' '}<a href="/react-tocas-umd.html" target="_blank">working example</a>.
      </Header>
      <CodeBlock
        mode="htmlmixed"
        theme="solarized light"
        readOnly
        lineNumbers
      >
        {UMD_DEMO}
      </CodeBlock>
    </Segment>
  </PageLayout>
);

export default StartPage;
