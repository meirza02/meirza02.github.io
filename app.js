flag = 1

function f1() {
    alert("Thanks Udah pilih Jawaban YA")
}

function f() {
    if (flag == 1) {
        Bn.style.top = 100
        Bn.style.left = 500
        flag = 2
    } else if (flag == 2) {
        Bn.style.top = 200
        Bn.style.left = 500
        flag = 3
    } else if (flag == 3) {
        Bn.style.top = 170
        Bn.style.left = 766
        flag = 1
    }
}

function changecolor(id){
    document.body.style.background = document.getElementById(id).innerHTML;
    const a = document.querySelector('#section h1');
    a.style.visibility = 'visible';
    const b = document.querySelector('.container1 h1');
    b.style.visibility = 'visible';
    const c = document.querySelector('.container');
    c.style.visibility = 'visible';
}