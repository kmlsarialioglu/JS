function addToCart(quantity, productName = "Elma") {//Default değer ekeleme C# ve Java da defoult değerler sona Yazılır.
    console.log("Sepete Eklendi : Ürün :" + productName + "Adet" + quantity)
}
addToCart() // Null ile karıştırma (null böyle birşey var ama burada değil Undefined böyle bir tanım yok demek)
addToCart("Yumurta", 10)//Çağrıdaki parametreler sırasıyla yerleşir
addToCart(10)

let sayHello = () => {//Arrow Function 
    console.log("Merhaba Dünyalı")
}
sayHello()

let sayHello2 = function () {
    console.log("Merhaba Dünyalı 2")
}
sayHello2(); //JS de ; kullanmak şart değil

function addToCart2(productName, quantity, unitPrice) {//bir fonsiyonda gerekmedikçe birden fazla parametre gönderme

}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {
    productName: "Elma", unitPrice: 10, quantity: 5
}

function addToCart3(product) {
    console.log("Ürün : " + product.productName,
        "Adet : " + product.quantity + "Fiyatı : " + product.unitPrice)
}
addToCart3(product1)

let product2 = {
    productName: "Elma", unitPrice: 10, quantity: 5
}
let product3 = {
    productName: "Elma", unitPrice: 10, quantity: 5
}
product2 = product3
product2.productName = "KARPUZ"//Obgeler Referans Tip olduğu için değişti
console.log(product3.productName)

let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)//Değer Tip veri olduğu için değişmedi

function addToCart4(products) {
    console.log(products)
}
let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 10, quantity: 5 },
    { productName: "Karpuz", unitPrice: 10, quantity: 5 }
]
addToCart4(products)

function add(bisey, ...numbers) {//Rest Operatorü değişkenin önüne 3 nokta koy
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total)
    console.log(bisey)
}
add(20, 30)//gönderilen ilk parametre biseye atanır 
//add(20,30,40)
//add(20,30,40,50)

let numbers = [30, 10, 500, 600, 120]
console.log(Math.max(...numbers))//3 nokta array içindeki değerleri ayrıştırmaya yarar

//React kütüphanesi giriş
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anandolu", populations: "20M" },
    { name: "Marmara", populations: "30M" },
    { name: "Karadeniz", populations: "10M" },
    [["Ankara,Konya"],
    ["İstanbul", "Bursa"],
    ["Trabzon", "Samsun"],]
]
console.log(icAnadolu, karadeniz)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
( {productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}=
    { productName: "Elma", unitPrice: 10, quantity: 5 })

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)