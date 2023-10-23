export const parsePrice = (price: number): string => {
  const priceString = price.toString();
  const priceLength = priceString.length;
  const priceArray = priceString.split('');
  const priceArrayLength = priceArray.length;
  let priceStringParsed = '';

  if (priceLength > 3) {
    for (let i = 0; i < priceArrayLength; i++) {
      if ((priceArrayLength - i) % 3 === 0 && i !== 0) {
        priceStringParsed += ',';
      }
      priceStringParsed += priceArray[i];
    }
  } else {
    priceStringParsed = priceString;
  }

  return priceStringParsed;
};
