import React, { useState } from 'react';
import './UpdateProfile.css';


function UpdateProfile() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const EditClick = () => {
    setIsEditing(true);
  };

  const SaveClick = () => {
    setIsEditing(false);
    // Hna bb3t eldata bta3ty l.backend
  };

  return (
    <div className="profile-page">
      <h1>Update Profile</h1>
      {isEditing ? (
        <div className="edit-mode">
          <label>
            Full Name:
            <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
          </label>
          <label>
            Phone:
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <button onClick={SaveClick}>Save</button>
        </div>
      ) : (
        <div className="view-mode">
          <div>
            Full Name: {fullName}
          </div>
          <div>
            Phone: {phone}
          </div>
          <div>
            Email: {email}
          </div>
          <button onClick={EditClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default UpdateProfile;