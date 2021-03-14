module.exports = function toReadable(number) {
  if (number === 0) {
      return 'zero'
  };

  const hundred = Math.floor(number / 100);

  let ten = Math.floor((number - hundred * 100) / 10);
  let one = number - hundred * 100 - ten * 10;

  if (ten === 1) {
    ten = 0;
    one = number - hundred * 100;
  }

  const oneText = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenText = ['', '', 'twenty ', 'thirty ', 'forty ', 'fifty ', 'sixty ', 'seventy ', 'eighty ', 'ninety '];

  const hundredText = hundred ? oneText[hundred] + ' hundred ' : '';
  return (hundredText + tenText[ten] + oneText[one]).trim();
};
