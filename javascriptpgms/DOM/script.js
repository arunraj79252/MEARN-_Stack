var tag=document.getElementsByTagName("h2");
for(let hd of tag)
{
    hd.style.color="red";
}
var lst=document.getElementById("home");
lst.style.color="blue";
var ht=document.getElementsByClassName("lime")
for(let ls of ht)
{
ls.style.color="pink";
}


var heads=document.querySelectorAll("h1");
for(let hd of heads)
{
    hd.style.color="green";
}
var some=document.querySelector("#home");//for id same as css
some.style.color="cyan";//querySelector() can be used for tagname also,the first matching element get pushed out.