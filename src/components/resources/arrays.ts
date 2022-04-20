


// Removes backticks and parenthesis from each string in an array
// Should alter to make more flexible
export const removeLetters = (stringArray:Array<string>) => {
  return stringArray.map((str: string) => {
    let arr = []
      let temp, temp2, temp3;
      temp = str.replace(/`/g, '')
      temp2 = temp.replace(/\(/g, '')
      temp3 = temp2.replace(/\)/g, '')
      arr.push(temp3)
          
      return temp3
  })
}