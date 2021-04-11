var textBox = document.querySelector("#textbox"); // input element
var translateBtnElement = document.querySelector("#translateButton"); // button element
var showTranslation = document.querySelector("#showtranslation"); // output element
var url = "https://api.funtranslations.com/translate/groot.json"; //API URL

function translateURL(text) {
  var encodedURI = encodeURI(text);
  let translatedURL = `${url}?text=${encodedURI}`;
  return translatedURL;
}

function translateFunction() {
  let text = textbox.value;
  let finalURL = translateURL(text);

  //   Sending finalURL to be translated
  fetch(finalURL)
    .then((response) => response.json())
    .then((json) => {
    textBox.placeholder= '';
    textBox.value = '';
      showTranslation.innerText = json.contents.translated;
    })
    .catch(() => alert("Server is busy! Try others!"));
}

translateBtnElement.addEventListener("click", translateFunction);
