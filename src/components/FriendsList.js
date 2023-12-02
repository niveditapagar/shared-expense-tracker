import Friend from "./Friend";

// FriendsList component
export default function FriendsList({ friends, onSelection, selectedFriend }) {
  // Render a list of friends using the Friend component
  return (
    <ul>
      {/* Map through the list of friends and render Friend component for each */}
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
