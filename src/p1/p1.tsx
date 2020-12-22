import React from 'react';

import './p1.scss';

const model2 = require('../../assets/model-2.png').default;


export class Part1 extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-xl font-bold underline text-center">Food enters the mouth and goes down esophagus</h1>
        <div className="flex">
          <div className="flex-1">
            <img id="main-model" src={model2} />
          </div>
          <div className="flex-auto">
            <ol className="list-decimal">
              <li className="m-2">Mouth</li>
              <li className="m-2">Esophagus</li>
              <li className="m-2">Trachea</li>
              <li className="m-2">Epiglottis</li>
              <li className="m-2">Sphincter</li>
            </ol>
          </div>
        </div>
      </>
    );
  }
}
