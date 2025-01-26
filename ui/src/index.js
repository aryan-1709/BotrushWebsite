import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { MainWindow } from "./components/MainWindow";
import { ThreeDCardDemo } from "./components/Events/ThreeDCardDemo";
import { Events } from "./components/Events/Events";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <MainWindow/>
        <Events/>
        {/* <ThreeDCardDemo/> */}
    </div>
    
);
