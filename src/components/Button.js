// Button component
export default function Button({ children, onClick }) {
  // Render a button element with provided children as text and onClick event handler
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
