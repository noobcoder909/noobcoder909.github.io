function saveText() {
    var textInput = document.getElementById("text-input").value;
    localStorage.setItem("text", textInput);
}

window.onload = function() {
    var textOutput = document.getElementById("text-output");
    textOutput.innerHTML = localStorage.getItem("text");
}
