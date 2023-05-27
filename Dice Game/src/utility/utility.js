const d6 = () => {
   return Math.floor(Math.random() * 6) + 1;
}

const getRolls = (n) => {
   return Array.from({ length: n }, () => d6());
}

const sum = (nums) => {
   return nums.reduce((prev, cur) => prev + cur, 0)
}


export { d6, getRolls, sum }