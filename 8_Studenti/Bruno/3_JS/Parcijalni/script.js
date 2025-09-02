const list = document.querySelector("ul");
const input = document.querySelector(".input");

async function getData() {
  list.innerHTML = "";

  const term = input.value.trim();
  if (!term) return;

  const response = await fetch(
    `https://itunes.apple.com/search?term=${encodeURIComponent(
      term
    )}&entity=musicTrack&limit=20`
  );

  //   if (!response.ok) throw new Error("Greska" + response.status);

  const data = await response.json();
  //   console.log(data.results);

  data.results.forEach((track) => {
    const li = document.createElement("li");
    li.textContent = `${track.artistName}: ${track.trackName}`;
    list.appendChild(li);
  });
}

input.addEventListener("keydown", (e) => {
  getData();
});
