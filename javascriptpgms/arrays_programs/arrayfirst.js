//arrays can hold datas of different data types.
var data=[10,"hello",true];
data.push(500)//500 get pushed to the end of the array.
for(let i=0;i<data.length;i++)
{
    console.log(data[i]);
}
for(let num of data)
{
    console.log(num);
}