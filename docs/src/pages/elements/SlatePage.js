import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Slate,
} from '../../../../lib';

let SlatePage = () => (
  <DemoPageLayout title="Slate">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Slate"
      component={(
        <Slate>
          這是一塊普通的板岩，看起來十分無聊
        </Slate>
      )}
    />
    <PlayGround
      title="Basic"
      component={(
        <Slate basic>
          這是僅有基本結構的板岩。
        </Slate>
      )}
    />
    <PlayGround
      title="Heading Slate"
      component={(
        <Slate heading>
          <span className="header">使用者設定</span>
          <span className="description">你可以在這裡變更帳號、密碼與個人資訊。</span>
        </Slate>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Disabled"
      component={(
        <Slate disabled>
          別看這裡，我已經不重要了。
        </Slate>
      )}
    />

    <h1 className="ts dividing header">Content</h1>
    <PlayGround
      title="Header"
      component={(
        <Slate>
          <span className="header">使用者設定</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Description"
      component={(
        <Slate>
          <span className="header">Tryment 計畫</span>
          <span className="description">模擬就學制度，協助在年者再次就職支援計劃。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Background Image"
      component={(
        <Slate>
          <div className="image">
            <img src="https://tocas-ui.com/assets/img/af851d6.png" alt="" />
          </div>
          <span className="header">Tryment 計畫</span>
          <span className="description">模擬就學制度，協助在年者再次就職支援計劃。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Icon"
      component={(
        <Slate>
          <i className="setting icon" />
          <span className="header">偏好設定</span>
          <span className="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Symbol"
      component={(
        <Slate basic padded dashed>
          <i className="upload symbol icon" />
          <span className="header">上傳圖片或影音</span>
          <span className="description">將圖片拖拉至此處進行上傳。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Faded Icon"
      component={(
        <Slate>
          <i className="setting faded icon" />
          <span className="header">偏好設定</span>
          <span className="description">你可以在這裡改變你想改變的，但你還是沒女朋友。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Icon Group"
      component={(
        <Slate>
          <div className="icons">
            <i className="file audio outline icon" />
            <i className="file text outline icon" />
            <i className="file word outline icon" />
          </div>
          <span className="header">行動辦公室</span>
          <span className="description">MeowWork 讓你到處都能夠辦公。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Action"
      component={(
        <Slate padded>
          <span className="header">尚無文件</span>
          <span className="description">你目前沒有任何文件，按下下方按鈕建立新文件。</span>
          <div className="action">
            <button className="ts primary button">現在開始</button>
          </div>
        </Slate>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Pad"
      component={(
        <div>
          <Slate heading padded>
            <span className="header">增加內距</span>
            <span className="description">這可以讓你的聚焦看板看起來不那麼壅擠。</span>
          </Slate>
          <br />
          <Slate heading very padded>
            <span className="header">非常內距</span>
            <span className="description">可以，這很內距。</span>
          </Slate>
          <br />
          <Slate heading extra padded>
            <span className="header">超級內距</span>
            <span className="description">如果你還不滿足的話還有這樣增加內距地方式。</span>
          </Slate>
        </div>
      )}
    />
    <PlayGround
      title="Directional Pad"
      component={(
        <div>
          <Slate heading vertically padded>
            <span className="header">垂直內距</span>
            <span className="description">僅增加垂直內距，水平內距維持預設。</span>
          </Slate>
          <br />
          <Slate heading horizontally very padded>
            <span className="header">水平非常內距</span>
            <span className="description">這會增加水平的內距，但是垂直內距保持預設。</span>
          </Slate>
        </div>
      )}
    />
    <PlayGround
      title="Fit"
      component={(
        <div>
          <Slate heading fitted>
            <span className="header">縮減全部</span>
            <span className="description">這將使的你的板岩完全沒有內距。</span>
          </Slate>
          <br />
          <Slate heading horizontally fitted>
            <span className="header">水平縮減</span>
            <span className="description">板岩的左右內距將會消失。</span>
          </Slate>
          <br />
          <Slate heading vertically fitted>
            <span className="header">垂直縮減</span>
            <span className="description">這樣做的話上下內距將會消失。</span>
          </Slate>
        </div>
      )}
    />
    <PlayGround
      title="Borderless"
      component={(
        <Slate basic borderless>
          <span className="header">無框線板岩</span>
          <span className="description">這個板岩沒有框線。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Text Alignment"
      component={(
        <div>
          <Slate right aligned>
            <span className="header">靠右置齊</span>
            <span className="description">這個看板的文字靠右。</span>
          </Slate>
          <br />
          <Slate left aligned>
            <span className="header">靠左置齊</span>
            <span className="description">這個看板的文字靠左。</span>
          </Slate>
          <br />
          <Slate center aligned>
            <span className="header">置中對齊</span>
            <span className="description">這個看板的文字置中。</span>
          </Slate>
        </div>
      )}
    />
    <PlayGround
      title="Fluid"
      component={(
        <Slate fluid>
          <span className="header">流動板岩</span>
          <span className="description">這個板岩沒有圓角，適合貼齊左右邊。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Inset"
      component={(
        <Slate insetted>
          <span className="header">嵌入板岩</span>
          <span className="description">仔細看，這個板岩有內部陰影。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Dashed"
      component={(
        <Slate basic dashed>
          <i className="upload icon" />
          <span className="header">上傳圖片或影音</span>
          <span className="description">將圖片拖拉至此處進行上傳。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Clickable"
      component={(
        <div>
          <Slate clickable>
            <i className="mouse pointer icon"></i>
            <span className="header">點此看看</span>
            <span className="description">點擊此處會有相關的回饋效果。</span>
          </Slate>
          <br />
          <Slate clickable basic dashed>
            <i className="mouse pointer icon"></i>
            <span className="header">點此看看</span>
            <span className="description">點擊此處會有相關的回饋效果。</span>
          </Slate>
        </div>
      )}
    />
    <PlayGround
      title="Compact"
      component={(
        <Slate compact>
          <i className="text width icon" />
          <span className="header">文字決定寬度</span>
          <span className="description">板岩內的文字越長，板岩的寬度就越寬。</span>
        </Slate>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <Slate mini heading>
            <span className="header">迷你</span>
            <span className="description">這是一個迷你板岩。</span>
          </Slate>
          <br />
          <Slate tiny heading>
            <span className="header">微小</span>
            <span className="description">這是一個微小板岩。</span>
          </Slate>
          <br />
          <Slate small heading>
            <span className="header">小的</span>
            <span className="description">這是一個小的板岩。</span>
          </Slate>
          <br />
          <Slate heading>
            <span className="header">適中</span>
            <span className="description">這是一個適中板岩。</span>
          </Slate>
          <br />
          <Slate large heading>
            <span className="header">大的</span>
            <span className="description">這是一個大的板岩。</span>
          </Slate>
          <br />
          <Slate big heading>
            <span className="header">較大</span>
            <span className="description">這是一個較大板岩。</span>
          </Slate>
          <br />
          <Slate huge heading>
            <span className="header">巨大</span>
            <span className="description">這是一個巨大板岩。</span>
          </Slate>
          <br />
          <Slate massive heading>
            <span className="header">重量級</span>
            <span className="description">這是一個重量級板岩。</span>
          </Slate>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default SlatePage;
