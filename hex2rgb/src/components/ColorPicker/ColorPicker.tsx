import "../../App.css";
import { useState } from "react";
import Background from "../Background/Background";

const ColorPicker = () => {
  interface Form {
    hex: string;
  }
  const [form, setForm] = useState<Form>({
    hex: "",
  });

  const [backgroundColor, setBackgroundColor] = useState<string>("red");

  const [result, setResult] = useState<string>("Введите цвет в формате HEX");

  function hexToRGB(hex: string) {
    const regex = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/;
    if (!regex.test(hex)) {
        setBackgroundColor("red");
        return "Ошибка!";
    } else {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      setBackgroundColor(hex);
      return "rgb(" + r + ", " + g + ", " + b + ")";
    }
  }

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (
    evt: React.FormEvent<HTMLFormElement>
  ) => {
    evt.preventDefault();
    setResult(hexToRGB(form.hex));
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name!]: value }));
    console.log("form hex " + form.hex);
  };

  return (
    <>
      <Background color={backgroundColor} />
      <form
        className="color-picker"
        name="color-picker"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          className="hex-input"
          name="hex"
          type="text"
          id="hex"
          value={form.hex}
          required
          onChange={handleChange}
          minLength={7}
          maxLength={7}
          placeholder="#000000"
        ></input>
        <div className="result-container">
          <span className="result-text">{result}</span>
        </div>
      </form>
    </>
  );
};

export default ColorPicker;
