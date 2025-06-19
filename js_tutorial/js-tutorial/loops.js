for (let i = 0; i <= 5; i++) {
    console.log(i);
  }
  let a = 0;
  while (a <= 10) {
  console.log(a);
  a++;
  }
  
  let b = 0;
  while (b < 10) {
    if (b == 5) {
      b++;
      continue;
    }
    if (b == 8) {
      break;
    }
  
    console.log(b);
    b++;
  }
  