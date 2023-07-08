const API_KEY = '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';
const API_URL =
  "https://api.openai.com/v1/engines/text-davinci-003/completions";

let chatbox = document.getElementById("chat-box");
let prompt = document.getElementById("chat-input").value;

async function getCompletion(prompt) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 1000,
      temperature: 0,
    }),
  });
  const data = await response.json();
  result = data.choices[0].text.trim();
  loadData(result);
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  const promptInput = document.getElementById("chat-input");
  const prompt = promptInput.value.trim();

  if (prompt === "") {
    alert("Enter Some Text!");
  } else {
    // Append user's message to chatbox
    chatbox.innerHTML += "<p><strong>You:</strong> " + prompt + "</p>";
  }

  getCompletion(prompt);
});

function loadData(content) {
  chatbox.innerHTML += "<p><strong>Bot:</strong> " + content + "</p>";
}
