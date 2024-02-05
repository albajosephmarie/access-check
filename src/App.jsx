// App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('button clicked')
    // Add your logic here to handle the form submission with the URL
    console.log('Submitted URL:', url);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formContainer">
        <label className="label">Url to check:</label>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
