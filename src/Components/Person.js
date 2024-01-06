const Person = ({ person }) => {
    if (!person) {
        return 'Loading...'
    }

      return (
          <ul>
              <li>First name: {person.first_name}</li>
              <li>Last name: {person.last_name}</li>
              <li>Email: {person.email}</li>
          </ul>
        );
}

export default Person;