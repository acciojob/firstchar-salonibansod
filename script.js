function firstChar(text) {
  text = text.trimStart(); 
  return text.length > 0 ? text[0] : ''; 
}

alert(firstChar('Hello World'));
