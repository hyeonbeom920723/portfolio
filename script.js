const openPage = (page) => {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";
};
document.getElementById("contact_button").addEventListener("click", () => {
  openPage("contact");
});
document.getElementById("project_button").addEventListener("click", () => {
  openPage("project");
});
document.getElementById("about_button").addEventListener("click", () => {
  openPage("about");
});

// contact is default page.
document.getElementById("contact_button").click();
