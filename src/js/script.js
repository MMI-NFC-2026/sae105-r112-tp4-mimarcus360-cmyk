// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const detailsClique = summary.parentElement;
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== detailsClique) det.open = false;
    });
  });
});