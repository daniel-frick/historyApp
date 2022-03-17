import { render } from "react-dom";
import connectedApp from './App';
import './styles/index.scss';
import './firebase/firebase';
render(connectedApp, document.getElementById("root"));