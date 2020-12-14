function bizarreStringIncrementer(str) {
  const lastChar = Number(str[str.length - 1]);
  if (isNaN(lastChar)) {
    return str + "1";
  }

  if (lastChar < 9) {
    return str.slice(0, -1) + (lastChar + 1);
  }

  let minimumReplacableDigits = 1;
  for (let i = str.length - 2; i >= 0; i--) {
    const iChar = Number(str[i]);

    if (isNaN(iChar)) {
      break;
    }
    if (iChar === 0) {
      minimumReplacableDigits++;
      break;
    }
    if (iChar === 9) {
      minimumReplacableDigits++;
    }
  }

  return (
    str.slice(0, -minimumReplacableDigits) +
    (Number(str.substr(-minimumReplacableDigits)) + 1)
  );
}

module.exports = { bizarreStringIncrementer };
