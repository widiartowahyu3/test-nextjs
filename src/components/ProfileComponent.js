// components/ProfileComponent.js
import { useEffect, useState } from "react";
import EditProfileComponent from "./EditProfileComponent";

const ProfileComponent = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/getProfile");
        const result = await response.json();

        if (response.ok) {
          setProfile(result);
        } else {
          // Handle unsuccessful profile retrieval
          console.error("Failed to retrieve profile");
        }
      } catch (error) {
        console.error("Error during profile retrieval:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = (editedProfile) => {
    // Assuming you have an API endpoint to update the user profile
    // Implement the logic to save the edited profile to the server
    // ...

    // Update the local profile state
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <h1>My Profile</h1>
      {isEditing ? (
        <EditProfileComponent currentProfile={profile} onSave={handleSave} />
      ) : (
        <div onClick={() => setIsEditing(true)}>
          <div>
            <strong>About:</strong> {profile.about || "Not provided"}
          </div>
          <div>
            <strong>Interests:</strong> {profile.interests || "Not provided"}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
