import React, { useState } from "react";
import SmallNav from "../../components/smallNav";

function BjtCbOutput() {
  const [r_base, setR_base] = useState();
  const [r_collector, setR_collector] = useState();
  const [ampe, setAmpe] = useState();
  const [ampc, setAmpc] = useState();
  const [voltbe, setVoltbe] = useState();
  const [voltcb, setVolcb] = useState();

  var vbe, vcb, ie, ic, icToNum, vcbToNum, ieToNum, vbeToNum;
  function handleChangeR_base(e) {
    let changedR_base = e.target.value;
    setR_base(changedR_base);
  }
  function handleChangeR_collector(e) {
    let changedR_collector = e.target.value;
    setR_collector(changedR_collector);
  }
  if (r_base > 100 || r_collector > 100) {
    alert("Enter a value between 0 - 100");
    setR_base(0);
    setR_collector(0);
  }
  function run() {
    let base_res = r_base;
    vbe = base_res * 0.02;

    ie = 2 * Math.exp(parseFloat(vbe) / 0.7 - 1).toPrecision(4);
    ieToNum = parseFloat(ie).toPrecision(2);
    vbeToNum = parseFloat(vbe).toPrecision(4);
    let collector_res = r_collector;
    vcb = 0.1 * collector_res - vbe;

    ic =
      (parseFloat(ie) *
        (Math.exp(parseFloat(vcb)) - Math.exp(parseFloat(-vcb)))) /
      (Math.exp(parseFloat(vcb)) + Math.exp(parseFloat(-vcb)));
    icToNum = parseFloat(ic).toPrecision(4);
    vcbToNum = parseFloat(vcb).toPrecision(4);
    setAmpc(icToNum);
    setVolcb(vcbToNum);

    setAmpe(ieToNum);
    setVoltbe(vbeToNum);
  }
  function clear() {
    setR_base(0);
    setR_collector(0);
    setAmpe(0);
    setAmpc(0);
    setVoltbe(0);
    setVolcb(0);
  }

  return (
    <div className="bjt-cb-in">
      <SmallNav
        head={"BJT Common Base Output Characteristic"}
        link={"/bjt-base"}
      />
      <div className="bjt-cb-in-bg-img-div">
        <input
          type="text"
          onChange={handleChangeR_base}
          value={r_base}
          placeholder="Rh1"
          className="bjt-cb-1-inp"
          autoFocus
        />
        <input
          type="text"
          onChange={handleChangeR_collector}
          value={r_collector}
          className="bjt-cb-2-inp"
          placeholder="Rh2"
        />
        <input
          type="text"
          disabled={true}
          value={ampe}
          className="bjt-cb-3-out"
          placeholder="Ie"
        />
        <input
          type="text"
          disabled={true}
          value={ampc}
          placeholder="Ic"
          className="bjt-cb-4-out"
        />
        <input
          type="text"
          disabled={true}
          value={voltbe}
          placeholder="Vbe"
          className="bjt-cb-5-out"
        />
        <input
          type="text"
          disabled={true}
          value={voltcb}
          placeholder="Vcb"
          className="bjt-cb-6-out"
        />
        <button onClick={run} className="bjt-btn-run">
          <h3>Run</h3>
        </button>
        <button onClick={clear} className="bjt-btn-clear">
          <h3>Clear</h3>
        </button>
      </div>
    </div>
  );
}

export default BjtCbOutput;
