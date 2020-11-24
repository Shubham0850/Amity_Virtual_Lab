export function OR(a, b) {
  let c;
  if (a === 1 && b === 1) {
    return (c = 1);
  } else {
    return (c = a + b);
  }
}

export function NAND(a, b) {
  let c;
  if (a === 1 && b === 1) {
    return (c = 0);
  } else {
    return (c = 1);
  }
}

export function NOR(a, b) {
  let c;
  if (a === 0 && b === 0) {
    return (c = 1);
  } else {
    return (c = 0);
  }
}

export function XOR(a, b) {
  let c;
  if (a === 1 && b === 1) {
    return (c = 0);
  } else {
    return (c = a + b);
  }
}

export function XNOR(a, b) {
  let c;
  if (a === b) {
    return (c = 1);
  } else {
    return (c = 0);
  }
}

export function AND(a, b){
    let c = a * b;
    return c;
}