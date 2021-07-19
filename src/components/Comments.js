import React from 'react';

import '../assets/css/Comments.css';

export default function Comments() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const json = await response.json();
      const data = json.data.map((user) => {
        const { id, first_name, last_name, avatar } = user;
        return {
          id,
          fullName: first_name + ' ' + last_name,
          avatar,
        };
      });
      setUsers(data);
    };
    fetchUsers();
  });
  return (
    <section className="section-comments">
      <h2>Clientes Contentes</h2>
      <ul>
        {users.map(({ id, fullName, avatar }) => {
          return (
            <li key={id}>
              <img className="img-user" src={avatar} alt="" />
              <p>{fullName}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
