console.log("Merhaba Uzaylı. Ben dostum...")

let dolarDun=9.20
let dolarBugun=9.30
{
    let dolarDun=9.10
}

const euroDun=11.2
// euroDun=11
// console.log(euroDun)

console.log(dolarDun)
//array leri çoğol isimlendir, array içinde array içinde array de dahil tüm formatlarda veri girişi yapabilirsin, 
//camelCasing ilk kelime küçük harf
//Pascalcasing ilk harfler büyük
//let konutKrediliri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"["a",2]]
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")

{/* <ul>
<li>Konut Kredisi</li>
<li>Emlak Konut Kredisi</li>
<li>Kamu Konut Kredisi</li>
</ul> */}

console.log(konutKredileri)

let sayi1=10
sayi1="kemal"
let student={id:1,name:"kemal"}

function save(ogrenci,puan=10) {
    console.log(ogrenci.name + " : "+ puan)
}
//save(student,100);

let showProducts=function(id,...products){
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts) Rest Parametresi verileri array olarak tutmamızı sağlar
//showProducts(10,"Elma","Armut","Ayva")
//spread
let points=[1,2,3,4,5,6,50,13,75]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")//Spread parametresi array içindeki verileri ayırmaya yarıyor

//Destructuring 
let populations=[10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number){
    console.log(small1)
}
someFunction(populations)