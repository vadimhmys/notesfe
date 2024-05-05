import React, { useState } from 'react';
import { setAuthor } from '../http/userAPI';

export default function SetAuthor() {
  const [authorName, setAuthorName] = useState('');
  const [authorEmail, setAuthorEmail] = useState('');

  const onNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const onEmailChange = (e) => {
    setAuthorEmail(e.target.value);
  };

  const onDataSubmit = (e) => {
    setAuthor(authorEmail, authorName);
    setAuthorName('');
    setAuthorEmail('');
  }
  return (
    <div>
      <form>
        <label>
          Имя автора: <input type="text" name="name" onChange={onNameChange} />
        </label>
        <br />
        <label>
          Email автора: <input type="email" name="email" onChange={onEmailChange} />
        </label>
        <br />
        <button type="submit" onClick={onDataSubmit}>Отправить</button>
      </form>
    </div>
  );
}
