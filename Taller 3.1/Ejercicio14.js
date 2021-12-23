let a=[],b=[],c=[]

for (let i = 0; i < 10; i++) {
    a[i]=Math.round(Math.random()*(1,100))
    b[i]=Math.round(Math.random()*(1,100))
    c[i]=a[i]+b[i]
}

console.log(a);
console.log(b);
console.log(c);
document.write(c)
