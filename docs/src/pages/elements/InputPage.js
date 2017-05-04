import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Input,
  Inputs,
  Icon,
  Button,
  Label,
} from '../../../../lib';

let InputPage = () => (
  <DemoPageLayout title="Image">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Input Field"
      component={(
        <div>
          <Input>
            <input type="text" placeholder="文字欄位" />
          </Input>
          <br />
          <br />
          <Input>
            <textarea placeholder="多行文字欄位"></textarea>
          </Input>
          <br />
          <br />
          <Input>
            <div contentEditable>在這裡輸入一些文字</div>
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Inverted Semantic"
      component={(
        <div>
          <Input inverted primary>
            <input type="text" placeholder="反色主要語氣" />
          </Input>
          <br />
          <br />
          <Input inverted info>
            <input type="text" placeholder="反色提示語氣" />
          </Input>
          <br />
          <br />
          <Input inverted warning>
            <input type="text" placeholder="反色警告語氣" />
          </Input>
          <br />
          <br />
          <Input inverted positive>
            <input type="text" placeholder="反色正面語氣" />
          </Input>
          <br />
          <br />
          <Input inverted negative>
            <input type="text" placeholder="反色否定語氣" />
          </Input>
          <br />
          <br />
          <Input inverted>
            <input type="text" placeholder="反色語氣" />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Basic"
      component={(
        <Input basic>
          <input type="text" placeholder="這個背景是透明的" />
        </Input>
      )}
    />

    <h1 className="ts dividing header">Grouping</h1>
    <PlayGround
      title="Vertical Group"
      component={(
        <Inputs vertical>
          <Input>
            <input type="text" placeholder="帳號" />
          </Input>
          <Input>
            <input type="text" placeholder="電子郵件地址" />
          </Input>
          <Input>
            <input type="password" placeholder="密碼" />
          </Input>
        </Inputs>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Focus"
      component={(
        <Input focus>
          <input type="text" placeholder="聚焦中的輸入欄位" />
        </Input>
      )}
    />
    <PlayGround
      title="Loading"
      component={(
        <div>
          <Input left icon loading>
            <input type="text" placeholder="在此搜尋人、事、物" />
            <Icon name="search" />
          </Input>
          <br />
          <br />
          <Input icon loading>
            <input type="text" placeholder="在此搜尋人、事、物" />
            <Icon name="search" />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Disabled"
      component={(
        <Input disabled>
          <input type="text" placeholder="文字欄位" />
        </Input>
      )}
    />
    <PlayGround
      title="Error"
      component={(
        <div>
          <Input error>
            <input type="text" placeholder="文字欄位" />
          </Input>
          <br />
          <br />
          <Input basic error>
            <input type="text" placeholder="文字欄位" />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Warning"
      component={(
        <div>
          <Input warning>
            <input type="text" placeholder="文字欄位" />
          </Input>
          <br />
          <br />
          <Input basic warning>
            <input type="text" placeholder="文字欄位" />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Success"
      component={(
        <div>
          <Input success>
            <input type="text" placeholder="文字欄位" />
          </Input>
          <br />
          <br />
          <Input basic success>
            <input type="text" placeholder="文字欄位" />
          </Input>
        </div>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Icon"
      component={(
        <div>
          <Input icon>
            <input type="text" placeholder="搜尋..." />
            <Icon name="search" />
          </Input>
          <br />
          <br />
          <Input left icon>
            <input type="text" placeholder="搜尋使用者..." />
            <Icon name="users" />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Link Icon"
      component={(
        <div>
          <Input icon>
            <input type="text" placeholder="搜尋..." />
            <Icon name="search" circular link />
          </Input>
          <br />
          <br />
          <Input icon>
            <input type="text" placeholder="搜尋..." />
            <Icon name="search" inverted circular link />
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Labeled"
      component={(
        <div>
          <Input labeled>
            <Label>http://</Label>
            <input type="text" placeholder="您的網址" />
          </Input>
          <br />
          <br />
          <Input right labeled>
            <Label>$</Label>
            <input type="text" placeholder="價格" />
            <Label basic>
              .00
            </Label>
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Action"
      component={(
        <div>
          <Input action>
            <input type="text" placeholder="在這搜尋人、事、物" />
            <Button>搜尋</Button>
          </Input>
          <br />
          <br />
          <Input left action>
            <Button primary labeled icon>
              <Icon name="cart" />
              結帳
            </Button>
            <input type="text" value="$52.03" />
          </Input>
          <br />
          <br />
          <Input action>
            <input type="text" placeholder="搜尋網域名稱" />
            <select className="ts basic dropdown">
              <option>.com</option>
              <option>.org</option>
              <option>.xxx</option>
            </select>
          </Input>
          <br />
          <br />
          <Input action>
            <input type="text" placeholder="書籍名稱" />
            <select className="ts basic dropdown">
              <option>教育</option>
              <option>娛樂休閒</option>
              <option>經濟</option>
            </select>
            <Button>搜尋</Button>
          </Input>
        </div>
      )}
    />
    <PlayGround
      title="Borderless"
      component={(
        <Input borderless>
          <input type="text" placeholder="文字欄位" />
        </Input>
      )}
    />
    <PlayGround
      title="Fluid"
      component={(
        <Input fluid>
          <input type="text" placeholder="文字欄位" />
        </Input>
      )}
    />
    <PlayGround
      title="Circular"
      component={(
        <Input circular>
          <input type="text" placeholder="文字欄位" />
        </Input>
      )}
    />
    <PlayGround
      title="Resizable"
      component={(
        <Input resizable>
          <textarea placeholder="文章內容..."></textarea>
        </Input>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <Input mini>
            <input type="text" placeholder="迷你" />
          </Input>
          <br />
          <br />
          <Input tiny>
            <input type="text" placeholder="微小" />
          </Input>
          <br />
          <br />
          <Input small>
            <input type="text" placeholder="小的" />
          </Input>
          <br />
          <br />
          <Input medium>
            <input type="text" placeholder="適中" />
          </Input>
          <br />
          <br />
          <Input large>
            <input type="text" placeholder="大的" />
          </Input>
          <br />
          <br />
          <Input big>
            <input type="text" placeholder="更大" />
          </Input>
          <br />
          <br />
          <Input huge>
            <input type="text" placeholder="巨大" />
          </Input>
          <br />
          <br />
          <Input massive>
            <input type="text" placeholder="重量級" />
          </Input>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default InputPage;
