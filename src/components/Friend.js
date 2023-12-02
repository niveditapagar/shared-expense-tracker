import Button from "./Button";

// Friend component
export default function Friend({ friend, onSelection, selectedFriend }) {
  // Check if the friend is selected
  const isSelected = selectedFriend?.id === friend.id;

  // Render friend details and selection button
  return (
    <li className={isSelected ? "selected" : ""}>
      {/* Display friend's image and name */}
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {/* Display balance information */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}€
        </p>
      )}

      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      {/* Button to select/close friend */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
