// PersonController.js
import { useState, useEffect } from 'react';
import Person from './Person';

const PersonController = () => {
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
        const response = await fetch('https://randomuser.me/api?results=1');
        const data = await response.json();
        const [person] = data.results;
        setPerson({
            first_name: person.name.first,
            last_name: person.name.last,
            email: person.email,
});
    };

    useEffect(() => {
        getPerson();
        }, []);

    return (
        <div>
        <Person person={person} />;
        <button onClick={getPerson}>Generate Random Person</button>
        </div>

        ) 
};

export default PersonController;


/*
import { useState, useEffect } from 'react';
import Person from './Person'; 

const PersonController = () => {
    const [person, setPerson] = useState(null);

    // This is the function that does all the heavy lifting, fetching the person data from the API
    const getPerson = async () => {
        const response = await fetch('https://randomuser.me/api?results=1');
        const data = await response.json();
        const [person] = data.results;
        setPerson(person);
    };

    // This runs once, when the component first mounts
    useEffect(() => {
        getPerson();
        }, []);

    return (
<div>
    <Person person={person} />;
    <button onClick={getPerson}>Generate Random Person</button>
</div>

    ) 
};

export default PersonController;
 */