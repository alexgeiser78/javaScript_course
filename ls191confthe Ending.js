function confirmEnding(str, strAgainst){
  return str.slice(str.length - strAgainst.length) === strAgainst;
} 