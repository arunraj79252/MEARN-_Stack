isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]
isl.map(l1=>l1.team.toUpperCase()).forEach(l1 =>console.log(l1));
var highest=isl.reduce((l1,l2)=>l1>l2?l2:l1);
console.log(highest);
highest_lose=isl.reduce((l1,l2)=>l1.los>l2.los?l1:l2);
console.log(highest_lose);
isl.filter((l1)=>l1.pts>=32?l1["status"]="qualified":l1["status"]="not qualified").forEach(l1=>console.log(l1))



    
