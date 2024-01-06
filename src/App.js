import PersonController from './Components/PersonController';

function App() {
    return (
        <div className="App">
            <PersonController />
        </div>
    );
}

export default App;




/**  Before-Refactor  */

// import { useState, useEffect } from 'react';
//
// function App() {
//     const [person, setPerson] = useState(null);
//
//     const getPerson = async () => {
//         const response = await fetch('https://www.randomuser.me/api?results=1');
//         const data = await response.json();
//         const [person] = data.results; // setPerson(data.results[0]);.;
//         setPerson(person);
//     };
//
//     useEffect(() => {
//         getPerson();
//     }, []);
//
//     return (
//         <div className="App">
//             {person === null ? (
//                 'Loading...'
//             ) : (
//                 <ul>
//                     <li>First name: {person.name.first}</li>
//                     <li>Last name: {person.name.last}</li>
//                     <li>Email: {person.email}</li>
//                 </ul>
//             )}
//             <button onClick={getPerson}>Generate Random Person</button>
//         </div>
//     );
// }
//
// export default App;






/** axios
 *

 import { useState, useEffect } from 'react';
 import axios from 'axios';


 function App() {
 const [person, setPerson] = useState(null);

 const getPerson = async () => {
 const response = await axios.get('https://www.randomuser.me/api?results=1');
 const data = response.data.results[0];
 setPerson(data);
 }

 useEffect(() => {
 getPerson();
 }, []);

 return (
 <div className="App">
 {person && (
 <ul>
 <li>First name: {person.name.first}</li>
 <li>Last name: {person.name.last}</li>
 <li>Email: {person.email}</li>
 </ul>
 )}
 <button onClick={getPerson}>Generate Random Person</button>
 </div>
 );

 }
 export default App;
 */