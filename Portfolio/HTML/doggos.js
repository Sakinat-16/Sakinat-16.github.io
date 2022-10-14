// const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(BREEDS_URL);

// promise
//   .then(function(response) {
//     const processingPromise = response.json();
//     return processingPromise;
//   })
//   .then(function(processedResponse) {
//     console.log(BREEDS);
//   });

// console.log("this will log first");

const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(BREEDS_URL);

promise
  .then(function(response) {
    const processingPromise = response();
    return processingPromise;
  })
  .then(function(processedResponse) {
    console.log(breeds);
  });

console.log("this will log first");

const doggos = document.querySelector(".doggos");

promise
  .then(function(response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function(processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });

 

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response();
      return processingPromise;
    })
    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);}