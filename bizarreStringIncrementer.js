function bizarreStringIncrementer(str) {
  const lastChar = Number(str[str.length - 1]);
  if (isNaN(lastChar)) {
    return str + "1";
  }

  let minimumReplaceableDigits = 1;
  for (let i = str.length - 2; i >= 0; i--) {
    const iChar = Number(str[i]);

    if (isNaN(iChar)) {
      break;
    }
    if (iChar === 0) {
      minimumReplaceableDigits++;
      break;
    }
    if (iChar === 9) {
      minimumReplaceableDigits++;
    }
  }

  return (
    str.slice(0, -minimumReplaceableDigits) +
    (Number(str.substr(-minimumReplaceableDigits)) + 1)
  );
}

module.exports = { bizarreStringIncrementer };
