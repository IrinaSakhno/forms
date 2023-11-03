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
        date: new Date(2001, 1, 20),
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
        newArr.push({...line, id: newArr.length+1});
        newArr.sort((a:Training, b:Training) => b.date.getTime() - a.date.getTime());
        setItems(newArr);
      }
    };

  return (
    <>
      <Form onSubmit={handleAdd} />
      <History items={items} onDelete={handleDelete} />
    </>
  );
}

export default App;
export type { Training };