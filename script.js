const openPage = (page) => {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  document.getElementById(page).style.display = "block";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
