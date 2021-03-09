import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'wouter';
import AppContext from '../context';
import { tierArray } from '../utils';

const SkillsForm = (props) => {
  const [, setLocation] = useLocation();
  const {
    selectedSpecialty,
    actions: { submitNewSkills },
  } = useContext(AppContext);
  const [skills, setSkills] = useState({ craft: [], team: [] });
  const { data, currentTier } = props;

  const craftData =
    currentTier > 1 && selectedSpecialty.specialty === 'engineering'
      ? data.craft[selectedSpecialty.specialty][selectedSpecialty.subSpecialty]
      : data.craft[selectedSpecialty.specialty];
  console.log(craftData);

  const handleCheckbox = (newSkill, type) => {
    const otherType = type === 'craft' ? 'team' : 'craft';

    if (skills[type].indexOf(newSkill) > -1) {
      const newSkills = skills[type].filter((skill) => skill !== newSkill);
      setSkills({
        [type]: [...newSkills],
        [otherType]: [...skills[otherType]],
      });
      return;
    }

    setSkills({
      [otherType]: [...skills[otherType]],
      [type]: skills[type].concat(newSkill),
    });
  };

  const handleFormSubmit = async () => {
    await submitNewSkills(skills, currentTier);
    setSkills({ craft: [], team: [] });
    setLocation(`/stage-${tierArray[currentTier + 1]}`);
  };

  return (
    <div>
      <h2>Team Skills</h2>
      {data.teamSkills.map((skill) => (
        <div key={skill}>
          <input
            type="checkbox"
            id={skill}
            name={skill}
            checked={skills.team.indexOf(skill) > -1}
            onChange={() => handleCheckbox(skill, 'team')}
          />
          <label htmlFor={skill}>{skill}</label>
        </div>
      ))}
      <h2>Craft</h2>
      {craftData.map((skill) => (
        <div key={skill}>
          <input
            type="checkbox"
            id={skill}
            name={skill}
            checked={skills.craft.indexOf(skill) > -1}
            onChange={() => handleCheckbox(skill, 'craft')}
          />
          <label htmlFor={skill}>{skill}</label>
        </div>
      ))}
      <button onClick={handleFormSubmit}>Next</button>
    </div>
  );
};

export default SkillsForm;

SkillsForm.propTypes = {
  data: PropTypes.shape({
    teamSkills: PropTypes.array,
    craft: PropTypes.shape({
      design: PropTypes.array,
      engineering: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.shape({
          frontend: PropTypes.array,
          backendApp: PropTypes.array,
          cloudInfra: PropTypes.array,
        }),
      ]),
    }),
  }),
  currentTier: PropTypes.number,
};
