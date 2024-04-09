
const input = prompt(" Enter the maximum number:");
console.log(input);

const divisor_1 = prompt(" Enter bish, the first divisor:");
console.log(input);

const divisor_2= prompt(" Enter bosh, the second divisor:");
console.log(input);

for (let i=1; i<=input; i++)
{
if ((i % divisor_1== 0) && (i % divisor_2 == 0)){
   console.log("Bish-Bosh");
}

else if(i % divisor_1 == 0){
   console.log("Bish");
}

else if (i % divisor_2 == 0){
   console.log("Bosh");
}

else console.log(i);
}