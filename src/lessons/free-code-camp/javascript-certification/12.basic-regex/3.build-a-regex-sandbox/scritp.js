const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

const getFlags = () => {
  var flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
};

testButton.addEventListener("click", function (){
  var pattern = regexPattern.value;
  var text = stringToTest.innerText;
  var flags = getFlags();

  if (!pattern) return;

  var regex = new RegExp(pattern, flags);
  var matches = text.match(regex);

  if (!matches) {
    stringToTest.innerHTML = text;
    testResult.textContent = "no match";
    return;
  }

  var highlighted = text.replace(regex, function (match){
    return "<span class=\"highlight\">" + match + "</span>";
  });

  stringToTest.innerHTML = highlighted;
  testResult.textContent = matches.join(", ");
});