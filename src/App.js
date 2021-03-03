import React from 'react';
import './App.css';
import data from './criteria-data.json';

function App() {
    return (
        <div className="App">
            <h2>Tier One</h2>
            <h3>Team Skills</h3>
            <ul>
                {data.tierOne.teamSkills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h3>Craft</h3>
            <h4>Design</h4>
            <ul>
                {data.tierOne.craft.design.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <h4>Engineering</h4>
            <ul>
                {data.tierOne.craft.engineering.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
