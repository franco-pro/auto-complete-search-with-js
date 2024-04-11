let availableKeys = [
  "hello mum i'm eating banana",
  "where to learn coding online",
  "how to make a website",
  "how to make a website with html and css",
  "how to make a website with html css and javascript",
  "how to make a website with html css javascript and php",
  "how to make a website with html css javascript php and mysql",
  "how to make a website with html css javascript php mysql and laravel",
  "how to make a website with html css javascript php mysql laravel and react",
  "how to make a website with html css javascript php mysql laravel react and nodejs",
  "how to make a website with html css javascript php mysql laravel react nodejs and express",
  "how to make a website with html css javascript php mysql laravel react nodejs express and mongodb",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb and graphql",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql and apollo",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql apollo and angular",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql apollo angular and vue",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql apollo angular vue and svelte",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql apollo angular vue svelte and nextjs",
  "how to make a website with html css javascript php mysql laravel react nodejs express mongodb graphql apollo angular vue svelte nextjs and nuxtjs",
];

const result_box = document.querySelector(".result_box");
const inputBox = document.querySelector("#input_box");
const search_btn = document.querySelector("#search_btn");
console.log("result :", result_box, "\ninput: ", inputBox);
inputBox.onkeyup = () => {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeys.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
  }
  display(result);
  if (!result.length) {
    return (result_box.innerHTML = "");
  }
};

function display(result) {
  const content = result.map((list) => {
    return `<li onclick = selectInput(this)>${list}</li>`;
  });
  result_box.innerHTML = `<ul>${content.join("")}</ul>`;
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  result_box.innerHTML = "";
}
console.log(search_btn);
if (navigator.onLine) {
  console.log("You are online");
  search_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
  </svg>`;
} else {
  console.log("not connected");
}

// Écouteur d'événement pour détecter les changements de statut de la connexion
window.addEventListener("online", function () {
  console.log("La connexion est de nouveau active.");
});

window.addEventListener("offline", function () {
  console.log("La connexion réseau est perdue.");
});
