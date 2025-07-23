import Seats from "../Seats/Seats";

const SeatRows = ({ seatRows, setData, data, category }) => {
  //   console.log(seatRows);
  return (
    <div>
      {seatRows?.map((seats, index) => {
        return (
          <Seats
            setData={setData}
            data={data}
            category={category}
            seatOrder={seats?.seatRowLabel}
            seats={seats.seats}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SeatRows;
