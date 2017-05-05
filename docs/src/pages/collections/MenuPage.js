import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Menu,
  Item,
  Icon,
  Input,
  Label,
} from '../../../../lib';

let MenuPage = () => (
  <DemoPageLayout title="Menu">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Menu"
      component={(
        <Menu>
          <Item link>首頁</Item>
          <Item link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Basic"
      component={(
        <Menu basic>
          <Item link>首頁</Item>
          <Item link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Pure"
      component={(
        <Menu pure basic borderless>
          <Item link>合作</Item>
          <Item link>外框</Item>
          <Item link>除錯器</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Secondary"
      component={(
        <Menu secondary>
          <Item link>動漫</Item>
          <Item link>休閒</Item>
          <Item link>音樂</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Pointing Secondary"
      component={(
        <Menu pointing secondary>
          <Item link>首頁</Item>
          <Item active link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Tabbed"
      component={(
        <Menu tabbed>
          <Item link>動漫</Item>
          <Item active link>休閒</Item>
          <Item link>音樂</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Inverted Semantic"
      component={(
        <div>
          <Menu inverted primary>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
          <Menu inverted info>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
          <Menu inverted warning>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
          <Menu inverted>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
        </div>
      )}
    />
    <PlayGround
      title="Inverted Positive and Negative"
      component={(
        <div>
          <Menu inverted positive>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
          <Menu inverted negative>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
          </Menu>
        </div>
      )}
    />
    <PlayGround
      title="Vertical"
      component={(
        <Menu vertical>
          <Item link>首頁</Item>
          <Item link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Active"
      component={(
        <Menu>
          <Item link>首頁</Item>
          <Item active link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Disabled"
      component={(
        <Menu>
          <Item link>首頁</Item>
          <Item disabled link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Header"
      component={(
        <Menu inverted info borderless>
          <Item link header>首頁</Item>
          <Item link>關於</Item>
          <Item link>文件</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Unread"
      component={(
        <div>
          <Menu borderless>
            <Item link>首頁</Item>
            <Item link unread>動態軸</Item>
            <Item link>好友</Item>
            <Item link>設定</Item>
          </Menu>

          <Menu icon>
            <Item link><Icon name="user" /></Item>
            <Item link unread><Icon name="comment" /></Item>
            <Item link><Icon name="star" /></Item>
          </Menu>
        </div>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <Menu vertical compact>
          <Item link>
            <Icon name="search" />
            搜尋
          </Item>
          <Item active link>
            <Icon name="mail" />
            電子郵件
          </Item>
          <Item disabled link>
            <Icon name="user" />
            使用者
          </Item>
          <Item link>
            <Icon name="remove" />
            刪除
          </Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Right Menu"
      component={(
        <Menu>
          <Item link>首頁</Item>
          <Item link>關於</Item>
          <Item link>文件</Item>
          <Menu right>
            <Item link>檔案</Item>
            <Item link>Github</Item>
          </Menu>
        </Menu>
      )}
    />
    <PlayGround
      title="Menu with Input"
      component={(
        <div>
          <Menu inverted primary borderless>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
            <Menu right>
              <Item fitted>
                <Input borderless right icon inverted primary>
                  <input type="text" placeholder="文字欄位" />
                  <Icon name="search" />
                </Input>
              </Item>
            </Menu>
          </Menu>

          <Menu vertical compact inverted info borderless>
            <Item>
              <Input fluid right icon inverted info>
                <input type="text" placeholder="搜尋" />
                <Icon name="search" />
              </Input>
            </Item>
            <Item link>首頁</Item>
            <Item link>關於</Item>
            <Item link>文件</Item>
            <Item fitted>
              <Input fluid borderless basic icon inverted>
                <input type="text" placeholder="搜尋 ..." />
                <Icon name="search" />
              </Input>
            </Item>
          </Menu>
        </div>
      )}
    />
    <PlayGround
      title="Menu with Label"
      component={(
        <Menu vertical compact inverted info>
          <Item link>
            <Label>99+</Label>
            動態軸
          </Item>
          <Item active link>
            <Label>12</Label>
            電子郵件
          </Item>
          <Item disabled link>
            <Label>3</Label>
            訊息
          </Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Divider"
      component={(
        <Menu vertical compact borderless>
          <Item link>
            <Icon name="picture" /> 相簿
          </Item>
          <Item link>
            <Icon name="music" /> 音樂
          </Item>
          <Item divider />
          <Item link>
            <Icon name="sign out" /> 登出
          </Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Sub Menu"
      component={(
        <Menu vertical compact>
          <Item>
            <Input fluid right icon>
              <input type="text" placeholder="搜尋" />
              <Icon name="search" />
            </Input>
          </Item>
          <Item>
            首頁功能
            <Menu>
              <Item active link>搜尋</Item>
              <Item link>新增</Item>
              <Item link>移除</Item>
            </Menu>
          </Item>
          <Item>瀏覽</Item>
          <Item>訊息</Item>
          <Item>更多</Item>
        </Menu>
      )}
    />
    <PlayGround
      title="Dropdown Menu"
      notImplemented
    />
  </DemoPageLayout>
);

export default MenuPage;
