const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const convertMarkdown = () => {
  var lines = markdownInput.value.split("\n");
  var result = "";

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    line = line
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, "<img alt=\"$1\" src=\"$2\">")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "<a href=\"$2\">$1</a>")
      .replace(/\*\*(.+?)\*\*|__(.+?)__/g, function (match, a, b){
        return "<strong>" + (a || b) + "</strong>";
      })
      .replace(/\*(.+?)\*|_(.+?)_/g, function (match, a, b){
        return "<em>" + (a || b) + "</em>";
      });

    if (/^### /.test(line)) {
      result += "<h3>" + line.replace(/^### /, "") + "</h3>";
    } else if (/^## /.test(line)) {
      result += "<h2>" + line.replace(/^## /, "") + "</h2>";
    } else if (/^# /.test(line)) {
      result += "<h1>" + line.replace(/^# /, "") + "</h1>";
    } else if (/^> /.test(line)) {
      result += "<blockquote>" + line.replace(/^> /, "") + "</blockquote>";
    } else {
      result += line;
    }
  }

  return result;
};

markdownInput.addEventListener("input", function (){
  var html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
});