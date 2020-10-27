let vardas = "laura";
let pavarde="sadinauskaite";
let amzius= 120;
let alyginimas= 1200;
console.log("Mano vardas" +vardas);
console.log("labas");
console.log("as svajoju gyventi" +amzius)

let nettoAlga;
let bruttoAlga=1200;
let gpm=0.2;
let sd=0.0698;
let psd=0.1252;

nettoAlga=bruttoAlga-(bruttoAlga*gpm)-(bruttoAlga*sd)-(bruttoAlga*psd);
console.log(nettoAlga);


console.log(typeof(sd));
console.log (isNaN(vardas));