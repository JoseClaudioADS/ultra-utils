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

  captalize(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  snakeCase(str) {
    return this.ultraCase(str, '_');
  }
  ultraCase(str, joinSeparator) {
    if (!str) return str;
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
      )
      .map(x => x.toLowerCase())
      .join(joinSeparator);
  }
}

module.exports = new StringUtils();
