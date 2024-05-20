import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Message: ${message}`);
  };

  return (
    <div className="contact-form">
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="HOW CAN WE HELP YOU?*"
        rows="5"
      />
      <p>
        Bosch Rexroth Corporation is committed to protecting and respecting your privacy, and we’ll only use your personal
        information to administer your account and to provide information regarding Bosch Rexroth products and services, as
        well as other content that may be of interest to you. You can unsubscribe from these communications at any time. For
        more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting
        your privacy, please review our <a href="#privacy">Privacy Notice</a>.
      </p>
      <button onClick={handleSubmit}>CONTACT ME</button>
    </div>
  );
};



export default Form;
