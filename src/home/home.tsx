import React from 'react';

import './home.scss';

const mainModel = require('../../assets/model-1.png').default;

export class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-xl font-bold underline text-center">Main Model</h1>
        <div className="flex">
          <div className="flex-auto">
            <img id="main-model" src={mainModel} />
          </div>
          <div className="flex-initial">
            <ol className="list-decimal">
              <li className="m-2">Mouth- ph of 6.7</li>
              This is where food enters and is chewed. Saliva comes from salivary glands, which acts as a buffer to acids in food, has enzymes to hydrolyzes substances like starch, and has glycoprotein to act as a lubricant so you can swallow food easier.
              <li className="m-2">esophagus- ph of 7</li>
              After food is chewed in the mouth and swallowed, it goes through the pharynx and the esophagus to travel to the stomach. To stop food from going down the trachea (windpipe), the epiglottis closes. The sphincter stops air from going down the esophagus when breathing. The esophagus peristalsis in order to bring food down. This is when the muscles of the esophagus squeeze and contract to push food down to the stomach.
              <li className="m-2">stomach- ph of 1.5-3.5</li>
              The stomach is where food is stored. It uses gastric juice to break apart cells in food and kill bacteria. Gastric juice is made of mucus, enzymes, and acid (has a ph of 2). One of the main enzymes used is called pepsin. The stomach also has folds and pits with gastric glands that produce the juice. Then, mucous cells make mucus that lubricates and protects cells from the acid. After food goes through the stomach and it&apos;s enzymes, it becomes chyme, a &quot;nutrient rich broth&quot;.
              <li className="m-2">liver- ph of 7</li>
              The liver is between heart and intestines, so it is the first to access the nutrients from food. It removes extra glucose and makes it into glycogen, which can be stored in the liver&apos;s cells. It also has the ability to convert nutrients into new substances like proteins. The liver also detoxifies alcohol and other drugs so you can urinate it. Bile is also created to help digest fats.
              <li className="m-2">pancreas- 8</li>
              The pancreas&apos; job is to create pancreatic juice, which are digestive enzymes and an alkaline solutoin with bicarbonate. One enzyme used is called lipase.
              <li className="m-2">small intestine- ph of 6-7.4</li>
              The first 25 cm of the small intestine is called the duodenum. The small intestine&apos;s job is to digest carbs, proteins, nucleic acids, and fats. Pancreatic amylase can hydrolyze carbs like starch into disaccharide maltose and monosaccharide glucose. Proteins go through enzymes from the pancreas and duodenum that make them back into amino acids. More enzymes break down nucleic acids into nucleotides, which are broken again into nitrogenous bases, sugars, and phosphates. Fats only are digested once they reach the duodenum, where they are hit with salts from bile and more enzymes to be broken down into fatty acids and glycerol. All of these are then absorbed with villi, which are long things with folds. Each villi also has many microvilli. Then, the blood with these nutrients goes to the liver. The rest move on to the large intestine.
              <li className="m-2">large intestine- ph of 5.5-7</li>
              Another name for the large intestine is the colon. It&apos;s job is to absorb water from feces. Feces is the waste from digesting food and is mostly plant fiber.
              <li className="m-2">rectum- ph of 7-8</li>
              The rectum connects the large intestine to the anus. This is where feces is stored.
              <li className="m-2">anus</li>
              This is the end of the digestive system and where feces exits.
              <li className="m-2">gallbladder- ph of 6.8-7.6</li>
              This is where bile is stored before it is used in the small intestines.
            </ol>
            <h1 className="text-xl font-bold underline m-4">5 interesting facts</h1>
            <ol className="list-decimal">
              <li>The stomach can hold almost 2 liters of food and drinks, which could last a couple hours. </li>
              <li>Every day, your mouth usually produces about a liter of saliva. </li>
              <li>The small intestine is 22-23 feet long. </li>
              <li>The large intestine is only 5 feet long. </li>
              <li>Every 3 days, enough new stomach cells form to replace the whole stomach lining. </li>
            </ol>
          </div>
        </div>
      </>
    );
  }
}
