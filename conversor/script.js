
const contentTextArea = document.querySelector(".content-text-area")

function convert(tipo) {
  const text = contentTextArea.value;
  
  if(tipo === "UpperCase") {
    contentTextArea.value = text.toUpperCase()
  }
  if(tipo === "LowerCase") {
    contentTextArea.value = text.toLowerCase()
  }
}
