import "./Seats.css";
const Seats = ({ seats, seatOrder, setData, data, category }) => {
  //   console.log(seats);

  const handleBookingSeat = (e, clickedSeat) => {
    const splitId = clickedSeat.id.split("");
    let copyData = [...data];

    let updatedData = copyData.map((group) => {
      if (group.seatGroupLabel === category) {
        return {
          ...group,
          seatRows: group.seatRows.map((row) => {
            if (row.seatRowLabel === splitId[0]) {
              return {
                ...row,
                seats: row.seats.map((seat, seatIndex) => {
                  if (seat.id === clickedSeat.id) {
                    // Check adjacent seats
                    const leftSeat = row.seats[seatIndex - 1];
                    const rightSeat = row.seats[seatIndex + 1];

                    if (
                      (leftSeat && leftSeat.type === "booked") ||
                      (rightSeat && rightSeat.type === "booked")
                    ) {
                      alert(
                        "You cannot book a seat next to an already booked seat."
                      );
                      return seat; // Don't change anything
                    }

                    return { ...seat, type: "booked" }; // Book the seat
                  }
                  return seat;
                }),
              };
            }
            return row;
          }),
        };
      }
      return group;
    });

    setData(updatedData);
  };

  return (
    <div className="seats_div">
      <h2 aria-label="Row Order">{seatOrder}</h2>
      {seats?.map((seat, indx) => {
        return seat.isSeat ? (
          <div
            onClick={(e) => handleBookingSeat(e, seat)}
            key={indx}
            id={seat.id}
            className={` individual_Seats ${
              seat.type === "notbooked" ? "notBooked" : "booked"
            }`}
          >
            {seat.seatNumber}
          </div>
        ) : (
          <div style={{ width: "100px", height: "100px" }}></div>
        );
      })}
    </div>
  );
};

export default Seats;
