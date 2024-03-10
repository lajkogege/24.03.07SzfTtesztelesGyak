import { fuggvenyem }   from "./main.js";

// hozz létre tesztelést

export function tesztesetem_fuggvenyemhez(){
    let szam=1234
    let vart=4321
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);
    
    szam = 0;
    vart = 0;
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = "00";
    vart = "00";
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = 23,4;
    vart = "hiba";
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = -1234;
    vart = -4321;
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = "12345";
    vart = "hiba";
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = Number.MAX_VALUE;
    vart = "nagyon nagy szám";
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = Number.MIN_VALUE;
    vart = "nagyon kicsi szám";
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);

    szam = Number.MAX_SAFE_INTEGER;
    vart = 1986645007;
    console.log(`szam: ${szam}, várt: ${vart}, eredmény: ${vart===fuggvenyem(szam)}`);
}
//szorgalmi hf --konkrét hibát adjon ki --másik függvény írása
//írjon olyan függvényt ami a bemenetlére kapott tetszőleges számot és szöveget karakterenként megfordít