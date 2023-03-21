export function NumberConverter(value, led) {
    const binaryString = toBinaryString(value);
    const start = (3-led) * 2; // calculate starting index of substring
    const binarySubstring = binaryString.substr(start, 2); // get two-digit substring
    const decimalValue = parseInt(binarySubstring, 2); // convert substring to decimal
    return decimalValue;
  }
  
  function toBinaryString(num) {
    return parseInt(num, 10).toString(2).padStart(8, '0');
  }