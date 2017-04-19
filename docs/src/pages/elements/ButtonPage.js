import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Button,
  Buttons,
} from '../../../../lib';

let ButtonPage = () => (
  <DemoPageLayout title="Button">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Button"
      component={(
        <Button>按鈕</Button>
      )}
    />
    <PlayGround
      title="Basic Semantic"
      component={(
        <div>
          <Button primary>主要</Button>
          <Button warning>警告</Button>
          <Button info>資訊</Button>
          <Button inverted>相反色</Button>
        </div>
      )}
    />
    <PlayGround
      title="Positive and Negative"
      component={(
        <div>
          <Button positive>肯定</Button>
          <Button negative>否定</Button>
        </div>
      )}
    />
    <PlayGround
      title="Opinion"
      component={(
        <div>
          <Button opinion>偏見</Button>
          <Button secondary opinion>次要偏見</Button>

          <div className="ts inverted info segment">
            <Button opinion>偏見</Button>
            <Button secondary opinion>次要偏見</Button>
          </div>

          <div className="ts inverted warning segment">
            <Button opinion>偏見</Button>
            <Button secondary opinion>次要偏見</Button>
          </div>
        </div>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <Button icon>
          <i className="icon heart" />
        </Button>
      )}
    />
    <PlayGround
      title="Basic"
      component={(
        <div>
          <Button positive basic>確定</Button>
          <Button negative basic>拒絕</Button>
          <Button basic>知道</Button>
          <Button secondary basic>取消</Button>
        </div>
      )}
    />
    <PlayGround
      title="Labeled"
      component={(
        <div>
          <Button left labeled>
            <div className="ts basic label">689</div>
            <Button>加入募集</Button>
          </Button>

          <Button labeled>
            <Button>加入募集</Button>
            <div className="ts basic label">689</div>
          </Button>
        </div>
      )}
    />
    <PlayGround
      title="Labeled Icon"
      component={(
        <div>
          <Button labeled icon>
            <i className="star icon" />
            星號
          </Button>

          <Button right labeled icon>
            加入最愛
            <i className="heart icon" />
          </Button>
        </div>
      )}
    />

    <h1 className="ts dividing header">Grouping</h1>
    <PlayGround
      title="Button Group"
      component={(
        <Buttons>
          <Button warning>橙希</Button>
          <Button primary>雨藍</Button>
          <Button inverted>卡莉絲</Button>
        </Buttons>
      )}
    />
    <PlayGround
      title="Vertical Group"
      component={(
        <Buttons fluid vertical>
          <Button warning>橙希</Button>
          <Button primary>雨藍</Button>
          <Button inverted>卡莉絲</Button>
        </Buttons>
      )}
    />
    <PlayGround
      title="Separated"
      component={(
        <Buttons separated>
          <Button warning>橙希</Button>
          <Button primary>雨藍</Button>
          <Button inverted>卡莉絲</Button>
        </Buttons>
      )}
    />
    <PlayGround
      title="Relaxed"
      component={(
        <Buttons relaxed separated>
          <Button warning>橙希</Button>
          <Button primary>雨藍</Button>
          <Button inverted>卡莉絲</Button>
        </Buttons>
      )}
    />
    <PlayGround
      title="Stackable"
      component={(
        <Buttons fluid stackable>
          <Button info>希豹</Button>
          <Button negative>祈浪</Button>
          <Button secondary>余望</Button>
        </Buttons>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Active"
      component={(
        <Button active>按鈕</Button>
      )}
    />
    <PlayGround
      title="Disabled"
      component={(
        <Button disabled>按鈕</Button>
      )}
    />
    <PlayGround
      title="Loading"
      component={(
        <Button loading>按鈕</Button>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Size"
      component={(
        <div>
          <Button mini>迷你</Button>
          <Button tiny>微小</Button>
          <Button small>小型</Button>
          <Button>預設</Button>
          <Button medium>適中</Button>
          <Button large>大型</Button>
          <Button big>巨大</Button>
          <Button huge>超大</Button>
          <Button massive>重量級</Button>
        </div>
      )}
    />
    <PlayGround
      title="Float"
      component={(
        <div>
          <Button left floated>向左浮動</Button>
          <Button right floated>向右浮動</Button>
        </div>
      )}
    />
    <PlayGround
      title="Vertically Attached"
      component={(
        <div>
          <Button fluid top attached>附著於上</Button>
          <div className="ts flatted attached segment">
              <p>TeaMeow 是一個社群網站，就像是你正在使用的 Facebook 或是 Twitter，</p>
              <p>不過我們強調的是「自由」和「日常」，我們不會整天刪你文章。</p>
          </div>
          <Button fluid bottom attached>附著於下</Button>
        </div>
      )}
    />
    <PlayGround
      title="Compact"
      component={(
        <div>
          <Button mini very compact>非常輕巧</Button>
          <Button mini compact>迷你輕巧</Button>
          <Button compact>輕巧按鈕</Button>
        </div>
      )}
    />
    <PlayGround
      title="Circular"
      component={(
        <div>
          <Button circular large icon>
            <i className="gift icon" />
          </Button>
          <Button circular positive>知道了！</Button>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default ButtonPage;
