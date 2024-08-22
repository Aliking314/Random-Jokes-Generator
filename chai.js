let joke = document.getElementById("joke");
let BASED_URL = "https://official-joke-api.appspot.com/random_joke";
let btn = document.querySelector("button");

const getJokes = async () => {
      const response = await fetch(BASED_URL);
      const data = await response.json();
      console.log(data);
      const jokeText = `${data.setup} ${data.punchline}`;
      joke.innerText = jokeText;
};

btn.addEventListener("click", getJokes);