let vector = [10]
vector[0]=1

let j = 3, i = 1
while (j <= 30) {
    vector[i] = [j]    
    i++
    j += 3

}
document.write(`(${vector})`)
