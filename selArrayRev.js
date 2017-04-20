function selReverse(array, length) {

  typeof array[length - 1] === 'number' ? array.push(array.splice(0, length).reverse()) : length--;

  if (length > 0) {
    selReverse(array, length);
  }

  return array = [].concat.apply([], array);
}
