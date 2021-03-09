import React from 'react';
import { useRoute } from 'wouter';
import { capitalize, tierArray } from '../utils';
import data from '../criteria-data.json';
import SkillsForm from './SkillsForm';

const Stage = () => {
  const [match, params] = useRoute('/stage-:id');

  const currentTier = match && tierArray.indexOf(params.id);
  const tierData = match && data[`tier${capitalize(params.id)}`];

  return (
    match && (
      <div>
        <h2>Stage {capitalize(params.id)}</h2>
        <SkillsForm data={tierData} currentTier={currentTier} />
      </div>
    )
  );
};

export default Stage;
