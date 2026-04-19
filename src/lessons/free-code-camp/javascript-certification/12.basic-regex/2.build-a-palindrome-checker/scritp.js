const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = (str) => {
  var cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  var reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

checkBtn.addEventListener("click", function (){
  var value = textInput.value;

  if (value === "") {
    alert("Please input a value");
    return;
  }

  if (isPalindrome(value)) {
    result.textContent = value + " is a palindrome";
  } else {
    result.textContent = value + " is not a palindrome";
  }
});