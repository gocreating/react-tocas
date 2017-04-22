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

let StartPage = () => (
  <PageLayout>
    <Segment borderless basic>
      <Header level={1}>
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
    </Segment>
    <Segment borderless basic>
      <Header level={1}>
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
        {'<link rel="stylesheet" href="//cdn.rawgit.com/TeaMeow/TocasUI/master/dist/tocas.min.css">'}
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
  </PageLayout>
);

export default StartPage;
