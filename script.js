let fName = document.getElementById('name');
let fmail = document.getElementById('mail');
let fphone = document.getElementById('number');
let fhome = document.getElementById('add');
let fdate = document.getElementById('date');


document.getElementById('submit').onclick = function(){
    document.getElementById('rn').innerHTML = fName.value;
    document.getElementById('re').innerHTML = fmail.value;
    document.getElementById('rr').innerHTML = fphone.value;
    document.getElementById('rh').innerHTML = fhome.value;
    document.getElementById('rd').innerHTML = fdate.value;
}