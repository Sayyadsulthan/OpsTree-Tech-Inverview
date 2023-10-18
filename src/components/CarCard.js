const CarCard = ({ car }) => {
  return (
    <div style={{ padding: "1px 5px" }}>
      <ul>
        <li>name: {car.name}</li>
        <li>model: {car.model}</li>
        <li>name: {car.qty}</li>
      </ul>
    </div>
  );
};

export default CarCard;
