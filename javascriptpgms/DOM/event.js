var ck=document.querySelector("#clk");
ck.addEventListener("click",()=>{
ck.style.color="red";
ck.textContent="clicked";//to change content
});
var dck=document.querySelector("#dblclk");
dck.addEventListener("dblclick",()=>{

dck.style.color="green";
dck.textContent="doubleclicked";
});

var mo=document.querySelector("#msovr");
mo.addEventListener("mouseover",()=>{

mo.style.color="yellow";
mo.textContent="mouse over me";
});
mo.addEventListener("mouseout",()=>{

    mo.style.color="black";
    mo.textContent="mouse over";
    });