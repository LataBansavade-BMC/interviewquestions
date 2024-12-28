function countChar(str){
    str  = str.replace(/\s+/g, '').toLowerCase();
  
    const countMap ={}
  
    for(let char of str){
      countMap[char] = (countMap[char] || 0) + 1;
  
    }
  
    const result = []
  
    for (let char of str){
      if(!result.includes(char)){
          result.push(char)
          console.log(`${char.toUpperCase()}-${countMap[char]}`);
          
      }
    }
  
  }
  countChar("Chinmay Kulkarni")