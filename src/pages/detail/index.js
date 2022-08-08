import { useParams as getParams } from "react-router-dom";
import LecturerCard from "./LecturerCard";

const index = (props) => {
  let { scheduleId } = getParams();

  return (
    <LecturerCard></LecturerCard>
  );
}

const Detail = index;

export default Detail;