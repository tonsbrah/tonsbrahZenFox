//Tugas 1

function shoutOut(){
    console.log("Halo Funtion!")
}
shoutOut();

//Tugas 2

var num1 = 5;
var num2 = 6;

function calculateMultiply(num1, num2){
    return num1 * num2
}

var result = calculateMultiply(num1,num2);
console.log(result)

//Tugas 3

var name = "Putra";
var age = 24;
var address = "Jln. Sultan Iskandar Muda, Jakarata";
var hobby = "gaming";

function processSentence(name, age, address, hobby){
    return "Nama saya:" + name + " Umur saya: " + age + " Alamat saya: " + address + " Hobby saya: " + hobby
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);