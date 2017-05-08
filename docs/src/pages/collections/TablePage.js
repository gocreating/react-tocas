import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Table,
  TFoot,
  Tr,
  Th,
  Td,
  Header,
  Image,
  Content,
  Button,
  Icon,
} from '../../../../lib';

let TablePage = () => (
  <DemoPageLayout title="Table">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Table"
      component={(
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>英文暱稱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>卡莉絲</td>
              <td>Caris</td>
            </tr>
            <tr>
              <td>2</td>
              <td>橙希</td>
              <td>Orenji</td>
            </tr>
            <tr>
              <td>3</td>
              <td>吳雨藍</td>
              <td>Aoi</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="3">未到人數：3</th>
            </tr>
          </tfoot>
        </Table>
      )}
    />
    <PlayGround
      title="Celled"
      component={(
        <div>
          <Table celled>
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>英文暱稱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>卡莉絲</td>
                <td>Caris</td>
              </tr>
              <tr>
                <td>2</td>
                <td>橙希</td>
                <td>Orenji</td>
              </tr>
              <tr>
                <td>3</td>
                <td>吳雨藍</td>
                <td>Aoi</td>
              </tr>
            </tbody>
          </Table>
          <Table very basic collapsing celled>
            <thead>
              <tr>
                <th>員工</th>
                <th>答對題數</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Header level={6}>
                    <Image
                      src="https://tocas-ui.com/assets/img/5e5e3a6.png"
                      alt=""
                      mini rounded
                    />
                    <Content>
                      雷莉亞
                      <Header sub>科學家</Header>
                    </Content>
                  </Header>
                </td>
                <td>
                  22
                </td>
              </tr>
              <tr>
                <td>
                  <Header level={6}>
                    <Image
                      src="https://tocas-ui.com/assets/img/0c20de3.png"
                      alt=""
                      mini rounded
                    />
                    <Content>
                      卡莉絲·伊繁特
                      <Header sub>初中生</Header>
                    </Content>
                  </Header>
                </td>
                <td>
                  13
                </td>
              </tr>
            </tbody>
          </Table>

          <Table celled striped>
            <thead>
              <tr>
                <th colSpan="3">
                  Git 倉庫
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td collapsing>
                  <Icon name="folder" /> node_modules
                </Td>
                <td>第一次 Commit！</td>
                <Td right aligned collapsing>10 小時前</Td>
              </tr>
              <tr>
                <td>
                  <Icon name="folder" /> test
                </td>
                <td>第一次 Commit！</td>
                <Td right aligned>10 小時前</Td>
              </tr>
              <tr>
                <td>
                  <Icon name="folder" /> build
                </td>
                <td>第一次 Commit！</td>
                <Td right aligned>10 小時前</Td>
              </tr>
              <tr>
                <td>
                  <Icon name="file outline" /> package.json
                </td>
                <td>第一次 Commit！</td>
                <Td right aligned>10 小時前</Td>
              </tr>
              <tr>
                <td>
                  <Icon name="file outline" /> Gruntfile.js
                </td>
                <td>第一次 Commit！</td>
                <Td right aligned>10 小時前</Td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    />
    <PlayGround
      title="Definition"
      component={(
        <div>
          <Table definition>
            <thead>
              <tr>
                <th></th>
                <th>參數</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>header()</td>
                <td>title[<em>string</em>]</td>
                <td>輸出網頁標頭。</td>
              </tr>
              <tr>
                <td>footer()</td>
                <td>
                  path[<em>string</em>],
                  name[<em>string</em>[<em>optional</em>]]
                </td>
                <td>於網頁最底部輸出內容，可同時儲存內容至一個檔案。</td>
              </tr>
            </tbody>
          </Table>

          <Table compact celled definition>
            <thead>
              <tr>
                <th></th>
                <th>真實姓名</th>
                <th>註冊日期</th>
                <th>電子郵件地址</th>
                <th>高級會員</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td collapsing>
                  <div className="ts toggle checkbox">
                    <input type="checkbox" id="toggle1" />
                    <label htmlFor="toggle1"></label>
                  </div>
                </Td>
                <td>吳雨藍</td>
                <td>2014/12/24</td>
                <td>aoi@misaka.net</td>
                <td>否</td>
              </tr>
              <tr>
                <Td collapsing>
                  <div className="ts toggle checkbox">
                    <input type="checkbox" id="toggle2" />
                    <label htmlFor="toggle2"></label>
                  </div>
                </Td>
                <td>橙希</td>
                <td>2015/03/15</td>
                <td>orenji@aoi.com</td>
                <td>是</td>
              </tr>
              <tr>
                <Td collapsing>
                  <div className="ts toggle checkbox">
                    <input type="checkbox" id="toggle3" />
                    <label htmlFor="toggle3"></label>
                  </div>
                </Td>
                <td>羽田白音</td>
                <td>2016/01/20</td>
                <td>shirone@yahoo.jp.com</td>
                <td>是</td>
              </tr>
            </tbody>
            <TFoot fullWidth>
              <tr>
                <th></th>
                <th colSpan="4">
                  <Button right floated small primary labeled icon>
                    <Icon name="user" /> 新增使用者
                  </Button>
                  <Button small>
                    核准
                  </Button>
                  <Button small disabled>
                    全部核准
                  </Button>
                </th>
              </tr>
            </TFoot>
          </Table>
        </div>
      )}
    />
    <PlayGround
      title="Complex Structure"
      component={(
        <Table celled structured>
          <thead>
            <tr>
              <th rowSpan="2">名稱</th>
              <th rowSpan="2">種類</th>
              <th rowSpan="2">檔案數量</th>
              <th colSpan="3">程式語言</th>
            </tr>
            <tr>
              <th>Ruby</th>
              <th>JavaScript</th>
              <th>Python</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alpha 團隊</td>
              <td>專案 1</td>
              <Td right aligned>2</Td>
              <Td center aligned>
                <Icon name="large positive checkmark" />
              </Td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan="3">Beta 團隊</td>
              <td>專案 1</td>
              <Td right aligned>52</Td>
              <Td center aligned>
                <Icon name="large positive checkmark" />
              </Td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>專案 2</td>
              <Td right aligned>12</Td>
              <td></td>
              <Td center aligned>
                <Icon name="large positive checkmark" />
              </Td>
              <td></td>
            </tr>
            <tr>
              <td>專案 3</td>
              <Td right aligned>21</Td>
              <Td center aligned>
                <Icon name="large positive checkmark" />
              </Td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Positive and Negative"
      component={(
        <Table>
          <thead>
            <tr>
              <th>名稱</th>
              <th>英文名稱</th>
              <th>計畫狀態</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>可憐</td>
              <td>Karen</td>
              <Td positive><Icon name="check" /> 已完成</Td>
              <td>多國語元支援的函式庫，協助網站跨國交際。</td>
            </tr>
            <Tr positive>
              <td>美由紀</td>
              <td>Miyuki</td>
              <td><Icon name="check" /> 已完成</td>
              <td>協助圖像處理的類別，必須要安裝 Imagick。</td>
            </Tr>
            <tr>
              <td>卡莉絲</td>
              <td>Caris</td>
              <Td negative><Icon name="dont" /> 尚未完成</Td>
              <td>一個基於 HTML5 的遊戲引擎。</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Error"
      component={(
        <Table>
          <thead>
            <tr>
              <th>工作區域</th>
              <th>目前狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TeaMeow</td>
              <Td positive><Icon name="check" />已完成</Td>
            </tr>
            <Tr error>
              <td>Safari</td>
              <td><Icon name="close" />已停止</td>
            </Tr>
            <tr>
              <td>Isuka</td>
              <Td error><Icon name="close" />發生錯誤</Td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Warning"
      component={(
        <Table>
          <thead>
            <tr>
              <th>工作區域</th>
              <th>目前狀態</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avane</td>
              <Td warning><Icon name="caution" />需要初始化</Td>
            </tr>
            <tr>
              <td>Caris</td>
              <td>尚未啟動</td>
            </tr>
            <Tr warning>
              <td>Isuka</td>
              <td><Icon name="caution" />需要檢查</td>
            </Tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Active"
      component={(
        <Table>
          <thead>
            <tr>
              <th>使用者名稱</th>
              <th>電子郵件信箱</th>
              <th>生日</th>
            </tr>
          </thead>
          <tbody>
            <Tr active>
              <td>yamiodymel</td>
              <td>yamiodymel@yamiodymel.com</td>
              <td>1998/07/13</td>
            </Tr>
            <tr>
              <td>mac0017817</td>
              <td>mac0017817@mac0017817.com</td>
              <td>1998/07/13</td>
            </tr>
            <tr>
              <Td active>shiroteacat</Td>
              <td>shiroteacat@shiroteacat.com</td>
              <td>1998/07/13</td>
            </tr>
          </tbody>
          <tbody></tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Disabled"
      component={(
        <Table>
          <thead>
            <tr>
              <th>使用者名稱</th>
              <th>電子郵件信箱</th>
              <th>生日</th>
            </tr>
          </thead>
          <tbody>
            <Tr disabled>
              <td>yamiodymel</td>
              <td>yamiodymel@yamiodymel.com</td>
              <td>1998/07/13</td>
            </Tr>
            <tr>
              <td>mac0017817</td>
              <td>mac0017817@mac0017817.com</td>
              <td>1998/07/13</td>
            </tr>
            <tr>
              <Td disabled>shiroteacat</Td>
              <td>shiroteacat@shiroteacat.com</td>
              <td>1998/07/13</td>
            </tr>
          </tbody>
          <tbody></tbody>
        </Table>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Single Line"
      component={(
        <Table single line>
          <thead>
            <tr>
              <th>使用者名稱</th>
              <th>電子郵件信箱</th>
              <th>生日</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>yamiodymel</td>
              <td>yamiodymel@yamiodymel.com</td>
              <td>1998/07/13</td>
            </tr>
            <tr>
              <td>mac0017817</td>
              <td>mac0017817@mac0017817.com</td>
              <td>1998/07/13</td>
            </tr>
            <tr>
              <td>shiroteacat</td>
              <td>shiroteacat@shiroteacat.com</td>
              <td>1998/07/13</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Fixed"
      component={(
        <Table fixed>
          <thead>
            <tr>
              <th>文章名稱</th>
              <th>狀態</th>
              <th>註釋</th>
            </tr>
          </thead>
          {/* eslint-disable */}
          <tbody>
            <tr>
              <td>Lorem Ipsum</td>
              <td>核准</td>
              <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>
            </tr>
            <tr>
              <td>Etiam aliquet</td>
              <td>核准</td>
              <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>
            </tr>
            <tr>
              <td>Aliquam</td>
              <td>拒絕</td>
              <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>
            </tr>
          </tbody>
          {/* eslint-enable */}
        </Table>
      )}
    />
    <PlayGround
      title="Fixed Single Line"
      component={(
        <Table fixed single line>
          <thead>
            <tr>
              <th>文章名稱</th>
              <th>狀態</th>
              <th>註釋</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem Ipsum</td>
              <td>核准</td>
              {/* eslint-disable */}
              <td>我是一個有點長的註釋，當我想要換行的時候卻會因為有了 "single line" 而不能換行，所以我的後面會顯示「...」。</td>
              {/* eslint-enable */}
            </tr>
            <tr>
              <td>Etiam aliquet</td>
              <td>核准</td>
              <td>這是一個比較短的註釋。</td>
            </tr>
            <tr>
              <td>Aliquam</td>
              <td>拒絕</td>
              <td>短註釋。</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Stackable"
      component={(
        <Table stackable>
          <thead>
            <tr>
              <th>文章名稱</th>
              <th>註釋</th>
            </tr>
          </thead>
          {/* eslint-disable */}
          <tbody>
            <tr>
              <td>Lorem Ipsum</td>
              <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>
            </tr>
            <tr>
              <td>Etiam aliquet</td>
              <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>
            </tr>
            <tr>
              <td>Aliquam</td>
              <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>
            </tr>
          </tbody>
          {/* eslint-enable */}
        </Table>
      )}
    />
    <PlayGround
      title="Selectable"
      component={(
        <div>
          <Table selectable>
            <thead>
              <tr>
                <th>工作區域</th>
                <th>目前狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Safari</td>
                <td>已停止</td>
              </tr>
              <tr>
                <td>Isuka</td>
                <td>發生錯誤</td>
              </tr>
              <tr>
                <td>Karen</td>
                <td>尚未確認</td>
              </tr>
            </tbody>
          </Table>

          <Table inverted selectable>
            <thead>
              <tr>
                <th>工作區域</th>
                <th>目前狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Safari</td>
                <td>已停止</td>
              </tr>
              <tr>
                <td>Isuka</td>
                <td>發生錯誤</td>
              </tr>
              <tr>
                <td>Karen</td>
                <td>尚未確認</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    />
    <PlayGround
      title="Selectable Cell"
      component={(
        <Table celled>
          <thead>
            <tr>
              <th>名稱</th>
              <th>狀態</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yami</td>
              <td>沒有動作</td>
              <Td selectable>
                <a href="#">編輯</a>
              </Td>
            </tr>
            <tr>
              <td>Jamie</td>
              <td>已核准</td>
              <Td selectable>
                <a href="#">編輯</a>
              </Td>
            </tr>
            <Tr warning>
              <td>John</td>
              <td>沒有動作</td>
              <Td selectable warning>
                <a href="#">需要變更</a>
              </Td>
            </Tr>
            <tr>
              <td>Jamie</td>
              <Td positive>已核准</Td>
              <Td selectable positive>
                <a href="#">核准</a>
              </Td>
            </tr>
            <tr>
              <td>Jill</td>
              <Td negative>已拒絕</Td>
              <Td selectable negative>
                <a href="#">移除</a>
              </Td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Vertical Alignment"
      component={(
        <Table striped>
          <thead>
            <tr>
              <th>名稱</th>
              <th>狀態</th>
              <th>筆記</th>
            </tr>
          </thead>
          <tbody>
            <Tr top aligned>
              <td>John</td>
              <td>已核准</td>
              <Td top aligned>
                貼齊頂部<br />
                貼齊頂部
              </Td>
            </Tr>
            <tr>
              <td>Jamie</td>
              <Td bottom aligned>貼齊底部</Td>
              <td>
                記事錄<br />
                1<br />
                2<br />
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Horizontal Alignment"
      component={(
        <Table striped>
          <thead>
            <tr>
              <th>名稱</th>
              <th>狀態</th>
              <Th right aligned>筆記</Th>
            </tr>
          </thead>
          <tbody>
            <Tr center aligned>
              <td>Yami</td>
              <td>置中</td>
              <Td right aligned>我靠右</Td>
            </Tr>
            <tr>
              <td>Jamie</td>
              <td>已核准</td>
              <Td right aligned>靠右</Td>
            </tr>
            <tr>
              <td>Jill</td>
              <Td left aligned>靠左邊</Td>
              <Td right aligned>靠右</Td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Striped"
      component={(
        <Table striped>
          <thead>
            <tr>
              <th>檔案名稱</th>
              <th>分類</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>file.php</td>
              <td>Controller</td>
              <td>用來處理檔案相關程式。</td>
            </tr>
            <tr>
              <td>star.php</td>
              <td>Controller</td>
              <td>處理星號程式。</td>
            </tr>
            <tr>
              <td>favorite.php</td>
              <td>Model</td>
              <td>處理最愛的項目。</td>
            </tr>
            <tr>
              <td>user.php</td>
              <td>View</td>
              <td>處理使用者頁面的模板視圖。</td>
            </tr>
            <tr>
              <td>database.php</td>
              <td>Model</td>
              <td>和資料庫負責聯繫的模型。</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Sortable"
      notImplemented
    />
    <PlayGround
      title="Basic"
      component={(
        <div>
          <Table basic>
            <thead>
              <tr>
                <th>檔案名稱</th>
                <th>分類</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>file.php</td>
                <td>Controller</td>
                <td>用來處理檔案相關程式。</td>
              </tr>
              <tr>
                <td>star.php</td>
                <td>Controller</td>
                <td>處理星號程式。</td>
              </tr>
              <tr>
                <td>favorite.php</td>
                <td>Model</td>
                <td>處理最愛的項目。</td>
              </tr>
            </tbody>
          </Table>

          <Table very basic>
            <thead>
              <tr>
                <th>檔案名稱</th>
                <th>分類</th>
                <th>說明</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>file.php</td>
                <td>Controller</td>
                <td>用來處理檔案相關程式。</td>
              </tr>
              <tr>
                <td>star.php</td>
                <td>Controller</td>
                <td>處理星號程式。</td>
              </tr>
              <tr>
                <td>favorite.php</td>
                <td>Model</td>
                <td>處理最愛的項目。</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    />
    <PlayGround
      title="Collapsing Cell"
      component={(
        <Table>
          <tbody>
            <tr>
              <Td collapsing>
                <Icon name="folder" /> node_modules
              </Td>
              <td>第一次 Commit！</td>
              <td>10 小時前</td>
            </tr>
            <tr>
              <td>
                <Icon name="folder" /> test
              </td>
              <td>第一次 Commit！</td>
              <td>10 小時前</td>
            </tr>
            <tr>
              <td>
                <Icon name="folder" /> build
              </td>
              <td>第一次 Commit！</td>
              <td>10 小時前</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Averagely Split"
      component={(
        <Table column={3}>
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>英文暱稱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>卡莉絲</td>
              <td>Caris</td>
            </tr>
            <tr>
              <td>2</td>
              <td>橙希</td>
              <td>Orenji</td>
            </tr>
            <tr>
              <td>3</td>
              <td>吳雨藍</td>
              <td>Aoi</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>3 個人</th>
              <th>2 個核准</th>
              <th></th>
            </tr>
          </tfoot>
        </Table>
      )}
    />
    <PlayGround
      title="Cell Grid"
      component={(
        <Table>
          <thead>
            <tr>
              <Th wide={10}>名稱</Th>
              <Th wide={6}>狀態</Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>已核准</td>
            </tr>
            <tr>
              <td>Jamie</td>
              <td>已核准</td>
            </tr>
            <tr>
              <td>Jill</td>
              <td>已否決</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>3 個人</th>
              <th>2 個核准</th>
            </tr>
          </tfoot>
        </Table>
      )}
    />
    <PlayGround
      title="Collapsing Table"
      component={(
        <Table collapsing>
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>英文暱稱</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>卡莉絲</td>
              <td>Caris</td>
            </tr>
            <tr>
              <td>2</td>
              <td>橙希</td>
              <td>Orenji</td>
            </tr>
            <tr>
              <td>3</td>
              <td>吳雨藍</td>
              <td>Aoi</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Padded"
      component={(
        <div>
          <Table padded>
            <thead>
              <tr>
                <th>文章名稱</th>
                <th>註釋</th>
              </tr>
            </thead>
            {/* eslint-disable */}
            <tbody>
              <tr>
                <td>Lorem Ipsum</td>
                <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>
              </tr>
              <tr>
                <td>Etiam aliquet</td>
                <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>
              </tr>
              <tr>
                <td>Aliquam</td>
                <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>
              </tr>
            </tbody>
            {/* eslint-enable */}
          </Table>

          <Table very padded>
            <thead>
              <tr>
                <th>文章名稱</th>
                <th>註釋</th>
              </tr>
            </thead>
            {/* eslint-disable */}
            <tbody>
              <tr>
                <td>Lorem Ipsum</td>
                <td>Etiam aliquet pulvinar sapien, et venenatis orci placerat vitae. Sed posuere bibendum ante et porttitor. Fusce auctor.</td>
              </tr>
              <tr>
                <td>Etiam aliquet</td>
                <td>Nulla sed ex eget ligula gravida condimentum non id dui. Donec rutrum accumsan augue vitae pretium.</td>
              </tr>
              <tr>
                <td>Aliquam</td>
                <td>Curabitur volutpat tristique erat ut pulvinar. Aliquam varius, mi ut convallis rhoncus, nunc dolor feugiat mi.</td>
              </tr>
            </tbody>
            {/* eslint-enable */}
          </Table>
        </div>
      )}
    />
    <PlayGround
      title="Compact"
      component={(
        <Table compact>
          <thead>
            <tr>
              <th>檔案名稱</th>
              <th>分類</th>
              <th>說明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>file.php</td>
              <td>Controller</td>
              <td>用來處理檔案相關程式。</td>
            </tr>
            <tr>
              <td>star.php</td>
              <td>Controller</td>
              <td>處理星號程式。</td>
            </tr>
            <tr>
              <td>favorite.php</td>
              <td>Model</td>
              <td>處理最愛的項目。</td>
            </tr>
            <tr>
              <td>user.php</td>
              <td>View</td>
              <td>處理使用者頁面的模板視圖。</td>
            </tr>
            <tr>
              <td>database.php</td>
              <td>Model</td>
              <td>和資料庫負責聯繫的模型。</td>
            </tr>
          </tbody>
        </Table>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <Table mini celled>
            <tbody>
              <tr>
                <td>mini</td>
                <td>迷你</td>
                <td>這是一個迷你的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table tiny celled>
            <tbody>
              <tr>
                <td>tiny</td>
                <td>微小</td>
                <td>這是一個微小的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table small celled>
            <tbody>
              <tr>
                <td>small</td>
                <td>小的</td>
                <td>這是一個小的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table medium celled>
            <tbody>
              <tr>
                <td>medium</td>
                <td>適中</td>
                <td>這是一個適中的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table large celled>
            <tbody>
              <tr>
                <td>large</td>
                <td>大的</td>
                <td>這是一個大的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table big celled>
            <tbody>
              <tr>
                <td>big</td>
                <td>大型</td>
                <td>這是一個大型的表格。</td>
              </tr>
            </tbody>
          </Table>
          <Table huge celled>
            <tbody>
              <tr>
                <td>huge</td>
                <td>巨大</td>
                <td>這是一個巨大的表格。</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default TablePage;
