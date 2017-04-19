import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Segment,
  Segments,
} from '../../../../lib';

let SegmentPage = () => (
  <DemoPageLayout title="Segment">
    <h1 className="ts dividing header">Types</h1>
    <PlayGround
      title="Segment"
      component={(
        <Segment>
          <p>烈日高照，前方的道路什麼都看不見，</p>
          <p>「很高興能和你見面。」一個細微的聲音好似那邊傳來，</p>
          <p>明明不清楚前方的事物，卻感覺自己正在邁向的是一個新世界。</p>
        </Segment>
      )}
    />
    <PlayGround
      title="Raised"
      component={(
        <Segment raised>
          <p>在最糟糕的事情發生之前，</p>
          <p>我儘可能地想找出原因，</p>
          <p>原來是 — 自己。</p>
        </Segment>
      )}
    />
    <PlayGround
      title="Semantic"
      component={(
        <div>
          <Segment primary>
            <p>主要語意。</p>
          </Segment>
          <Segment info>
            <p>提醒語意。</p>
          </Segment>
          <Segment warning>
            <p>警告語意。</p>
          </Segment>
        </div>
      )}
    />
    <PlayGround
      title="Positive and Negative"
      component={(
        <div>
          <Segment positive>
            <p>正面語意。</p>
          </Segment>
          <Segment negative>
            <p>否定語意。</p>
          </Segment>
        </div>
      )}
    />
    <PlayGround
      title="Inverted Semantic"
      component={(
        <div>
          <Segment inverted primary>
            <p>主要語意。</p>
          </Segment>
          <Segment inverted info>
            <p>提醒語意。</p>
          </Segment>
          <Segment inverted warning>
            <p>警告語意。</p>
          </Segment>
          <Segment inverted positive>
            <p>正面語意。</p>
          </Segment>
          <Segment inverted negative>
            <p>否定語意。</p>
          </Segment>
          <Segment inverted>
            <p>反色語意。</p>
          </Segment>
        </div>
      )}
    />
    <PlayGround
      title="Annoucement"
      component={(
        <div>
          <Segment>
            <p>我是一般的片段。</p>
          </Segment>
          <Segment secondary>
            <p>我是次要發音方式的片段。</p>
          </Segment>
          <Segment tertiary>
            <p>我是其次發音方式的片段。</p>
          </Segment>
        </div>
      )}
    />

    <h1 className="ts dividing header">Grouping</h1>
    <PlayGround
      title="Segment Group"
      component={(
        <div>
          <Segments>
            <Segment>任何人皆自由且平等。</Segment>
            <Segment>莫忘初衷。</Segment>
            <Segment>永遠不放棄。</Segment>
            <Segment>為全民、大眾所設計、運作並傾聽。</Segment>
          </Segments>
        </div>
      )}
    />
    <PlayGround
      title="Group and Semantic"
      component={(
        <div>
          <Segments>
            <Segment primary>任何人皆自由且平等。</Segment>
            <Segment info>莫忘初衷。</Segment>
            <Segment warning>永遠不放棄。</Segment>
            <Segment positive>為全民、大眾所設計、運作並傾聽。</Segment>
          </Segments>
        </div>
      )}
    />
    <PlayGround
      title="Different Annoucement"
      component={(
        <Segments>
          <Segment>任何人皆自由且平等。</Segment>
          <Segment secondary>莫忘初衷。</Segment>
          <Segment tertiary>永遠不放棄。</Segment>
        </Segments>
      )}
    />

    <h1 className="ts dividing header">State</h1>
    <PlayGround
      title="Disabled"
      component={(
        <Segment disabled>
          <p>那傢伙不常說話，但是從她的言行舉止中，</p>
          <p>好像有什麼是能被發現的。</p>
        </Segment>
      )}
    />
    <PlayGround
      title="Loading"
      component={(
        <Segment loading>
          <p>月月，搭拉安！。</p>
          <p>月月，搭拉安！。</p>
          <p>月月，搭拉安！。</p>
        </Segment>
      )}
    />

    <h1 className="ts dividing header">Appearance</h1>
    <PlayGround
      title="Pad"
      component={(
        <div>
          <Segment>一般片段。</Segment>
          <Segment padded>增加內距的片段。</Segment>
          <Segment very padded>非常內距的片段。</Segment>
        </div>
      )}
    />
    <PlayGround
      title="Fit"
      component={(
        <div>
          <Segment vertically fitted>這個片段沒有垂直內距。</Segment>
          <Segment fitted>這個片段沒有內距。</Segment>
          <Segment horizontally fitted>這個片段沒有水平內距。</Segment>
        </div>
      )}
    />
    <PlayGround
      title="Compact"
      component={(
        <Segment compact>
          月月，搭拉安！
        </Segment>
      )}
    />
    <PlayGround
      title="Clear Float"
      component={(
        <Segment clearing>
          <button className="ts right floated button">浮動按鈕</button>
        </Segment>
      )}
    />
    <PlayGround
      title="Fluid"
      component={(
        <Segment fluid>
          這個片段適合用來貼齊容器左右邊。
        </Segment>
      )}
    />
    <PlayGround
      title="Text Alignment"
      component={(
        <div>
          <Segment left aligned>
            這段文字是置左對齊。
          </Segment>
          <Segment center aligned>
            這段文字是置中對齊。
          </Segment>
          <Segment right aligned>
            這段文字是置右對齊。
          </Segment>
        </div>
      )}
    />
    <PlayGround
      title="Flat"
      component={(
        <Segment flatted>
          這個片段是平的。
        </Segment>
      )}
    />
    <PlayGround
      title="Borderless"
      component={(
        <Segment borderless>
          這個片段沒有框線。
        </Segment>
      )}
    />
    <PlayGround
      title="Float"
      component={(
        <div>
          <Segment left floated>
            <p>我向左浮動。</p>
          </Segment>
          <Segment right floated>
            <p>我向右浮動。</p>
          </Segment>
        </div>
      )}
    />
    <PlayGround
      title="Basic"
      component={(
        <Segment basic>
          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </Segment>
      )}
    />
  </DemoPageLayout>
);

export default SegmentPage;
