import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/home";
import Lab from "./containers/lab";
import Electronics from "./containers/electronics";
import LogicGate from "./containers/logicGate";
import LogicGateSimulator from "./containers/loginGateSimulator";
import Electrical from "./containers/electrical";
import Computer from "./containers/computer";
import Diode from "./containers/diode";
import Zener from "./containers/electronics/zener";
import ForwardBias from "./containers/electronics/forwardBias";
import ReverseBias from "./containers/electronics/reverseBias";
import HalfAdder from "./containers/computer_architecture/HalfAdder";
import FullAdder from "./containers/computer_architecture/FullAdder";
import FullSubtractor from "./containers/computer_architecture/FullSubtractor";
import HalfSubstractor from "./containers/computer_architecture/HalfSubstractor";
import BjtCbOutput from "./containers/electronics/BjtCbOutput";
import BjtCbInput from "./containers/electronics/BjtCbInput";
import BjtCeOutput from "./containers/electronics/BjtCeOutput";
import BjtCeInput from "./containers/electronics/BjtCeInput";
import AdderFour from "./containers/computer_architecture/FourbitAdder";
import SubFour from "./containers/computer_architecture/SubFour";
import Encoder from "./containers/computer_architecture/Encoder";
import Decoder from "./containers/computer_architecture/Decoder";
import Multi from "./containers/computer_architecture/Multi";
import Demulti from "./containers/computer_architecture/Demulti";
import SineWave from "./containers/electronics/SineWave";
import Semester from "./containers/Semester";
import Semester1 from "./containers/Semester1";
import Semester2 from "./containers/Semester2";
import Developer from "./containers/Developer";
import Contact from "./containers/Contact";
import lab_first from "./containers/lab_first";
import Surveying from "./civil_eng/Surveying";
import Ce from "./containers/Ce";
import Course from "./containers/Course";
import PnJunction from "./containers/pnJunction";
import BJT from "./containers/bjt";
import BjtBase from "./containers/bjt-base";
import BjtEmitter from "./containers/bjt-emitter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/lab" component={Lab} />
        <Route path="/electronics" component={Electronics} />
        <Route path="/logic-gate" component={LogicGate} />
        <Route path="/logic-gate-simulator" component={LogicGateSimulator} />
        <Route path="/electrical" component={Electrical} />
        <Route path="/computer" component={Computer} />
        <Route path="/diode" component={Diode} />
        <Route path="/zener" component={Zener} />
        <Route path="/forward-bias" component={ForwardBias} />
        <Route path="/reverse-bias" component={ReverseBias} />
        <Route path="/half-adder" component={HalfAdder} />
        <Route path="/full-adder" component={FullAdder} />
        <Route path="/full-sub" component={FullSubtractor} />
        <Route path="/half-sub" component={HalfSubstractor} />
        <Route path="/bjt-cb-out" component={BjtCbOutput} />
        <Route path="/bjt-ce-out" component={BjtCeOutput} />
        <Route path="/bjt-cb-in" component={BjtCbInput} />
        <Route path="/bjt-ce-in" component={BjtCeInput} />
        <Route path="/add-four" component={AdderFour} />
        <Route path="/sub-four" component={SubFour} />
        <Route path="/encoder" component={Encoder} />
        <Route path="/decoder" component={Decoder} />
        <Route path="/multi" component={Multi} />
        <Route path="/demulti" component={Demulti} />
        <Route path="/sin" component={SineWave} />
        <Route path="/sem" component={Semester} />
        <Route path="/sem1" component={Semester1} />
        <Route path="/sem2" component={Semester2} />
        <Route path="/developers" component={Developer} />
        <Route path="/contact" component={Contact} />
        <Route path="/sem_one" component={lab_first} />
        <Route path="/ce_survey" component={Surveying} />
        <Route path="/ce" component={Ce} />
        <Route path="/course" component={Course} />
        <Route path="/pn-junction" component={PnJunction}/>
        <Route path="/bjt" component={BJT}/>
        <Route path="/bjt-base" component={BjtBase}/>
        <Route path="/bjt-emitter" component={BjtEmitter}/>I
      </BrowserRouter>
    </div>
  );
}

export default App;
