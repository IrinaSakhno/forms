import "../../App.css";
import { Training } from "../../App";

interface Props {
    training: Training,
    onDelete: (training: Training) => void,
    onEdit: (event: React.MouseEvent<HTMLElement>) => void,
}

const HistoryItem = ({training, onDelete, onEdit}: Props) => {
    const handleDelete = () => {
        return onDelete(training);
      };

      const { date } = training;
  
    return (
    <li className="one-day-history">
      <p className="training-date">{`${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`}</p>
      <p className="training-result">{training.distance}</p>
      <div className="buttons-container">
        <button
          type="button"
          className="history-button button-edit link"
          onClick={onEdit}
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
