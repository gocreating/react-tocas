import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  List,
  Item,
  Content,
  Header,
  Description,
  Icon,
  Image,
  Segment,
  Button,
} from '../../../../lib';
import './ListPage.css';

let ListPage = () => (
  <DemoPageLayout title="List">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Basic"
      component={(
        <List>
          <Item>蘋果</Item>
          <Item>菠羅</Item>
          <Item>拔鳳梨</Item>
        </List>
      )}
    />
    <PlayGround
      title="Bulleted"
      component={(
        <List bulleted>
          <Item>橙希</Item>
          <Item>卡莉絲</Item>
          <Item>
            吳雨藍
            <List>
              <Item link href="#">亞凡芽</Item>
              <Item>羽田白音</Item>
              <Item>雷莉亞</Item>
            </List>
          </Item>
          <Item>依可諾爾</Item>
        </List>
      )}
    />
    <PlayGround
      title="Ordered"
      component={(
        <List ordered>
          <Item link>英梨梨</Item>
          <Item link>詩羽</Item>
          <Item>
            <a>其他人物</a>
            <List>
              <Item link>加藤惠</Item>
              <Item link>九條可憐</Item>
              <Item link>豬熊陽子</Item>
            </List>
          </Item>
          <Item link>小路綾</Item>
        </List>
      )}
    />
    <PlayGround
      title="Link"
      component={(
        <List link>
          <Item active>首頁</Item>
          <Item link>關於</Item>
          <Item link>工作</Item>
          <Item link>團隊</Item>
        </List>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Item"
      component={(
        <List>
          <Item>英梨梨</Item>
          <Item>詩羽</Item>
          <Item>加藤惠</Item>
        </List>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <List>
          <Item link>
            <Icon name="help" />
            <Content>
              <Header>浮動圖示</Header>
              <Description>
                這串文字會有一個左邊距，用來確保和你的圖示不會靠地太近。
              </Description>
            </Content>
          </Item>
          <Item link>
            <Icon name="right triangle" />
            <Content>
              <Header>圖示對齊</Header>
              <Description>
                浮動圖示預設貼齊上方。想看看效果的話這個範例就是了。
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon name="help" />
            圖示同行文字。
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Image"
      component={(
        <List>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content>
              <Header wrapper="a">Yami Odymel</Header>
              <Description>
                正在遊玩
                <a><b>Battlefield 1</b></a>。
              </Description>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content>
              <Header wrapper="a">Mac Taylor</Header>
              <Description>
                正在研發
                <a><b>Alan Wakeup</b></a>。
              </Description>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content>
              <Header wrapper="a">Karisu</Header>
              <Description>
                正在觀看
                <a><b>麻辣鮮師</b></a>。
              </Description>
            </Content>
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Link"
      component={(
        <div>
          <List>
            <Item link>什麼是 FAQ？</Item>
            <Item link>誰是我們的客戶？</Item>
            <Item link>我們的辦公室於何地？</Item>
          </List>

          <List>
            <Item link>
              <Header wrapper="a">標題</Header>
              <Description>
                在我們的 <a>註釋中</a> 按下吧！
              </Description>
            </Item>
            <Item link>
              <Header wrapper="a">知道更多</Header>
              <Description>
                想知道這個網站的更多請參閱 <a>我們的 FAQ 頁面</a>。
              </Description>
            </Item>
          </List>
        </div>
      )}
    />
    <PlayGround
      title="Header"
      component={(
        <List>
          <Item>
            <Header>巫師聯盟總部</Header>
            電腦專家俱樂部 // 巫術實驗室
          </Item>
          <Item>
            <Header>YSITD</Header>
            Young Students' IT Discussion
          </Item>
          <Item>
            <Header>HentaiDB</Header>
            Official supergroup of @HentaiDB project.
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Description"
      component={(
        <List>
          <Item>
            <Icon name="map marker" />
            <Content>
              <Header wrapper="a">台北 101</Header>
              <Description>
                一根每到跨年就會變成金蔥棒的台灣知名柱子。
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon name="map marker" />
            <Content>
              <Header wrapper="a">台東</Header>
              <Description>
                不錯的休閒旅遊地點，連我都想去。
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon name="map marker" />
            <Content>
              <Header wrapper="a">高雄</Header>
              <Description>
                大家有著不錯的熱情。
              </Description>
            </Content>
          </Item>
          <Item>
            <Icon name="map marker" />
            <Content>
              <Header wrapper="a">台南</Header>
              <Description>
                小吃是台灣最好吃的，你說不好吃？吃慶記啦，阿靠夭那是台中。
              </Description>
            </Content>
          </Item>
        </List>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Horizontal List"
      component={(
        <List horizontal>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content>
              <Header>Yami Odymel</Header>
              研發 2016 始春的人
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content>
              <Header>Mac Taylor</Header>
              好基友
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content>
              <Header>Val Pyen</Header>
              OSU! 喜好者
            </Content>
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Horizontal Ordered List"
      component={(
        <List horizontal ordered>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content>
              <Header>Yami Odymel</Header>
              研發 2016 始春的人
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content>
              <Header>Mac Taylor</Header>
              好基友
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content>
              <Header>Val Pyen</Header>
              OSU! 喜好者
            </Content>
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Horizontal Bulleted List"
      component={(
        <List horizontal bulleted link>
          <Item link>
            使用者條約
          </Item>
          <Item link>
            隱私政策
          </Item>
          <Item link>
            聯繫我們
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Inverted"
      component={(
        <Segment inverted>
          <List inverted relaxed divided>
            <Item>
              <Content>
                <Header>Cloud 9</Header>
                <Description>還不錯的線上 IDE 和雲端服務。</Description>
              </Content>
            </Item>
            <Item>
              <Content>
                <Header>Facebook</Header>
                <Description>你認真的嗎？</Description>
              </Content>
            </Item>
            <Item>
              <Content>
                <Header>ВКонтакте</Header>
                <Description>朝向獨裁邁進的俄羅斯社群平台。</Description>
              </Content>
            </Item>
          </List>
        </Segment>
      )}
    />
    <PlayGround
      title="Semantic Item"
      component={(
        <List relaxed divided>
          <Item positive>
            正面語意
          </Item>
          <Item negative>
            否定語意
          </Item>
          <Item primary>
            主要語意
          </Item>
          <Item info>
            資訊語意
          </Item>
          <Item warning>
            警告語意
          </Item>
          <Item inverted>
            反色語意
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Inverted Semantic Item"
      component={(
        <Segment inverted>
          <List inverted relaxed divided>
            <Item positive>
              正面語意
            </Item>
            <Item negative>
              否定語意
            </Item>
            <Item primary>
              主要語意
            </Item>
            <Item info>
              資訊語意
            </Item>
            <Item warning>
              警告語意
            </Item>
            <Item inverted>
              反色語意
            </Item>
          </List>
        </Segment>
      )}
    />
    <PlayGround
      title="Selection"
      component={(
        <List middle aligned selection>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content>
              <Header>Yami Odymel</Header>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content>
              <Header>Mac Taylor</Header>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content>
              <Header>Ruby</Header>
            </Content>
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Relaxed"
      component={(
        <List relaxed>
          <Item>天野望</Item>
          <Item>火井向百合</Item>
          <Item>成海遙香</Item>
        </List>
      )}
    />
    <PlayGround
      title="Divided"
      component={(
        <div>
          <List divided>
            <Item>千導院楓</Item>
            <Item>粒櫻杏子</Item>
            <Item>若葉昴</Item>
          </List>
          <br />
          <List relaxed divided>
            <Item>英梨梨</Item>
            <Item>詩羽</Item>
            <Item>加藤惠</Item>
          </List>
        </div>
      )}
    />
    <PlayGround
      title="Celled"
      component={(
        <div>
          <List celled>
            <Item>千導院楓</Item>
            <Item>粒櫻杏子</Item>
            <Item>若葉昴</Item>
          </List>
          <br />
          <List relaxed celled>
            <Item>英梨梨</Item>
            <Item>詩羽</Item>
            <Item>加藤惠</Item>
          </List>
        </div>
      )}
    />
    <PlayGround
      title="Advanced Usage of Celled"
      component={(
        <div>
          <List celled ordered>
            <Item>貓咪</Item>
            <Item>馬</Item>
            <Item>狗
              <List>
                <Item>月月</Item>
                <Item>柴犬</Item>
                <Item>吻仔魚</Item>
              </List>
            </Item>
          </List>

          <List celled horizontal>
            <Item>關於我們</Item>
            <Item>聯絡方式</Item>
            <Item>支援需求</Item>
          </List>
        </div>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <List mini horizontal>
            <Item>迷你</Item>
            <Item>迷你</Item>
          </List>
          <List tiny horizontal>
            <Item>微小</Item>
            <Item>微小</Item>
          </List>
          <List small horizontal>
            <Item>小型</Item>
            <Item>小型</Item>
          </List>
          <List medium horizontal>
            <Item>適中</Item>
            <Item>適中</Item>
          </List>
          <List large horizontal>
            <Item>較大</Item>
            <Item>較大</Item>
          </List>
          <List big horizontal>
            <Item>大型</Item>
            <Item>大型</Item>
          </List>
          <List huge horizontal>
            <Item>超大</Item>
            <Item>超大</Item>
          </List>
          <List massive horizontal>
            <Item>重量級</Item>
            <Item>重量級</Item>
          </List>
        </div>
      )}
    />

    <h1 className="ts dividing header">Appearance of Content</h1>
    <PlayGround
      title="Vertical Alignment"
      component={(
        <List horizontal>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content top aligned>
              向上置齊
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content middle aligned>
              置中
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content bottom aligned>
              向下置齊
            </Content>
          </Item>
        </List>
      )}
    />
    <PlayGround
      title="Float"
      component={(
        <List middle aligned divided>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/5e5e3a6.png" />
            <Content>
              Aoi
            </Content>
            <Content right floated>
              <Button>新增</Button>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/0c20de3.png" />
            <Content>
              Orenji
            </Content>
            <Content right floated>
              <Button>新增</Button>
            </Content>
          </Item>
          <Item>
            <Image avatar src="https://tocas-ui.com/assets/img/8008365.png" />
            <Content>
              Shirone
            </Content>
            <Content right floated>
              <Button>新增</Button>
            </Content>
          </Item>
        </List>
      )}
    />
  </DemoPageLayout>
);

export default ListPage;
