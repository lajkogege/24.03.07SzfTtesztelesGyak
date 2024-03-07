import { tesztesettek_fugvenyemhez } from "./teszt.js";
export function fuggvenyem(szam) {
  let x = 0;
  while (szam != 0) {
    let y = szam % 10; 
    x = x * 10 + y;  
    szam=Number.parseInt(szam / 10)
  
  }
  return x
}

/*irj olyan fügvényt amely a bemenétre kapott tetszőleges számot ls szöveget karakterenként megforditja és ezzel az eredménnyel tér visza*/

//console.log(fuggvenyem())
tesztesettek_fugvenyemhez();