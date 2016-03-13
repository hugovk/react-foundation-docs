import React from 'react';
import {
  Row,
  Column,
  Progress,
  ProgressColors,
  NativeProgress
} from 'react-foundation';

export const ProgressBarDocs = () => (
  <section className="progress-bar-docs">
    <Row>
      <Column large={12}>
        <h2>Progress Bar</h2>
        <div>
          <h3>Basics</h3>
          <Progress tabIndex="0" value={0}/>
          <Progress tabIndex="0" value={50}/>
        </div>
        <div>
          <h3>Colors</h3>
          <Progress color={ProgressColors.SECONDARY} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
          <Progress color={ProgressColors.SUCCESS} value={50}/>
          <Progress color={ProgressColors.WARNING} value={50}/>
          <Progress color={ProgressColors.ALERT} value={75}/>
        </div>
        <div>
          <h3>With Text</h3>
          <Progress meter={{ text: '25%' }} tabIndex="0" min={0} max={100} value={25} valueText="25 percent"/>
        </div>
        <div>
          <h3>Native Progress</h3>
          <NativeProgress max={100} value={75}/>
          <NativeProgress color={ProgressColors.SECONDARY} max={100} value={75}/>
          <NativeProgress color={ProgressColors.SUCCESS} max={100} value={75}/>
          <NativeProgress color={ProgressColors.WARNING} max={100} value={75}/>
          <NativeProgress color={ProgressColors.ALERT} max={100} value={75}/>
        </div>
      </Column>
    </Row>
  </section>
);

export default ProgressBarDocs;