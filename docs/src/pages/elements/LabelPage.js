import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Label,
  Detail,
  Icon,
  Image,
  Segment,
  Button,
} from '../../../../lib';

let LabelPage = () => (
  <DemoPageLayout title="Label">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Basic"
      component={(
        <Label>
          <Icon name="gift" />
          標籤
        </Label>
      )}
    />
    <PlayGround
      title="Image"
      component={(
        <div>
          <Label image>
            <Image src="https://tocas-ui.com/assets/img/5e5e3a6.png" />Yami Odymel
          </Label>
          <Label image>
            <Image src="https://tocas-ui.com/assets/img/0c20de3.png" />Xiaoan
          </Label>
          <Label image>
            <Image src="https://tocas-ui.com/assets/img/8008365.png" />卡莉絲
            <Detail>實況主</Detail>
          </Label>
        </div>
      )}
    />
    <PlayGround
      title="Semantic"
      component={(
        <div>
          <Label circular primary>9</Label>
          <Label circular info>14</Label>
          <Label warning>7</Label>
          <Label positive>13</Label>
          <Label inverted>1998</Label>
        </div>
      )}
    />
    <PlayGround
      title="Attached"
      component={(
        <Segment>
          <p />
          <p>伊繁星最高協議，所有隸屬伊繁星旗下已發佈或是正於計劃中之產品皆須遵守此協議。</p>
          <p />
          <Label top right attached>右上標籤</Label>
          <Label top left attached>左上標籤</Label>
          <Label bottom right attached>右下標籤</Label>
          <Label bottom left attached>左下標籤</Label>
        </Segment>
      )}
    />
    <PlayGround
      title="Horizontal"
      component={(
        <div>
          <Label horizontal>這個標籤</Label> 很適合和文字放在一起。
        </div>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Floating"
      component={(
        <div>
          <Button primary>已讀所有
            <Label floating circular>7</Label>
          </Button>
          <Button warning>檢視
            <Label floating>13</Label>
          </Button>
        </div>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Detail"
      component={(
        <Label>
          新郵件
          <Detail>689</Detail>
        </Label>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <div>
          <Label left icon>
            <Icon name="mail outline"></Icon>未讀郵件
            <Detail>142</Detail>
          </Label>
          <Label right icon>吳雨藍
            <Icon name="close"></Icon>
          </Label>
        </div>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Basic"
      component={(
        <Label basic>Yami Odymel</Label>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <Label mini>迷你</Label>
          <Label tiny>微小</Label>
          <Label small>小型</Label>
          <Label>預設</Label>
          <Label medium>適中</Label>
          <Label large>大型</Label>
          <Label big>巨大</Label>
          <Label huge>超大</Label>
          <Label massive>重量級</Label>
        </div>
      )}
    />
    <PlayGround
      title="Floated"
      component={(
        <div>
          <Label left floated>靠左浮動</Label>
          <Label right floated>靠右浮動</Label>
        </div>
      )}
    />
    <PlayGround
      title="Compact"
      component={(
        <div>
          <Label compact>1,624</Label>
          <Label compact primary>315</Label>
        </div>
      )}
    />
    <PlayGround
      title="Circular"
      component={(
        <div>
          <Label circular>1</Label>
          <Label circular>99+</Label>
          <Label circular>1234567</Label>
        </div>
      )}
    />
    <PlayGround
      title="Empty"
      component={(
        <div>
          <Label empty circular></Label>
          <Label empty triangle></Label>
          <Label empty square></Label>
          <Label empty circular primary></Label>
          <Label empty circular info></Label>
          <Label empty square positive></Label>
          <Label empty square negative></Label>
          <Label empty triangle info></Label>
          <Label empty triangle warning></Label>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default LabelPage;
