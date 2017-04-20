import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Image,
  Images,
} from '../../../../lib';

let ImagePage = () => (
  <DemoPageLayout title="Image">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Basic"
      component={(
        <Image small src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />
    <PlayGround
      title="Hyperlink"
      notImplemented
    />
    <PlayGround
      title="Link"
      component={(
        <Image link small src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Hidden"
      component={(
        <Image hidden src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />
    <PlayGround
      title="Disabled"
      component={(
        <Image disabled small src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Avatar"
      component={(
        <div>
          <Image avatar src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <span>Yami Odymel</span>
        </div>
      )}
    />
    <PlayGround
      title="Bordered"
      component={(
        <Image small bordered src="https://tocas-ui.com/assets/img/e1fffb5.png" />
      )}
    />
    <PlayGround
      title="Fluid"
      component={(
        <Image fluid src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />
    <PlayGround
      title="Rounded"
      component={(
        <Image small rounded src="https://tocas-ui.com/assets/img/15d7510.png" />
      )}
    />
    <PlayGround
      title="Circular"
      component={(
        <Image small circular src="https://tocas-ui.com/assets/img/e1fffb5.png" />
      )}
    />
    <PlayGround
      title="Vertically Aligned"
      component={(
        <div>
          <Image mini top aligned src="https://tocas-ui.com/assets/img/e1fffb5.png" />垂直置頂
          <div className="ts divider"></div>
          <Image mini middle aligned src="https://tocas-ui.com/assets/img/e1fffb5.png" />垂直置中
          <div className="ts divider"></div>
          <Image mini bottom aligned src="https://tocas-ui.com/assets/img/e1fffb5.png" />垂直置障
        </div>
      )}
    />
    <PlayGround
      title="Horizontally Centered"
      component={(
        <Image small centered src="https://tocas-ui.com/assets/img/e1fffb5.png" />
      )}
    />
    <PlayGround
      title="Spaced"
      component={(
        <div>
          亞凡芽 <Image mini spaced src="https://tocas-ui.com/assets/img/e1fffb5.png" /> 是一個基於 PHP 的模板引擎， 很適合用在具有 MVC 架構的大型應用程式中，其中亞凡芽還支援了動態 CSS 名稱，你可以隨機命名類別名稱，
          或者是將類別名稱轉換成 Emoji（表情符號），也可以將 JavaScript 檔案匯集成一個檔案。 Tocas 是一個基於 CSS3 的
          <Image mini spaced src="https://tocas-ui.com/assets/img/e1fffb5.png" /> 網頁介面框架， 以行動裝置為主，同時也支援自訂顏色，還有更具有語意的類別名稱。
        </div>
      )}
    />
    <PlayGround
      title="Left or Right Float"
      component={(
        <div>
          <Image tiny left floated src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <p>
            保障任何人的著作權，其中包括二次創作，二次創作僅可在原作者未聲明否決下進行發佈和創作， 在未經原作允許下衍生任何具有原作之內容，基於衍生理念與內容為判決要點，
            原作必須基於合理使用之理念提出移除、上訴任何非符合合理使用概念的衍生內容， 合理使用的理念如下： 使用目的及性質 其著重點在於內容是否有所轉化，如衍生創作另有新意，非僅複製原作內容。
            版權作品性質
            <Image tiny right floated src="https://tocas-ui.com/assets/img/e1fffb5.png" /> 以真實、事實所闡述之作品較虛構作品來的能夠符合合理使用。 使用版權作品的多寡 引用少量的原創著作比起引用大量來要的符合合理使用，但倘若原創著作成為衍生著作之核心內容，
            即使少量的原創著作被引用，也較不可能符合合理使用之原則。 使用行為對於版權作品的市場或價值之影響 透過原創著作的內容而進行獲利並造成原創著作部分損害，較不符合合理使用之原則。
          </p>
        </div>
      )}
    />
    <PlayGround
      title="Size"
      component={(
        <div>
          <Image mini src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <Image tiny src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <Image small src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <Image medium src="https://tocas-ui.com/assets/img/e1fffb5.png" />
        </div>
      )}
    />

    <h1 className="ts dividing header">Grouping</h1>
    <PlayGround
      title="Size"
      component={(
        <Images tiny>
          <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
        </Images>
      )}
    />
    <PlayGround
      title="Related"
      component={(
        <div>
          <Images small related>
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          </Images>
          <br />
          <Images tiny link related>
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          </Images>
          <br />
          <Images tiny bordered related>
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          </Images>
          <br />
          <Images tiny rounded related>
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          </Images>
          <br />
          <Images tiny circular related>
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
            <Image src="https://tocas-ui.com/assets/img/e1fffb5.png" />
          </Images>
        </div>
      )}
    />
  </DemoPageLayout>
);

export default ImagePage;
