import SeatRows from "../SeatRows/SeatRow";
import "./SeatGroup.css";

const SeatGroups = ({ key, seatgroup, setData, data }) => {
  //   console.log(seatgroup);
  return (
    <div className="seatGroup_container">
      <div className="seatGroup_heading_div">
        <h2 aria-label="seat_category">
          {seatgroup?.seatGroupLabel} RS{seatgroup?.price}
        </h2>
      </div>
      <div className="seatRows_div">
        {seatgroup?.seatRows && (
          <SeatRows
            category={seatgroup?.seatGroupLabel}
            seatRows={seatgroup.seatRows}
            setData={setData}
            data={data}
          />
        )}
      </div>
    </div>
  );
};

export default SeatGroups;
