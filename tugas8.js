function callObject(){
    var hewan = {
        jenis: 'Kucing',
        kaki: 4,
        warna: 'Putih',
        mata: 'Besar'
    }
    var tumbuhan = {
        jenis: 'Monokotil',
        akar: 'Serabut',
        bunga: 6,
        daun: 'Menyirip'
    }
    hewan.lahir = 2016;
    hewan.mata = 'Kecil';
    tumbuhan.daun = 'Sejajar';
    console.log(hewan);
    console.log(tumbuhan);
}

callObject()