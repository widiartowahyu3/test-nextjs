// components/EditProfileComponent.js
import { useState } from "react";

const EditProfileComponent = ({ currentProfile, onSave }) => {
  const [editedProfile, setEditedProfile] = useState({ ...currentProfile });
  const [newInterest, setNewInterest] = useState("");

  const handleSave = async () => {
    try {
      // Assuming onSave is a function passed as a prop to handle the save operation
      await onSave(editedProfile);

      // Reset the local state after successful save
      setEditedProfile({ ...currentProfile });
      setNewInterest("");
    } catch (error) {
      console.error("Error during profile update:", error);
    }
  };

  const addInterest = () => {
    if (newInterest.trim() !== "") {
      setEditedProfile((prevProfile) => ({
        ...prevProfile,
        interests: [...prevProfile.interests, newInterest.trim()],
      }));
      setNewInterest("");
    }
  };

  const deleteInterest = (index) => {
    setEditedProfile((prevProfile) => {
      const updatedInterests = [...prevProfile.interests];
      updatedInterests.splice(index, 1);
      return { ...prevProfile, interests: updatedInterests };
    });
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <label>
        Display Name:
        <input
          type="text"
          value={editedProfile.displayName || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, displayName: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Gender:
        <select
          value={editedProfile.gender || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, gender: e.target.value })
          }
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          {/* Add more gender options if needed */}
        </select>
      </label>
      <br />
      <label>
        Birthday:
        <input
          type="date"
          value={editedProfile.birthday || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, birthday: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Horoscope:
        <input
          type="text"
          value={editedProfile.horoscope || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, horoscope: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Chinese Zodiac:
        <input
          type="text"
          value={editedProfile.chineseZodiac || ""}
          onChange={(e) =>
            setEditedProfile({
              ...editedProfile,
              chineseZodiac: e.target.value,
            })
          }
        />
      </label>
      <br />
      <label>
        Height (cm):
        <input
          type="number"
          value={editedProfile.height || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, height: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Weight (kg):
        <input
          type="number"
          value={editedProfile.weight || ""}
          onChange={(e) =>
            setEditedProfile({ ...editedProfile, weight: e.target.value })
          }
        />
      </label>
      <label>
        Interests:
        <ul>
          {editedProfile.interests.map((interest, index) => (
            <li key={index}>
              {interest}
              <button type="button" onClick={() => deleteInterest(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={newInterest}
          onChange={(e) => setNewInterest(e.target.value)}
        />
        <button type="button" onClick={addInterest}>
          Add Interest
        </button>
      </label>
      <br />
      <button type="button" onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default EditProfileComponent;
