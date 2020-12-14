// Start your implementation here
function bizarreStringIncrementer(str) {
  const lastChar = str[str.length - 1];
  if (isNaN(lastChar)) {
    return str + "1";
  }

  return 2;
}

module.exports = { bizarreStringIncrementer };
