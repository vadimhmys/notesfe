import React, { useEffect, useState } from 'react';
import { getAllAuthors } from '../http/userAPI';
//import { useNavigate } from 'react-router-dom'

export default function AllAuthors() {
  const [authors, setAuthors] = useState([]);

  //const navigate = useNavigate();

  useEffect(() => {
    async function getAuthors() {
      const writers = await getAllAuthors();
      setAuthors(writers);
    }
    getAuthors();
  }, []);

  return (
    <div>
      <ul>
        {authors.map((a) => (
          <li key={a.id}>
            Author name : {a.name}
            Author email : {a.email}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
