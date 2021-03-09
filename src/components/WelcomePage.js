import React, { useState, useContext } from 'react';
import { useLocation, useRoute } from 'wouter';
import AppContext from '../context';

const WelcomePage = () => {
  const [match] = useRoute('/');
  const [, setLocation] = useLocation();
  const {
    actions: { setSelectedSpecialty },
  } = useContext(AppContext);
  const [specialty, setSpecialty] = useState('');
  const [subSpecialty, setSubSpecialty] = useState('');

  const handleSubmit = async () => {
    await setSelectedSpecialty({
      specialty,
      subSpecialty,
    });
    setLocation('/stage-one');
  };

  return (
    match && (
      <form onSubmit={handleSubmit}>
        <>
          <label>
            <input
              type="radio"
              value="design"
              checked={specialty === 'design'}
              onChange={() => setSpecialty('design')}
            />
            Design
          </label>
          <label>
            <input
              type="radio"
              value="engineering"
              checked={specialty === 'engineering'}
              onChange={() => setSpecialty('engineering')}
            />
            Engineering
          </label>
        </>
        {specialty === 'engineering' && (
          <>
            <label>
              <input
                type="radio"
                value="frontend"
                checked={subSpecialty === 'frontend'}
                onChange={() => setSubSpecialty('frontend')}
              />
              Frontend
            </label>
            <label>
              <input
                type="radio"
                value="backendApp"
                checked={subSpecialty === 'backendApp'}
                onChange={() => setSubSpecialty('backendApp')}
              />
              Backend App
            </label>
            <label>
              <input
                type="radio"
                value="cloudInfra"
                checked={subSpecialty === 'cloudInfra'}
                onChange={() => setSubSpecialty('cloudInfra')}
              />
              Cloud Infra
            </label>
          </>
        )}
        <button type="submit">Start Assessment</button>
      </form>
    )
  );
};

export default WelcomePage;
