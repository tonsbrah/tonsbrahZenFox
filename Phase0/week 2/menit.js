function konversiMenit(menit) {

var resultDetik = menit % 60;
var resultMenit = menit - resultDetik;
var resultJam = resultMenit / 60;
if(resultDetik < 10){
    resultDetik = "0" + resultDetik
}
return resultJam + ":" + resultDetik;

}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00