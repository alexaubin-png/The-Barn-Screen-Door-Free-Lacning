import React, { useState, useEffect } from 'react';
// import { getUserProfile, updateUserSettings, uploadProfilePicture } from './userSettings';

const UserProfileSettings = ({ userId, token }) => {
  const [theme, setTheme] = useState('');
  const [notifications, setNotifications] = useState('');
  const [language, setLanguage] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [profilePictureUrl, setProfilePictureUrl] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile(userId, token);
        setTheme(data.settings.theme);
        setNotifications(data.settings.notifications);
        setLanguage(data.settings.language);
        setProfilePictureUrl(data.profilePicture);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, [userId, token]);

  const handleSettingsSubmit = async (e) => {
    e.preventDefault();
    const settings = { theme, notifications, language, profilePicture };

    try {
      const response = await updateUserSettings(userId, settings, token);
      console.log('Settings updated successfully:', response);
    } catch (error) {
      console.error('Error updating settings:', error);
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleProfilePictureUpload = async () => {
    const formData = new FormData();
    formData.append('image', profilePicture);

    try {
      const response = await uploadProfilePicture(formData, token);
      setProfilePictureUrl(response.imageUrl);
      console.log('Profile picture uploaded:', response);
    } catch (error) {
      console.error('Error uploading profile picture:', error);
    }
  };

  return (
    <div>
      <h2>Update Your Settings</h2>
      <form onSubmit={handleSettingsSubmit}>
        <div>
          <label>Theme:</label>
          <input type="text" value={theme} onChange={(e) => setTheme(e.target.value)} />
        </div>
        <div>
          <label>Notifications:</label>
          <input type="text" value={notifications} onChange={(e) => setNotifications(e.target.value)} />
        </div>
        <div>
          <label>Language:</label>
          <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} />
        </div>
        <button type="submit">Save Settings</button>
      </form>

      <h3>Upload Profile Picture</h3>
      <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
      <button onClick={handleProfilePictureUpload}>Upload</button>

      {profilePictureUrl && (
        <div>
          <h4>Your Profile Picture:</h4>
          <img
            src={profilePictureUrl}
            alt="Profile"
            style={{ width: '150px', height: '150px', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};

export default UserProfileSettings;
