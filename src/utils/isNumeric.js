export const isNumeric = (input) => {
  const onlyNumbers = /^[0-9]*$/;
  return onlyNumbers.test(input);
};
