var nama = 'Putra';
var peran = 'Tabib';

if(nama && peran === 'Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, Putra");
    console.log("Halo Ksatria Putra, kamu dapat menyerang dengan senjatamu!");
}
else if(nama && peran === 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia, Danu");
    console.log("Halo Tabib Putra, kamu akan membantu temanmu yang terluka.");
}

else if(nama && peran === 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia, Zero");
    console.log("Halo Penyihir Putra, ciptakan keajaiban yang membantu kemenanganmu!");
}

else if(nama && peran === false){
    console.log("Halo Mikael, Pilih peranmu untuk memulai game!");
}

else{
    console.log("Nama harus diisi!");
}




    