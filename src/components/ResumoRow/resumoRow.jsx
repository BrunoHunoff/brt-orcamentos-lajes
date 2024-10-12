import "./resumoRow.css";

function ResumoRow({ rowName, content }) {
  return (
    <div className="resumo-row total">
      <span>{rowName}</span>
      <span>{content}</span>
    </div>
  );
}

export default ResumoRow;
