import "../scss/style.scss";

export default function Word({ mode }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-start 
      ${mode === "light" ? "light" : "dark"}`}
    >
      <div className={`ms-2 me-auto`}>
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <div className="badge rounded-pill">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            className={`btn btn-${mode === "light" ? "outline-" : ""}primary`}
          >
            <i className="bi bi-pencil-square"></i>
          </button>
          <button
            type="button"
            className={`btn btn-${mode === "light" ? "outline-" : ""}danger`}
          >
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </li>
  );
}
