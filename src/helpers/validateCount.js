const validateCount = (count) => {
  if (isNaN(+count)) {
    return '';
  } else if (count < 0) {
    return 1;
  } else {
    return +count;
  }
};

export default validateCount;