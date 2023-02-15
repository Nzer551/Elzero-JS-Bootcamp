// Caesar Cipher Functions

function caesarcipherE(normalText) {
  let encriptedText = "";
  let asciiCode = "";
  let theRule = "";
  
  for(char of normalText) {
      if(char.charCodeAt(0) !== 32) {
          asciiCode = char.charCodeAt(0);
          theRule = asciiCode + 3;
          encriptedText += String.fromCharCode(theRule);
      } else {
          encriptedText += char;
      }
  }
  console.log(encriptedText);
}

caesarcipherE("abc d efg");

function caesarcipherD(encriptedText) {
  let decriptedText = "";
  let asciiCode = "";
  let theRule = "";
  
  for(char of encriptedText) {
      if(char.charCodeAt(0) !== 32) {
          asciiCode = char.charCodeAt(0);
          theRule = asciiCode - 3;
          decriptedText += String.fromCharCode(theRule);
      } else {
        decriptedText += char;
      }
  }
  console.log(decriptedText);
}

caesarcipherD("def g hij");
