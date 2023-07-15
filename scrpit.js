document.querySelector("#getButton").addEventListener("click", apiRequest);

async function apiRequest() {
  const dimSum = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://simple-dim-sum-api-579873a29a87.herokuapp.com/api/${dimSum}`
    );
    const data = await response.json();
    console.log(data);
    document.getElementById("hanyuPinying").innerText = data.hanyuPinyin;
    document.getElementById("simplifiedName").innerText = data.simplifiedName;
    document.getElementById("traditionalName").innerText = data.traditionalName;
    document.getElementById("interestingFacts").innerText =
      data.interestingFacts;
    document.getElementById("ingredients").innerText = data.ingredients;
    document.getElementById("image").src = data.image;
  } catch (error) {
    console.log(error);
  }
}
