import  { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCalculation, updateCalculation } from "../features/calculatorSlice";
import "./calculator.css";

const HistoryList = () => {
  const history = useSelector((state) => state.calculator.history);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleEdit = (item) => {
    setEditingId(item.id);
    setExpression(item.expression);
    setResult(item.result);
  };

  const handleUpdate = () => {
    dispatch(updateCalculation({ id: editingId, expression, result }));
    setEditingId(null);
  };

  return (
    <div className="history-box">
      <h2>History</h2>
      {history.length === 0 ? (
        <p style={{ color: "#555" }}>No history yet.</p>
      ) : (
        <ul className="history-list">
          {history.map((item) => (
            <li key={item.id} className="history-item">
              {editingId === item.id ? (
                <>
                  <input
                    type="text"
                    value={expression}
                    onChange={(e) => setExpression(e.target.value)}
                    style={{ padding: "5px", flex: "1", marginRight: "5px" }}
                  />
                  <input
                    type="text"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    style={{ padding: "5px", width: "60px", marginRight: "5px" }}
                  />
                  <button onClick={handleUpdate} className="save-btn">Save</button>
                </>
              ) : (
                <>
                  <span>{item.expression} = <b>{item.result}</b></span>
                  <div>
                    <button onClick={() => handleEdit(item)} className="edit-btn">Edit</button>
                    <button onClick={() => dispatch(deleteCalculation(item.id))} className="delete-btn">Delete</button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HistoryList;
