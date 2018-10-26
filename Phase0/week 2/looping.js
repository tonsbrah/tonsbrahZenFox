//Melakukan Looping Menggunakan While

var angka = 2
var angka2 = 20


console.log("Looping pertama");
while(angka <= 20) {
console.log(angka + " - I love coding");
angka++
}

while(angka2 > 0) {
console.log(angka2 + " - I want to be a fullstack programmer")
angka2-= 2
}


//Looping FOR
console.log("LOOPING PERTAMA");

for(var i = 2; i <= 20; i+=2){
    console.log(i + " - I love coding");
}

 console.log('LOOPING KEDUA')

for(var i = 20; i>0; i-=2){
     console.log(i + " - I will become fullstack developer")
}
 //Anka Ganjil dan Genap

 console.log("Ganjil dan Genap");

 for(i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        console.log("genap");
    }
    else {
        console.log("ganjil");
    }
}

for(i = 1; i<= 100; i+=2) {
    if(i % 3 == 0) {
        console.log("3 kelipatan 3");
    }
    else if(i % 5){
        console.log("6 kelipatan 6");
    }
    else if(i % 9){
        console.log("10 kelipatan 10")
    }
}