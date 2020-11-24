import React, { useState } from "react";
import "./zener.css";
import SmallNav from "../../components/smallNav";
import bg from "../../images/experiment-bg.gif";
var ammeterReading, volmeterReading;

function Zener() {
  const [aReading, setAreading] = useState(0);

  const [vReading, setVreading] = useState(0);

  const [resistance, setResistance] = useState(0.1);

  var Vz, Vin, V_z, y_mA, V_Rs, I_A, volt_Rs, volt_zener;

  var rheo;

  var diodevalue = 7.5;

  function setRheoResistance(events) {
    rheo = events.target.value;

    Vz = parseFloat(diodevalue);

    Vin = (rheo * 12) / 100;

    V_z = Vin < Vz ? Vin : Vz;

    V_Rs = parseFloat(Vin) - parseFloat(V_z);

    y_mA = 1 / (190 * (1 - Math.exp(Vz / Vin)));

    I_A = Vin < Vz ? -1 * y_mA : V_Rs / 200;

    volt_Rs = I_A * 200;

    volt_zener = Vin - volt_Rs;

    volmeterReading = parseFloat(volt_zener).toFixed(3);

    ammeterReading = parseFloat(I_A).toFixed(3);

    setResistance(rheo);

    setVreading(volmeterReading);

    setAreading(ammeterReading);
  }

  V_Rs = parseFloat(Vin) - parseFloat(V_z);

  y_mA = 1 / (190 * (1 - Math.exp(Vz / Vin)));

  I_A = Vin < Vz ? -1 * y_mA : V_Rs / 200;

  volt_Rs = I_A * 200;

  volt_zener = Vin - volt_Rs;

  volmeterReading = parseFloat(volt_zener).toFixed(3);

  ammeterReading = parseFloat(I_A).toFixed(3);

  return (
    <div>
      <SmallNav head={"Zener Diode"} link={"/electronics"} />
      <img src={bg} alt="bg-animation" className="lab-bg ex-bg" />

      <div className="zenerMain">
        <div className="exp zener-div">
          <div className="a-reading">{aReading}</div>
          <input
            onChange={setRheoResistance}
            value={resistance}
            name="voltageSupplied"
            placeholder="voltage?"
            className="in-reading"
            autoFocus
          />
          <div className="v-reading">{vReading}</div>
        </div>
      </div>
    </div>
  );
}

export default Zener;
