const books = {
  fiction: ["1984", "The Great Gatsby", "To Kill a Mockingbird"],
  science: ["A Brief History of Time", "Sapiens", "The Selfish Gene"],
  fantasy: ["Harry Potter", "The Hobbit", "Percy Jackson"],
  history: ["The Diary of Anne Frank", "Guns, Germs, and Steel"]
};

function recommendBooks() {
  const input = document.getElementById("genreInput").value.toLowerCase();
  const outputList = document.getElementById("output");

  outputList.innerHTML = ""; // Clear old results

  const recommendations = books[input];

  if (recommendations) {
    recommendations.forEach(book => {
      const li = document.createElement("li");
      li.textContent = book;
      outputList.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "No recommendations found for this genre.";
    outputList.appendChild(li);
  }
}
