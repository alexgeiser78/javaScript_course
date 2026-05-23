function truncateString(string, number) {
  if (string.length > number)
    return string.slice(0, number) + "...";
  return string;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));