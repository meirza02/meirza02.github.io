var i=0, text;
text = "HAI INEKE CANTIK SELAMAT MALAM"

function typing(){
    if (i<text.length){
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
typing()

var tulis;
tulis = "tekan tombol putih di pojok kanan atas";

setTimeout(function(){
  document.getElementById("tulis").innerHTML += tulis;
}, 3000);

var scrol;
scrol = "scroll ke bawah ineke cantik";

setTimeout(function(){
  document.getElementById("scrol").innerHTML += scrol;
}, 3000);
