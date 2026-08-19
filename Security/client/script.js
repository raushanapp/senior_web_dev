const userInputInHTML = (input) => {
  const p = document.getElementById("pleaseNo");

  // Bad
  // p.innerHTML= input

  //  Better

  var textnode = document.createTextNode(input);
  p.appendChild(textnode);
};

const sendToServer = () => {
  const input = document.querySelector("#userinput").value;
  userInputInHTML(input);
  console.log(input, "===>>>");

  fetch("http://localhost:3000/secret", {
    method: "POST",
    body: JSON.stringify({ userInput: input }),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
};
