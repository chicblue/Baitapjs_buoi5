// bài tập 1 
document.getElementById('btnTinhDiem').onclick= function(){
// input
debugger;
var diemChuan = document.getElementById('diemChuan').value;
var monMot = document.getElementById('monMot').value;
var monHai= document.getElementById('monHai').value;
var monBa = document.getElementById('monBa').value;
var khuVuc = document.getElementById('khuVuc').value;
var doiTuong = document.getElementById('doiTuong').value;
// output
tongDiem=0;

// process
var area = 0;
switch(khuVuc) {
    case 'A' :{
        area = 2 ;
    }break;
    case 'B':{
        area = 1 ;
    }break;
    case 'C' :{
        area = 0.5 ; 
    }break;
    case 'X' :{
        area = 0;
    }
}
var object = 0 ;
switch (doiTuong){
    case '1' :{
        object = 2.5 ; 
    }break;
    case '2' : {
        object = 1.5 ; 
    }break;
    case '3' :{
        object = 1 ;
    }break;
    case '0' :{
        object = 0;
    }
}
diemUutien = area + object;
tongBaMon = Number(monMot)+Number(monHai)+Number(monBa);
tongDiem = diemUutien + tongBaMon;
if (tongDiem>=diemChuan &&monMot>0 && monHai>0 && monBa>0){
    document.getElementById('tongDiem').innerHTML = tongDiem;
    document.getElementById('ketQua').innerHTML = 'Trúng Tuyển';
}
else {
    document.getElementById('tongDiem').innerHTML = tongDiem;
    document.getElementById('ketQua').innerHTML = 'Không Trúng Tuyển . Do có điểm bằng 0';
}
}
// bài 2

document.getElementById('btnTinhTien').onclick= function(){
// input
var hoTen = document.getElementById('hoTen').value;
var soKW = document.getElementById('soKW').value;
// output
document.getElementById('tenKH').innerHTML = hoTen;
document.getElementById('tongTien').innerHTML = new Intl.NumberFormat().format(tinhTienDien(soKW));
}
// process
function tinhTienDien(soKW){
    var tienTra =0;
    var soKW ;
    if(soKW<=50){
        tienTra = 500 *soKW;
    }
    else if(soKW>50 && soKW<=100){
        tienTra = (soKW-50)*650 + 500*50;
    }
    else if(soKW>100 && soKW <=200)
    {
        tienTra = (soKW-100)*850 + 50*500 + 50*650;
    }
    else if(soKW>200 &&soKW<=350){
        tienTra = (soKW-200)*1100 + 100*850 + 50*500 + 50*650;
    }
    else if(soKW > 350){
        tienTra = (soKW-350)*1300 + 100*850+ 200* 1100+ 50*500 + 50*650 ;
    }
    return tienTra;
    }

// Bài 3
document.getElementById('btnTinhThue').onclick= function(){
// input
var nameCus = document.getElementById('nameCus').value;
var income = document.getElementById('income').value;
var people = document.getElementById('people').value;
// output
document.getElementById('tenKHT').innerHTML = nameCus;
document.getElementById('tongThue').innerHTML = new Intl.NumberFormat().format(tinhThue(income,people)) ;
}
// process
function tinhThue(income,people){
var moneyTax = 0;
var incomeTax = income - 4 - (people*1.6);
if(incomeTax <=60){
    moneyTax =  incomeTax *0.05;
}
else if(incomeTax>60 && incomeTax <= 120){
    moneyTax = (incomeTax - 60)*0.1 + 60*0.05 ;
}
else if(incomeTax>120 && incomeTax <= 210){
    moneyTax = (incomeTax - 120)*0.15 + 60*0.05 + 60*0.1 ;
} 
else if(incomeTax>210 && incomeTax <= 384){
    moneyTax = (incomeTax - 210)*0.2 + 60*0.05 + 60*0.1 +90*0.15; 
} 
else if(incomeTax>384 && incomeTax <= 624){
    moneyTax = (incomeTax - 384)*0.25+ 60*0.05 + 60*0.1 +90*0.15 + 174 * 0.2; 
} 
else if(incomeTax>624 && incomeTax <= 960){
    moneyTax = (incomeTax - 624)*0.3+ 60*0.05 + 60*0.1 +90*0.15 + 174 * 0.2 + 240* 0.25; 
} 
else if(incomeTax>960){
    moneyTax = (incomeTax - 960)*0.35+ 60*0.05 + 60*0.1 +90*0.15 + 174* 0.2 + 240 * 0.25 + 336 * 0.3  ; 
}
moneyTax = moneyTax *1000000;  
return moneyTax;
}

// bài 4 
function ochange(){
 var change =   document.getElementById('loaiKH').value;
 if(change =='ND'){
    document.getElementById('soKetNoi').style.display = 'none'
 }
 else{
    document.getElementById('soKetNoi').style.display = 'block'
 }
}
document.getElementById('btnTinhTienCap').onclick= function(){
    // input
    var maKH = document.getElementById('maKH').value;
    var loaiKH = document.getElementById('loaiKH').value;
    var soKetNoi = document.getElementById('soKetNoi').value;
    var kenhCC = document.getElementById('kenhCC').value;
    // output
    document.getElementById('maKhachHang').innerHTML = maKH;
    document.getElementById('tongHoaDon').innerHTML = tinhTienCap(loaiKH,soKetNoi,kenhCC);
}
  // process
    function tinhTienCap(loaiKH,soKetNoi,kenhCC){
    var tongTienCap = 0 ;
  
    var   billfee =    0;
    var serBasic = 0;
    var highChanel = 0 ;
    switch(loaiKH){
        case 'ND' :{
            billfee = 4.5;
            serBasic = 20.5;
            highChanel = 7.5*kenhCC ;
        }break;
        case 'DN' : {
            billfee = 15 ;
            highChanel = 50*kenhCC ;
            if(soKetNoi>10){
                serBasic = 75 + ((soKetNoi-10)*5);
            }
            else{
               serBasic = 75;
            }
        }break;
    }
    tongTienCap = billfee + serBasic + highChanel ;
    return tongTienCap;
}


