import { useState } from "react";
import SeatGroups from "./Components/SeatGroup/SeatGroup";
import { cinemaData } from "./Components/Utilities/Data";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(cinemaData);

  return (
    <div className="App">
      {data.map((seatgroup, index) => {
        return (
          <SeatGroups
            key={index}
            seatgroup={seatgroup}
            setData={setData}
            data={data}
          />
        );
      })}
    </div>
  );
}
