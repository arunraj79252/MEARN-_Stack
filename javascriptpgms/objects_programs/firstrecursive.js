var text="abac";
 var letters=text.split("");
console.log(letters);
var dic=
{}
for(let letter of letters)
{
    if(letter in dic )
    {
        console.log(letter);
        break;
    }
    else{
        dic[letter]=1;
    }
}