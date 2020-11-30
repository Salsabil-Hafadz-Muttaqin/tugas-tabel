alert("SELAMAT DATANG, KLIK OK UNTUK MELANJUTKAN")

function terimainput(){
    var a=document.forms['biodata']['namadepan'].value;
    var b=document.forms['biodata']['namabelakang'].value;
    var c=document.forms['biodata']['email'].value;
    var d=document.forms['biodata']['nohandphone'].value;
    var e=document.forms['biodata']['password'].value;
    var f=document.forms['biodata']['tanggal'].value;
    var g=document.forms['biodata']['jenis_kelamin'].value;

    var tabel = document.getElementById("input");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);
    var kol2 = baris.insertCell(1);
    var kol3 = baris.insertCell(2);
    var kol4 = baris.insertCell(3);
    var kol5 = baris.insertCell(4);
    var kol6 = baris.insertCell(5);
    var kol7 = baris.insertCell(6);
               
    kol1.innerHTML = a;
    kol2.innerHTML = b;
    kol3.innerHTML = c;
    kol4.innerHTML = d;
    kol5.innerHTML = e;
    kol6.innerHTML = f;
    kol7.innerHTML = g;

    alert("data berhasil di entry");
}

function hasil(){
    var a=document.forms['penjumlahan']['bilanganpertama'].value;
    var b=document.forms['penjumlahan']['bilangankedua'].value;

    a=Number(a)
    b=Number(b)

    var total = (a + b)

    var tabel = document.getElementById("hasil");
    var baris = tabel.insertRow(1);
    var kol1 = baris.insertCell(0);

    kol1.innerHTML = total;

    // document.body.style.backgroundImage="none"
    document.body.style.backgroundColor="green"
}