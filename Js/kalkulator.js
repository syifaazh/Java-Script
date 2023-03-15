// Pertambahan
function tambah(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 + a2;

    // menampilkan notif jika data kosong
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

// Pengurangan
function kurang(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 - a2;
    
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

//Pembagian
function bagi(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 / a2;
    
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

//Perkalian
function kali(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = a1 * a2;
    
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

//Perpangkatan
function pangkat(){
    var frm = document.getElementById('kalkulator');
    var a1 = parseFloat(frm.angka.value);
    var a2 = parseFloat(frm.angka2.value);
    var total = Math.pow (a1,a2) ;
    
    if(a1 && a2){
        frm.hasil.value = total;
    }else{
        alert("Maaf angka belum terisi");
        return false;
    }
}

