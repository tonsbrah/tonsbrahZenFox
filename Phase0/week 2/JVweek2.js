var nama = 'Putra';
var peran = '';

if(nama && peran === 'Ksatria'){
    console.log("Selamat datang di Dunia Proxytia, Putra");
    console.log("Halo Ksatria Putra, kamu dapat menyerang dengan senjatamu!");
}
else if(nama && peran === 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia, Putra");
    console.log("Halo Tabib Putra, kamu akan membantu temanmu yang terluka.");
}

else if(nama && peran === 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia, Putra");
    console.log("Halo Penyihir Putra, ciptakan keajaiban yang membantu kemenanganmu!");
}

else if(nama !== true || peran !== false){
    console.log("Halo Putra, Pilih peranmu untuk memulai game!");
}

else{
    console.log("Nama harus diisi!");
}




    