import PropTypes from 'prop-types';
import React, { createContext, useState, useMemo } from 'react';
import { capitalize, tierArray } from './utils';

const Context = createContext();

export const AppContextProvider = ({ children }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [selectedSpecialty, setSelectedSpecialty] = useState({
    specialty: '',
    subSpecialty: '',
  });

  const [selectedSkills, setSelectedSkills] = useState({
    team: {
      tierOne: [],
      tierTwo: [],
      tierThree: [],
      tierFour: [],
      tierFive: [],
    },
    craft: {
      tierOne: [],
      tierTwo: [],
      tierThree: [],
      tierFour: [],
      tierFive: [],
    },
  });

  const submitNewSkills = (skillsObject, tier) => {
    const newSkillsState = {
      team: {
        ...selectedSkills.team,
        [`tier${capitalize(tierArray[tier])}`]: [...skillsObject.team],
      },
      craft: {
        ...selectedSkills.craft,
        [`tier${capitalize(tierArray[tier])}`]: [...skillsObject.craft],
      },
    };

    setSelectedSkills(newSkillsState);
    setCurrentScore(
      currentScore +
        skillsObject.team.concat(skillsObject.craft).length * (tier + 1)
    );
  };

  const providerValue = useMemo(
    () => ({
      currentScore,
      selectedSkills,
      selectedSpecialty,
      actions: {
        submitNewSkills,
        setSelectedSpecialty,
      },
    }),
    [
      currentScore,
      selectedSkills,
      selectedSpecialty,
      submitNewSkills,
      setSelectedSpecialty,
    ]
  );

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node,
};

export default Context;
