import { fuggvenyem } from "./main.js";

/*hozz ltre teszt esetteket a leirtak alapján*/
export function tesztesettek_fugvenyemhez(x){
let szam=1234;
let vart=4321;
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);


szam=0;
vart=0;
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart=== fugvenyem(szam)}`);

szam="00";
vart="00";
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);

szam=23,4;
vart=4,32;
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);

szam=-1234;
vart=-4321;
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);

szam=Number.MAX_SAFE_INTEGER;
vart="???";
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);

szam=Number.MIN_SAFE_INTEGER;
vart=4321;
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);

szam=1/3;
vart=0
console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fugvenyem(szam)}`);


}
