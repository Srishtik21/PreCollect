import "./ActionMenu.css";

export default function ActionMenu({ onEdit, onDelete }) {
  return (
    <div className="action-menu">
      <div onClick={onEdit}>Edit</div>
      <div onClick={onDelete}>Delete</div>
    </div>
  );
}
