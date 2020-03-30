class StringUtils {
  startsWith(value, search) {
    return this.startsWithIgnoreCase(value, search, false);
  }
  startsWithIgnoreCase(value, search, ignoreCase) {
    if (!value || !search) return value == search;
    if (ignoreCase) return value.toUpperCase().startsWith(search.toUpperCase());
    else return value.startsWith(search);
  }
}

module.exports = new StringUtils();
