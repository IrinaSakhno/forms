import "../../App.css";
import { Training } from "../../App";

interface Props {
    training: Training,
    onDelete: (training: Training) => void,
    onEdit: (training: Training) => void,
}

const HistoryItem = ({training, onDelete, onEdit}: Props) => {
    const handleDelete = () => {
        return onDelete(training);
      };

      const handleEdit = () => {
        return onEdit(training);
      };

      const { date } = training;

    return (
    <li className="one-day-history">
      <p className="training-date">{`${date.getDate() < 9 ? '0'  : ''}${date.getDate()}.${date.getMonth() < 9 ? '0'  : ''}${date.getMonth()+1}.${date.getFullYear()}`}</p>
      <p className="training-result">{training.distance}</p>
      <div className="buttons-container">
        <button
          type="button"
          className="history-button button-edit link"
          onClick={handleEdit}
        >
          ✎
        </button>
        <button
          type="button"
          className="history-button button-delete link"
          onClick={handleDelete}
        >
          ✘
        </button>
      </div>
    </li>
  );
};

export default HistoryItem;
