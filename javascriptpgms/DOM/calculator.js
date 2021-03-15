var clr = document.querySelector(cl);
function clearBox() {
    document.querySelector("#disp").value = "";
}
function dispBox(num) {

    document.querySelector("#disp").value += num;
}
function equal() {
    let data = document.querySelector("#disp").value;
    let res = eval(data);
    document.querySelector("#disp").value = res;
}
function prime() {
    let dat = document.querySelector("#disp").value;
    for (var j = 2; j <= Math.sqrt(dat); j++) {
        if (dat == 2) {
            document.querySelector("#disp").value = "prime";
        }
        if ((data % j) == 0) {
            flag = 1;
            break;
        }

    }
    if (flag == 0) {
        if (data < 2) {
            continue;
        }
        else {
            document.querySelector("#disp").value = "prime";
        }

    }

}
function bck() {
    let data=document.querySelector("#disp").value;
    let res=data.slice(0,-1);
    document.querySelector("#disp").value=res;
    
}

