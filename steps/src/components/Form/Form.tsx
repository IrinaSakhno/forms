import "../../App.css";
import { useEffect, useState } from "react";
import { Training } from "../../App";

interface Props {
  onSubmit: (training: Training) => void;
  editingDate?: string;
  editingDistance?: number;
}

const Form = ({ onSubmit, editingDate, editingDistance }: Props) => {
  interface Form {
    date: string;
    distance: number;
  }

  const [form, setForm] = useState<Form>({
    date: "",
    distance: 0,
  });

  useEffect(() => {
    setForm({
      date: editingDate || "",
      distance: editingDistance || 0,
    });
  }, [editingDate, editingDistance]);

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    evt: React.FormEvent<HTMLFormElement>
  ) => {
    evt.preventDefault();
    let newTraining;
    console.log('newTraining: ' + newTraining)
    if (editingDistance) {
      newTraining = {
        date: new Date(form.date),
        distance: form.distance-editingDistance,
      };
    } else {
      newTraining = {
        date: new Date(form.date),
        distance: form.distance,
      };
    }
    setForm({
      date: "",
      distance: 0,
    });
    console.log('newTraining 2: ' + JSON.stringify(newTraining))
    return onSubmit(newTraining);
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name!]: value }));
  };

  return (
    <form className="form" name="form" noValidate onSubmit={handleSubmit}>
      <div className="field-container">
        <label htmlFor="date" className="input-label">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          className="form-input"
          name="date"
          type="date"
          id="hex"
          value={form.date}
          required
          onChange={handleChange}
        ></input>
      </div>
      <div className="field-container">
        <label htmlFor="date" className="input-label">
          Пройдено км
        </label>
        <input
          className="form-input"
          name="distance"
          type="text"
          id="hex"
          value={form.distance}
          required
          onChange={handleChange}
          placeholder="10.1"
        ></input>
      </div>
      <div className="field-container">
        <button className="button link" type="submit">
          ОК
        </button>
      </div>
    </form>
  );
};

export default Form;
