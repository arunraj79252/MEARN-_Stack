var text="hai hello hai how";
words=text.split(" ");
console.log(words);
var dic=
{}
var flag=0;
for(let word of words)
{ 
    if(word in dic)
    {
        if(dic[word]>flag)
        {
            flag=dic[word];
            temp=word;
        }
        dic[word]+=1;
    }
    else{
        dic[word]=1;
    }
}
console.log(dic);
console.log(temp);