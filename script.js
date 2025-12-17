async function translateText() {
  const text = document.getElementById("inputText").value.trim();
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;
  const output = document.getElementById("outputText");

  if (text === "") {
    alert("Please enter some text");
    return;
  }

  output.value = "Translating...";

  try {
    const response = await fetch(
      "https://translate.argosopentech.com/translate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          q: text,
          source: source,
          target: target,
          format: "text"
        })
      }
    );

    const data = await response.json();

    if (data.translatedText) {
      output.value = data.translatedText;
    } else {
      output.value = "Translation not available.";
    }
  } catch (error) {
    output.value = "Translation failed. Please try again.";
  }
}
