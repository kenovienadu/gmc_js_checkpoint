/** ARRAY MANIPULATION FUNCTIONS */
const findMinMax = (values = [20,3,90,100,14]) => {
  const initialValue = values[0] || 0;
  const result = {
    min: initialValue,
    max: initialValue
  };

  if (!Array.isArray(values)) {
    return result;
  }

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value > result.max) result.max = value; 
    if (value < result.min) result.min = value; 
  }

  return result;
}

const sumOfArray = (values = [20,3,90,100,14]) => {
  if (!Array.isArray(values)) {
    return 0;
  };

  let sum = 0;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    sum => sum += value
  }

  return sum;
}

const filterArray = (values = [20,3,90,100,14], condition) => {
  const matches = [];

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (condition(value)) {
      matches.push(value);
    }
  }

  return matches;
}