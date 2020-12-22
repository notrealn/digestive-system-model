import React from 'react';

import './p2.scss';

const model3 = require('../../assets/model-3.png').default;


export class Part2 extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-xl font-bold underline text-center">Food enters the mouth and goes down esophagus</h1>
        <div className="flex">
          <div className="flex-1">
            <img id="main-model" src={model3} />
          </div>
          <div className="flex-auto">
            <ol className="list-decimal">
              <li className="m-2">stomach</li>
              <li className="m-2">liver</li>
              <li className="m-2">pancreas</li>
              <li className="m-2">gallbladder</li>
              <li className="m-2">small intestine</li>
              <li className="m-2">large intestine</li>
              <li className="m-2">gallbladder</li>
            </ol>
          </div>
        </div>
      </>
    );
  }
}
