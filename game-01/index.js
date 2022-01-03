const numbers = [2, 5, 8, 14, 0]
const equals = 10

const getSubset = (arrayNumbers, number) => {
  let subset = []

  for(let i = 0; i <= arrayNumbers.length; i++) {
    let result = 0;
    for(let j = 0; j <= arrayNumbers.length; j++) {
       result = arrayNumbers[i] + arrayNumbers[j]
      
      if(result === number && i !== j) {
        subset.push(arrayNumbers[i])
        subset.push(arrayNumbers[j])
        break
      }
    }
    
    if(result === number) break
  }

  return subset
}

console.log(getSubset(numbers, equals))
