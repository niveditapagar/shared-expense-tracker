import { useState } from "react";
import Button from "./Button";

// FormSplitBill component
export default function FormSplitBill({ selectedFriend, onSplitBill }) {
  // State variables for bill, expenses, and payer
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;

    // Calculate the amount to be split
    // Positive number denotes money you are owed
    // Negative number denotes money owed by you
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  // Render a form to split a bill with selected friend
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      {/* Header displaying the selected friend's name */}
      <h2>Split a bill with {selectedFriend.name}</h2>
      {/* Input field for bill value */}
      <label>💵 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      {/* Input field for user's expense */}
      <label>🙍‍♂️ Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      {/* Display field for friend's expense */}
      <label>👯‍♀️ {selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />
      {/* Dropdown to select the payer */}
      <label>💵 Who paid the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      {/* Button to split the bill */}
      <Button>Split bill</Button>
    </form>
  );
}
