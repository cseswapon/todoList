import style from "./Home.module.scss";
import SingleDiv from "../../Components/SingleDiv/SingleDiv";

const Home = () => {
  return (
    <div className={`container-fluid my-2 ${style.vertical}`}>
      <SingleDiv style={style} title="Incomplete" />
      <SingleDiv style={style} title="Todo" />
      <SingleDiv style={style} title="Doing" />
      <SingleDiv style={style} title="Under Review" />
      <SingleDiv style={style} title="Complete" />
      <SingleDiv style={style} title="Overed" />
    </div>
  );
};

export default Home;
