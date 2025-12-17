async function translateText() {
  const text = document.getElementById("inputText").value.trim();
  const source = document.getElementById("sourceLang").value;
  const target = document.getElementById("targetLang").value;
  const output = document.getElementById("outputText");

  if (text === "") {
    alert("Please enter text");
    return;
  }

  output.value = "Translating...";

  const url = "https://libretranslate.com/translate";

  try {
    const response = await fetch(
      "https://api.allorigins.win/raw?url=" + encodeURIComponent(url),
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
    output.value = data.translatedText;
  } catch (error) {
    output.value = "Translation failed. Please try again.";
  }
}

