import React, { useState } from "react";
import "./forward.css";
import SmallNav from "../../components/smallNav";
import bg from "../../images/experiment-bg.gif";
var ammeterReading, volmeterReading;
function ForwardBias() {
  const [aReading, setAreading] = useState(0);
  const [vReading, setVreading] = useState(0);
  const [volt, setVolt] = useState(0.1);
  function handleChange(events) {
    var r, rs, rd, id, id1, vd, vr;
    var vt = 0.026,
      n = 1,
      vdo = 0.7;
    var isc = Math.pow(10, -12);
    var diodevalue = 0.6;
    r = 100;
    rs = r;
    vr = events.target.value;
    if (vr > 15.0) {
      alert("Please keep the value between range of 1.0 to 15.0");
      vr = 0;
      ammeterReading = 0;
      volmeterReading = 0;
    }
    rd = 0.3;
    id =
      ((parseFloat(vr) - parseFloat(diodevalue)) /
        (parseInt(rs) + parseFloat(rd))) *
      Math.pow(10, 3);
    id1 = parseFloat(vr) / parseInt(rs);
    var id1_is = Math.log(id1 / isc);
    vd = n * vt * id1_is;
    if (vr < vdo) {
      ammeterReading = 0;
      volmeterReading = 0;
    } else {
      ammeterReading = id.toPrecision(3);
      volmeterReading = vd.toPrecision(3);
    }
    setVolt(vr);
    setAreading(ammeterReading);
    setVreading(volmeterReading);
  }
  return (
    <div>
      <SmallNav head={"Forward Bias P-N Junction"} link={"/pn-junction"} />
      <img src={bg} alt="bg-animation" className="lab-bg ex-bg" />
      <div className="forward">
        <div className="exp forward-div">
          <input
            onChange={handleChange}
            value={volt}
            name="voltageSupplied"
            placeholder="Voltage"
            className="f-input"
            autoFocus
          />
          <div className="f-a-reading">{aReading}</div>
          <div className="f-v-reading">{vReading}</div>
        </div>
      </div>
    </div>
  );
}
export default ForwardBias;
