import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import PageLayout from '../utils/PageLayout';
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
      <a
        className="github-button"
        href="https://github.com/gocreating/react-tocas"
        data-style="mega"
        data-count-href="/gocreating/react-tocas/stargazers"
        data-count-api="/repos/gocreating/react-tocas#stargazers_count"
        data-count-aria-label="# stargazers on GitHub"
        aria-label="Star gocreating/react-tocas on GitHub"
      >
        Star
      </a>
      <br />
      <a
        className="github-button"
        href="https://github.com/gocreating"
        data-style="mega"
        data-count-href="/gocreating/followers"
        data-count-api="/users/gocreating#followers"
        data-count-aria-label="# followers on GitHub"
        aria-label="Follow @gocreating on GitHub"
      >
        Follow @gocreating
      </a>
      <br />
      <div
        className="fb-share-button"
        data-href="https://react-tocas.github.io/"
        data-layout="button_count"
        data-size="large"
        data-mobile-iframe="false"
      >
        <a
          className="fb-xfbml-parse-ignore"
          target="_blank"
          href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Freact-tocas.github.io%2F&amp;src=sdkpreparse"
        >
          分享
        </a>
      </div>
    </Slate>
    <ReactDisqusThread
      shortname="react-tocas"
      identifier="homepage"
      title="Welcome to React-Tocas"
    />
  </PageLayout>
);

export default HomePage;
