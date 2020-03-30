class StringUtils {
  startsWith(value, search) {
    return this.startsWithIgnoreCase(value, search, false);
  }
  startsWithIgnoreCase(value, search, ignoreCase) {
    if (!value || !search) return value == search;
    if (ignoreCase) return value.toUpperCase().startsWith(search.toUpperCase());
    else return value.startsWith(search);
  }

  endsWith(value, search) {
    return this.endsWithIgnoreCase(value, search, false);
  }
  endsWithIgnoreCase(value, search, ignoreCase) {
    if (!value || !search) return value == search;
    if (ignoreCase) return value.toUpperCase().endsWith(search.toUpperCase());
    else return value.endsWith(search);
  }

  reverse(str) {
    if (!str) return str;
    return str.split('').reverse().join('');
  }
}

module.exports = new StringUtils();
