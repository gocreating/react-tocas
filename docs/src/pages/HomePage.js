import React from 'react';
import { Helmet } from "react-helmet";
import ReactDisqus from 'react-disqus';
import PageLayout from '../utils/PageLayout';
import GithubButton from '../utils/GithubButton';
import ShareButtons from '../utils/ShareButtons';
import {
  Slate,
  Segment,
  Header,
  Images,
  Image,
} from '../../../lib';
import tocasOg from '../../public/tocas-og.png';
import reactLogo from '../../public/react-logo.svg';

let HomePage = () => (
  <PageLayout>
    <Helmet>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </Helmet>
    <Segment center aligned borderless flatted>
      <Images related medium>
        <Image src={reactLogo} />
        <Image src={tocasOg} />
      </Images>
    </Segment>
    <Slate very padded borderless basic>
      <Header level={1} className="header">
        Welcome to React-Tocas!
      </Header>
      <Header level={1} sub className="description">
        <a
          href="https://tocas-ui.com/"
          target="_blank"
        >
          Tocas UI 2
        </a>
        {' '}components built with react
      </Header>
      <GithubButton
        href="https://github.com/gocreating/react-tocas"
        countHref="/gocreating/react-tocas/stargazers"
        countApi="/repos/gocreating/react-tocas#stargazers_count"
        countAriaLabel="# stargazers on GitHub"
        ariaLabel="Star gocreating/react-tocas on GitHub"
      >
        Star
      </GithubButton>
      <br />
      <GithubButton
        href="https://github.com/gocreating"
        countHref="/gocreating/followers"
        countApi="/users/gocreating#followers"
        countAriaLabel="# followers on GitHub"
        ariaLabel="Follow @gocreating on GitHub"
      >
        Follow @gocreating
      </GithubButton>
      <br />
      <ShareButtons
        url="https://react-tocas.github.io/"
        title="React-Tocas - Tocas UI 2 components built with react"
      />
    </Slate>
    <ReactDisqus shortname="react-tocas" identifier="homepage" />
  </PageLayout>
);

export default HomePage;
