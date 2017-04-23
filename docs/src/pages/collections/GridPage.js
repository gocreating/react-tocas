import React from 'react';
import DemoPageLayout from '../../utils/DemoPageLayout';
import PlayGround from '../../utils/PlayGround';
import {
  Grid,
  Row,
  Column,
} from '../../../../lib';
import './GridPage.css';

let GridPage = () => (
  <DemoPageLayout title="Grid">
    <h1 className="ts dividing header">Tutorial</h1>
    <PlayGround
      title="Basic"
      component={(
        <Grid>
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
        </Grid>
      )}
    />
    <PlayGround
      title="Column"
      component={(
        <Grid>
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={2} />
          <Column wide={8} />
          <Column wide={6} />
        </Grid>
      )}
    />
    <PlayGround
      title="Row"
      component={(
        <Grid>
          <Row>
            <Column wide={3} />
            <Column wide={3} />
            <Column wide={3} />
            <Column wide={3} />
          </Row>
          <Column wide={2} />
          <Column wide={5} />
          <Column wide={9} />
          <Row>
            <Column wide={16} />
            <Column wide={16} />
            <Column wide={16} />
            <Column wide={16} />
          </Row>
        </Grid>
      )}
    />
    <PlayGround
      title="Relaxed Grid"
      component={(
        <Grid relaxed>
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
        </Grid>
      )}
    />

    <h1 className="ts dividing header">Column</h1>
    <PlayGround
      title="Automatically Newline"
      component={(
        <Grid>
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
        </Grid>
      )}
    />
    <PlayGround
      title="Content"
      component={(
        <Grid column={3}>
          <Column>
            <div className="ts segment">Moon,</div>
          </Column>
          <Column>
            <div className="ts secondary segment">dalan!</div>
          </Column>
          <Column>
            <div className="ts tertiary segment">Hello</div>
          </Column>
        </Grid>
      )}
    />
    <PlayGround
      title="Wide"
      component={(
        <Grid>
          <Column wide={1} />
          <Column wide={15} />
          <Column wide={3} />
          <Column wide={13} />
          <Column wide={6} />
          <Column wide={10} />
          <Column wide={4} />
          <Column wide={12} />
          <Column wide={16} />
        </Grid>
      )}
    />

    <h1 className="ts dividing header">Row</h1>
    <PlayGround
      title="Wide Split"
      component={(
        <Grid>
          <Row column={2}>
            <Column />
            <Column />
          </Row>
        </Grid>
      )}
    />
    <PlayGround
      title="Floated Column"
      component={(
        <Grid column={4}>
          <Row column={4}>
            <Column left floated />
            <Column right floated />
          </Row>
          <Column />
          <Column />
          <Column />
          <Column />
        </Grid>
      )}
    />

    <h1 className="ts dividing header">Grid</h1>
    <PlayGround
      title="Multiple Grid"
      component={(
        <Grid column={2}>
          <Column>
            <Grid column={4}>
              <Column />
              <Column />
              <Column />
              <Column />
            </Grid>
          </Column>
          <Column />
        </Grid>
      )}
    />
    <PlayGround
      title="Wide Split"
      component={(
        <Grid column={4}>
          <Row column={2}>
            <Column />
          </Row>
          <Column />
          <Column />
          <Column />
          <Column />
        </Grid>
      )}
    />
    <PlayGround
      title="Centered"
      component={(
        <Grid column={4} centered>
          <Column />
          <Column />
        </Grid>
      )}
    />
    <PlayGround
      title="Aligned Content"
      component={(
        <Grid column={4} right aligned>
          <Column>right-aligned text</Column>
          <Row column={2} left aligned>
            <Column>left-aligned text</Column>
            <Column right aligned>right-aligned text</Column>
          </Row>
        </Grid>
      )}
    />

    <h1 className="ts dividing header">RWD Grid</h1>
    <PlayGround
      title="Automatically Stacked"
      component={(
        <Grid stackable>
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
          <Column wide={4} />
        </Grid>
      )}
    />
    <PlayGround
      title="Reversed"
      component={(
        <Grid column={3} reversed>
          <Column>First</Column>
          <Column>Second</Column>
          <Column>Third</Column>
        </Grid>
      )}
    />
    <PlayGround
      title="Doubling"
      component={(
        <Grid>
          <Row column={8} doubling>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Row>
          <Row column={6} doubling>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
          </Row>
          <Row column={4} doubling>
            <Column />
            <Column />
            <Column />
            <Column />
          </Row>
        </Grid>
      )}
    />
    <PlayGround
      title="Manually Adjust"
      notImplemented
    />
    <PlayGround
      title="Manually Hide"
      notImplemented
    />
  </DemoPageLayout>
);

export default GridPage;
