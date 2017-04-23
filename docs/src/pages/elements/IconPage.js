import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Icon,
  Icons,
  Slate,
} from '../../../../lib';

let IconPage = () => (
  <DemoPageLayout
    title="Icon"
    desciption="An icon is a glyph used to represent something else"
  >
    <h1 className="ts dividing header">Desciption</h1>
    <PlayGround
      title="Icon"
      desciption={
        <span>
          To see all the icons, please refer to
          {' '}
          <a
            href="https://semantic-ui.com/elements/icon.html"
            target="_blank"
          >
            Semantic UI docs
          </a>
        </span>
      }
      component={(
        <div>
          <Icon name="add to calendar" />
          <Icon name="alarm outline" />
          <Icon name="alarm mute outline" />
          <Icon name="alarm mute" />
          <Icon name="alarm" />
          <Icon name="at" />
          <Icon name="browser" />
          <Icon name="bug" />
          <Icon name="calendar outline" />
          <Icon name="calendar" />
          <Icon name="checked calendar" />
          <Icon name="cloud" />
          <Icon name="code" />
          <Icon name="comment outline" />
          <Icon name="comment" />
          <Icon name="comments outline" />
          <Icon name="comments" />
          <Icon name="copyright" />
          <Icon name="creative commons" />
          <Icon name="dashboard" />
          <Icon name="delete calendar" />
          <Icon name="external square" />
          <Icon name="external" />
          <Icon name="eyedropper" />
          <Icon name="feed" />
          <Icon name="find" />
          <Icon name="hand pointer" />
          <Icon name="hashtag" />
          <Icon name="heartbeat" />
          <Icon name="history" />
          <Icon name="home" />
          <Icon name="hourglass empty" />
          <Icon name="hourglass end" />
          <Icon name="hourglass full" />
          <Icon name="hourglass half" />
          <Icon name="hourglass start" />
          <Icon name="idea" />
          <Icon name="image" />
          <Icon name="inbox" />
          <Icon name="industry" />
          <Icon name="lab" />
          <Icon name="mail outline" />
          <Icon name="mail square" />
          <Icon name="mail" />
          <Icon name="mouse pointer" />
          <Icon name="options" />
          <Icon name="paint brush" />
          <Icon name="payment" />
          <Icon name="percent" />
          <Icon name="privacy" />
          <Icon name="protect" />
          <Icon name="registered" />
          <Icon name="remove from calendar" />
          <Icon name="search" />
          <Icon name="setting" />
          <Icon name="settings" />
          <Icon name="shop" />
          <Icon name="shopping bag" />
          <Icon name="shopping basket" />
          <Icon name="signal" />
          <Icon name="sitemap" />
          <Icon name="tag" />
          <Icon name="tags" />
          <Icon name="tasks" />
          <Icon name="terminal" />
          <Icon name="text telephone" />
          <Icon name="ticket" />
          <Icon name="trademark" />
          <Icon name="trophy" />
          <Icon name="wif" />
        </div>
      )}
    />
    <PlayGround
      title="Grouping"
      component={(
        <Slate>
          <Icons>
            <Icon name="file audio outline" />
            <Icon name="file text outline" />
            <Icon name="file word outline" />
          </Icons>
          <span className='header'>
            行動辦公室
          </span>
          <span className='description'>
            MeowWork 讓你到處都能夠辦公。
          </span>
        </Slate>
      )}
    />
  </DemoPageLayout>
);

export default IconPage;
