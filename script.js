// for(let i= 0; i< 10; i++){
//     console.log("Hayir");
//     for(let j=0; j<10; j++){
//         console.log("salom");
//     }
// }
// let zina =''
// for (let i= 0; i< 10; i++){
//     zina=zina+"[x]"
//     console.log(zina);
// }
// for (let i=0; i<10; i++){
//     console.log(i);
//     for (let j= 0; j < 10; j++) {
//        console.log(j);

//     }
// }
// let cess=''
// for (let i=0; i<8; i++){
//     for (let j= 0; j < 8; j++) {
//         if (i%2==0 && j%2==1 || j%2==0 && i%2==1 ) {
//             cess+='⬛️'
//         }else{
//             cess+='⬜️'
//         }
//     }
//     console.log(cess);
//     cess = ''
// }
let name = prompt("Ismingizni kiriting");
let xoriz = +prompt("Hozirgi yilni kiriting");
let tugilgan = +prompt("Tugilgan yilingizni kiriting");
let javob = 0;
for (let i = tugilgan; i < xoriz; i++) {
  age(javob, 1);
}
function age(a, b) {
  return (javob = a + b);
}
console.log("Ismingiz " + name + " yoshingiz " + javob + " da");


