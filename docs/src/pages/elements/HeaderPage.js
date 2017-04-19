import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Header,
} from '../../../../lib';

let HeaderPage = () => (
  <DemoPageLayout title="Header">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Basic Header"
      component={(
        <div>
          <Header level={1}>標題 1</Header>
          <Header level={2}>標題 2</Header>
          <Header level={3}>標題 3</Header>
          <Header level={4}>標題 4</Header>
          <Header level={5}>標題 5</Header>
          <Header level={6}>標題 6</Header>
        </div>
      )}
    />
    <PlayGround
      title="Content Header"
      component={(
        <div>
          <Header massive>重量級</Header>
          <Header huge>巨大</Header>
          <Header big>大的</Header>
          <Header large>大型</Header>
          <Header medium>中等</Header>
          <Header small>小型</Header>
          <Header tiny>微小</Header>
          <Header mini>迷你</Header>
        </div>
      )}
    />
    <PlayGround
      title="Sub Header"
      component={(
        <div>
          <Header level={1} sub>副標題 1</Header>
          <Header level={2} sub>副標題 2</Header>
          <Header level={3} sub>副標題 3</Header>
          <Header level={4} sub>副標題 4</Header>
          <Header level={5} sub>副標題 5</Header>
          <Header level={6} sub>副標題 6</Header>

          <Header massive sub>重量級副標題</Header>
          <Header huge sub>巨大副標題</Header>
          <Header big sub>大的副標題</Header>
          <Header large sub>大型副標題</Header>
          <Header medium sub>中等副標題</Header>
          <Header small sub>小型副標題</Header>
          <Header tiny sub>微小副標題</Header>
          <Header mini sub>迷你副標題</Header>
        </div>
      )}
    />
    <PlayGround
      title="Icon Header"
      component={(
        <Header level={3} center aligned icon>
          <i className="gift icon" />挑選禮物
          <Header sub>為你的女朋友，喔不，你沒有女朋友。</Header>
        </Header>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Sub Header in Header"
      component={(
        <Header level={4}>
          大標題
          <Header sub>然後我是子標題。</Header>
        </Header>
      )}
    />
    <PlayGround
      title="Image"
      component={(
        <Header level={3}>
          <img
            className="ts circular image"
            src="https://tocas-ui.com/assets/img/5e5e3a6.png"
            alt=""
          />
          帳號設定
        </Header>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <div>
          <Header level={3}>
            <i className="plug icon" />
            <div className="content">
              99.9% 上線時間保證
            </div>
          </Header>
          <Header level={2}>
            <i className="settings icon" />
            <div className="content">
              安全性設定
              <Header sub>管理好您的洨洨安，確保不受任何人詐騙。</Header>
            </div>
          </Header>
        </div>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Disabled"
      component={(
        <Header level={3} disabled>已停用標題</Header>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Semantic"
      component={(
        <div>
          <Header level={3} primary>主要語氣</Header>
          <Header level={3} info>提示語氣</Header>
          <Header level={3} warning>警告語氣</Header>
          <Header level={3} positive>正面語氣</Header>
          <Header level={3} negative>否定語氣</Header>
          <div className="ts inverted segment">
            <Header level={3} inverted>反色語氣</Header>
          </div>
        </div>
      )}
    />
    <PlayGround
      title="Dividing"
      component={(
        <div>
          <Header level={1} dividing>標題 1</Header>
          <Header level={2} dividing>標題 2</Header>
          <Header level={3} dividing>標題 3</Header>
          <Header level={4} dividing>標題 4</Header>
          <Header level={5} dividing>標題 5</Header>
          <Header level={6} dividing>標題 6</Header>
        </div>
      )}
    />
    <PlayGround
      title="Alignment"
      component={(
        <div>
          <Header level={5} left aligned>我置左</Header>
          <Header level={5} center aligned>我置中</Header>
          <Header level={5} right aligned>我置障</Header>
        </div>
      )}
    />
    <PlayGround
      title="Float"
      component={(
        <div>
          <Header level={5} left floated>向左浮動</Header>
          <Header level={5} right floated>向右浮動</Header>
        </div>
      )}
    />
    <PlayGround
      title="Block"
      component={(
        <Header level={4} block>我自己是一個區塊喔</Header>
      )}
    />
    <PlayGround
      title="Attach"
      component={(
        <div>
          <Header level={5} top attached>吸附在上部</Header>
          <div className="ts attached segment">
            在這寂靜的夜晚，我又想起了你。
          </div>
          <Header level={5} attached>吸附於中間</Header>
          <div className="ts attached segment">
            頓時；一陣涼風吹過，而我——又射了。
          </div>
          <Header level={5} bottom attached>吸附於底部</Header>
        </div>
      )}
    />
    <PlayGround
      title="Thinner"
      component={(
        <Header level={3} thinner>細一點的標題</Header>
      )}
    />
    <PlayGround
      title="Bolder"
      component={(
        <Header level={3} bolder>粗略的標題</Header>
      )}
    />
  </DemoPageLayout>
);

export default HeaderPage;
