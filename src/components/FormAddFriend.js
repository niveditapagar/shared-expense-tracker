import { useState } from "react";
import Button from "./Button";

// FormAddFriend component
export default function FormAddFriend({ onAddFriend }) {
  // State variables for friend's name and image URL
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;

    // Generate unique ID for new friend
    const id = crypto.randomUUID();
    const newFriend = { id: id, name, image: `${image}?=${id}`, balance: 0 };
    onAddFriend(newFriend);

    // Reset name and image state after adding friend
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  // Render a form for adding a new friend
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      {/* Input field for friend's name */}
      <label>👯‍♀️ Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* Input field for friend's image URL */}
      <label>🔗 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      {/* Button component to add friend */}
      <Button>Add</Button>
    </form>
  );
}
