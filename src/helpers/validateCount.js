const validateCount = (count) => {
  if (count < 0) {
    return 1;
  } else {
    return +count;
  }
};

export default validateCount;