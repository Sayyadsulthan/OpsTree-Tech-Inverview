import { useRef, useState } from "react";
import CarList from "./components/CarList";
import "./styles.css";

export default function App() {
  const [cars, setCars] = useState([]);
  const nameRef = useRef();
  const modelRef = useRef();
  const qtyRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(qtyRef.current.value)
    setCars([
      ...cars,
      {
        name: nameRef.current.value,
        model: modelRef.current.value,
        qty: qtyRef.current.value
      }
    ]);

    nameRef.current.value = "";
    modelRef.current.value = "";
    qtyRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Enter the car Name" />
        <br />
        <input ref={modelRef} type="text" placeholder="Enter the car Model" />
        <br />
        <input
          ref={qtyRef}
          type="number"
          placeholder="Enter the car quantity"
        />
        <br />
        <button>Create car </button>
      </form>
      <CarList cars={cars} />
    </>
  );
}
