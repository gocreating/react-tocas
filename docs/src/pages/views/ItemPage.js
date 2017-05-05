import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Item,
  Items,
  Image,
  Content,
  Header,
  Meta,
  Description,
  Extra,
  Icon,
  Button,
} from '../../../../lib';

let ItemPage = () => (
  <DemoPageLayout title="Item">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Basic"
      component={(
        <Items>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">吻仔魚</Header>
              <Meta>
                <span>$32 元</span>
              </Meta>
              <Description>
                一般可分為淡水魚魩仔魚與海水魚魩仔魚兩類。
                根據臺灣大學王友慈博士指出，魩仔魚是單一種魚類，
                是沙丁魚苗，若撈捕作業不正確有可能撈到數十至一百五十種類的魚苗。
              </Description>
              <Extra>
                維基百科
              </Extra>
            </Content>
          </Item>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">芒果</Header>
              <Meta>
                <span>Mango</span>
              </Meta>
              <Description>
                是芒果屬的一種植物和果實，原產自北印度和馬來半島，
                在梵語中叫作āmra，音譯為「菴羅」，或叫作āmalaka，
                音譯為「菴摩勒」、「菴摩羅」、「阿摩落伽」。
              </Description>
              <Extra>
                維基百科
              </Extra>
            </Content>
          </Item>
        </Items>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Image"
      component={(
        <Items divided>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
          </Item>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Content"
      component={(
        <Items divided>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              臺灣，舊稱福爾摩沙，是位於亞洲東部、太平洋西北側的島嶼，
              地處琉球群島與菲律賓群島之間，西隔臺灣海峽與歐亞大陸相望－維基百科。
            </Content>
          </Item>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              「臺灣」之名的由來說法甚多，在明朝以後的文獻中，
              臺灣亦寫作「大員」、「臺員」（三者臺語：同音：Tai-oan），
              或是「雞籠山」、「雞籠」、「北港」、「東蕃」等－維基百科。
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Header"
      component={(
        <Items>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content middle aligned>
              <Header>
                笨蛋測驗召喚獸
              </Header>
            </Content>
          </Item>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content middle aligned>
              <Header>
                零之使魔
              </Header>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Meta"
      component={(
        <Items>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              <Header>
                戳戳洨洨安
              </Header>
              <Meta>
                <span>Android</span>
                <span>免費下載</span>
              </Meta>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Dotted Meta"
      component={(
        <Items>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              <Header>
                電腦玩瞎咪
              </Header>
              <Meta middoted>
                <span>Yami Odymel</span>
                <span>台灣</span>
              </Meta>
            </Content>
          </Item>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              <Header>
                希豹
              </Header>
              <Meta bulleted>
                <span>Seadog007</span>
                <span>台灣</span>
              </Meta>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Inline Meta"
      component={(
        <Items>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/e1fffb5.png"
                alt=""
              />
            </Image>
            <Content>
              <Header>
                標題
              </Header>
              <Meta inline>
                <span>同行</span>
                <span>中繼資料</span>
              </Meta>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Description"
      component={(
        <Items>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content>
              <Header>Macbook Air</Header>
              <Description>
                一台由賈伯斯從牛皮信封袋中拿出來的輕薄筆電，
                令人為之驚艷，嘆為觀止。
                省去 CD 光碟機的時代從這個時候開始。
              </Description>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Link"
      component={(
        <Items>
          <Item>
            <Image wrapper="a" tiny>
              <img
                src="https://tocas-ui.com/assets/img/5e5e3a6.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">羽田白音</Header>
              <Description>
                來自日本，在台灣目睹一場飛機事故並在其中拯救了另一名乘客，但得到的回報卻不是感謝。
              </Description>
            </Content>
          </Item>
          <Item>
            <Image wrapper="a" tiny>
              <img
                src="https://tocas-ui.com/assets/img/8008365.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">卡莉絲</Header>
              <Description>
                總是以玩樂為主的初中生，
                把大多數的時間都花在打理自己的外觀上，
                嘗試著讓自己成為能夠大受矚目的人物。
              </Description>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Extra"
      component={(
        <Items>
          <Item>
            <Content>
              <Header>廢除博愛座</Header>
              <Description>
                近年來，台灣一般民眾之文化水準已明顯提高，
                在公共運輸工具上讓座給有需要的人已經成為一個常見的行為。
                不僅僅局限於博愛座，一般座位也常見讓座這樣的行為。
              </Description>
              <Extra>
                <Icon name="check" />
                121 個贊同
              </Extra>
            </Content>
          </Item>
        </Items>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Divided"
      component={(
        <Items divided>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">吻仔魚</Header>
              <Meta>
                <span>$32 元</span>
              </Meta>
              <Description>
                一般可分為淡水魚魩仔魚與海水魚魩仔魚兩類。
                根據臺灣大學王友慈博士指出，魩仔魚是單一種魚類，
                是沙丁魚苗，若撈捕作業不正確有可能撈到數十至一百五十種類的魚苗。
              </Description>
              <Extra>
                維基百科
              </Extra>
            </Content>
          </Item>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content>
              <Header wrapper="a">芒果</Header>
              <Meta>
                <span>Mango</span>
              </Meta>
              <Description>
                是芒果屬的一種植物和果實，原產自北印度和馬來半島，
                在梵語中叫作āmra，音譯為「菴羅」，或叫作āmalaka，
                音譯為「菴摩勒」、「菴摩羅」、「阿摩落伽」。
              </Description>
              <Extra>
                維基百科
              </Extra>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Relaxed"
      component={(
        <div>
          <Items relaxed>
            <Item>
              <Image tiny>
                <img
                  src="https://tocas-ui.com/assets/img/e1fffb5.png"
                  alt=""
                />
              </Image>
              <Content middle aligned>
                <Header>
                  New Game!
                </Header>
              </Content>
            </Item>
            <Item>
              <Image tiny>
                <img
                  src="https://tocas-ui.com/assets/img/e1fffb5.png"
                  alt=""
                />
              </Image>
              <Content middle aligned>
                <Header>
                  Re:從零開始的異世界生活
                </Header>
              </Content>
            </Item>
          </Items>

          <Items very relaxed>
            <Item>
              <Image tiny>
                <img
                  src="https://tocas-ui.com/assets/img/e1fffb5.png"
                  alt=""
                />
              </Image>
              <Content middle aligned>
                <Header>
                  Fate/kaleid liner 魔法少女☆伊莉雅3rei
                </Header>
              </Content>
            </Item>
            <Item>
              <Image tiny>
                <img
                  src="https://tocas-ui.com/assets/img/e1fffb5.png"
                  alt=""
                />
              </Image>
              <Content middle aligned>
                <Header>
                  這個美術社大有問題！
                </Header>
              </Content>
            </Item>
          </Items>
        </div>
      )}
    />
    <PlayGround
      title="Link"
      component={(
        <Items link>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/5e5e3a6.png"
                alt=""
              />
            </Image>
            <Content middle aligned>
              <Header>
                Lorem ipsum
              </Header>
              <Description>
                Curabitur efficitur nisi vitae lorem bibendum pulvinar.
                Nec risus ac tellus euismod varius.
                Nullam commodo turpis lorem,
                vitae luctus magna consequat sed.
              </Description>
            </Content>
          </Item>
          <Item>
            <Image tiny>
              <img
                src="https://tocas-ui.com/assets/img/0c20de3.png"
                alt=""
              />
            </Image>
            <Content middle aligned>
              <Header>
                Cum sociis
              </Header>
              <Description>
                Quisque gravida dictum justo,
                vitae dignissim est luctus a. Phasellus placerat,
                nunc eget hendrerit dictum,
                orci urna iaculis enim.
              </Description>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Vertical Alignment"
      component={(
        <Items>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content top aligned>
              <Header>
                這個標題會貼齊上方
              </Header>
            </Content>
          </Item>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content middle aligned>
              <Header>
                這會垂直置中
              </Header>
            </Content>
          </Item>
          <Item>
            <Image>
              <img
                src="https://tocas-ui.com/assets/img/15d7510.png"
                alt=""
              />
            </Image>
            <Content bottom aligned>
              <Header>
                然後這個會貼齊底部
              </Header>
            </Content>
          </Item>
        </Items>
      )}
    />
    <PlayGround
      title="Floated"
      component={(
        <Items>
          <Item>
            <Image small>
              <img
                src="https://tocas-ui.com/assets/img/5e5e3a6.png"
                alt=""
              />
            </Image>
            <Content top aligned>
              <Header>
                Lorem ipsum
              </Header>
              <Description>
                Curabitur efficitur nisi vitae lorem bibendum pulvinar.
                Nec risus ac tellus euismod varius.
                Nullam commodo turpis lorem,
                vitae luctus magna consequat sed.
              </Description>
              <Extra>
                <Button right floated>
                  加入好友
                </Button>
              </Extra>
            </Content>
          </Item>
          <Item>
            <Image small>
              <img
                src="https://tocas-ui.com/assets/img/0c20de3.png"
                alt=""
              />
            </Image>
            <Content top aligned>
              <Header>
                Cum sociis
              </Header>
              <Description>
                Quisque gravida dictum justo,
                vitae dignissim est luctus a. Phasellus placerat,
                nunc eget hendrerit dictum,
                orci urna iaculis enim.
              </Description>
              <Extra>
                <Button right floated>
                  加入好友
                </Button>
              </Extra>
            </Content>
          </Item>
        </Items>
      )}
    />
  </DemoPageLayout>
);

export default ItemPage;
