import "../../App.css";
import HistoryItem from "../HistoryItem/HistoryItem";
import {Training} from "../../App";

interface Props {
  items: Training[],
  onDelete: (training: Training) => void,
  onEdit: (training: Training) => void,
}

const History = ({items, onDelete, onEdit}: Props) => {
  
  return (
    <>
      <div className="history-container">
        <div className="history-header">
          <div className="column-name-container">
            <span className="column-name">Дата (ДД.ММ.ГГГГ)</span>
          </div>
          <div className="column-name-container">
            <span className="column-name">Пройдено км</span>
          </div>
          <div className="column-name-container">
            <span className="column-name">Действия</span>
          </div>
        </div>
        <ul className="history">
          {items.map((item, i) => (
            <HistoryItem
              training={item}
              key={i}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default History;
