class ArrayUtils {
  chunk(arr, size) {
    if (!Array.isArray(arr) || !size) return null;
    return Array.from({length: Math.ceil(arr.length / size)}, (v, i) =>
      arr.slice(i * size, i * size + size),
    );
  }
}

module.exports = new ArrayUtils();
