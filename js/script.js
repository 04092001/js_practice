const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", changeFamily);

function changeFamily() {
  const choice = select.value;

  switch (choice) {
    case "targ":
      para.textContent = "Danaerys";
      break;

    case "barath":
      para.textContent = "Robert, Joffrey, Myrcella, Tommen";
      break;

    case "lann":
      para.textContent = "Tywin, Jaime, Cersei, Tyrion";
      break;

    case "stark":
      para.textContent = "Ned, Catelyn, Robb, Sansa, Arya, Bran, Rickon";
      break;

    default:
      para.textContent = "";
  }
}
