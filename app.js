const inp = document.querySelector(".calendre");
const btn = document.querySelector(".btn");
const result = document.querySelector(".res");
btn.addEventListener("click", () => {
  let date = new Date(inp.value);
  console.log(Date.now());

  console.log(new Date(Date.now() - date.getTime()).getUTCFullYear() - 1970);

  //   let currentDate = new Date().getFullYear();
  //   let res = currentDate - date;
  //   result.textContent = "Your Age is : " + res + " Years Old";
});
