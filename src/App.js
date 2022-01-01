import "./App.css";
import Zoom from "react-reveal/Zoom";
import Font, { Text } from "react-font";
const App = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <Zoom duration={3000} top>
          <Font family="Monoton">
            <h1 className="text-white text-3xl">MONjIESH &nbsp; RAVICHANDRAN</h1>
          </Font>
        </Zoom>
      </div>
    </>
  );
};

export default App;
