export default function TextInput({ label, ...props }) {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        <strong>{label}</strong><br />
        <input
          {...props}
          style={{
            padding: "8px",
            width: "250px",
            borderRadius: "6px",
            border: "1px solid gray"
          }}
        />
      </label>
    </div>
  );
}
