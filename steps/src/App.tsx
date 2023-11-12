import Form from "./components/Form/Form";
import History from "./components/History/History";
import { useState } from 'react';
import "./App.css";


interface Training {
  id?: number;
  date: Date;
  distance: number;
}

function App() {

  
  const itemsList = [
      {
        id: 0,
        date: new Date(2008, 1, 20),
        distance: 10,
      },
      {
        id: 1,
        date: new Date(2006, 3, 21),
        distance: 11,
      },
      {
        id: 2,
        date: new Date(2002, 1, 10),
        distance: 12,
      },
    ];
    const [items, setItems] = useState<Training[]>(itemsList as Training[]);

    const [editingDate, setEditingDate] = useState<string>();
    const [editingDistance, setEditingDistance] = useState<number>();

    const handleDelete = (line: Training) => {
      const lineToRemove = items.findIndex((i) => {
        return line.id === i.id; 
      })
  
      const newArr = items.slice(0);
      newArr.splice(lineToRemove, 1);
      setItems(newArr);
    };

    const handleAdd = (line: Training) => {  
      const newArr = items.slice(0);

      const checkExistingDate = items.findIndex((element, index, array)=>{return element.date.getDate() === line.date.getDate()});

      // if date exists
      if (checkExistingDate !== -1) {
        newArr[checkExistingDate].distance = Number(line.distance) + Number(newArr[checkExistingDate].distance);
        newArr.sort((a:Training, b:Training) => b.date.getTime() - a.date.getTime());
        setItems(newArr);
      } else {
      // if date doesnt exist:
        newArr.push({...line, id: newArr.length+10});
        newArr.sort((a:Training, b:Training) => b.date.getTime() - a.date.getTime());
        setItems(newArr);
      }
    };

    const handleEdit = (training: Training) => {
      console.log('Edit click');
      const dateToString = `${training.date.getFullYear()}-0${training.date.getMonth()+1}-${training.date.getDate()}`
      setEditingDate(dateToString);
      setEditingDistance(training.distance);
    };

  return (
    <>
      <Form onSubmit={handleAdd} editingDate={editingDate} editingDistance={editingDistance} />
      <History items={items} onDelete={handleDelete} onEdit={handleEdit}/>
    </>
  );
}

export default App;
export type { Training };