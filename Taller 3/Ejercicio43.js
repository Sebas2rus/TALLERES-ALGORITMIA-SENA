let a=0,b=1
let FIB= [100];

FIB[0]=0
FIB[1]=1
for (let i = 2; i < 100; i++) {
    let num=a+b;
    
    FIB[i]=num
    a=b
    b=num
}

for (let i = 0; i < FIB.length; i++) {
    document.write(`${FIB[i]}-`)
    
}