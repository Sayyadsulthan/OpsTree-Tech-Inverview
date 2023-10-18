import CarCard from "./CarCard";

export default function ({ cars }) {
  return (
    <>
      {cars.map((data, index) => (
        <CarCard car={data} key={index} />
      ))}
    </>
  );
}

// export default CarList;
