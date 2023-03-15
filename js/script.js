function dataPerson(){
    let forms = document.getElementById('frm');
    let nama = forms.Nama.value;
    let pekerjaan = forms.Pekerjaan.value;
    let hobby = forms.Hobby.value;
    let data = `Input data :
    <br> Nama : ${nama}
    <br> Pekerjaan : ${pekerjaan}
    <br> Hobby : ${hobby}`;
    document.getElementById('hasil').innerHTML = data;
}