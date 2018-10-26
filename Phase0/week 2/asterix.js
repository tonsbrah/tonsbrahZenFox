//menyusun lima baris bintang

for(var i = 0; i < 1; i++){ 
    for(var j= 0; j < 5; j++)
    console.log('*')
}

//Menyusun Barisan Bintang Dengan Nested Looping

for(var i = 0; i < 1; i++){ 
    for(var j= 0; j < 5; j++){
        console.log("*****")
    }  
}


// Menyusun Barisan Tangga Bintang Dengan Nested Looping

for(var i = 1; i < 6; i++){
    var h= ""; 
    for(var j = 1; j <= i; j++){
       h = h+"*";
    }
    console.log(h);
    }
   


