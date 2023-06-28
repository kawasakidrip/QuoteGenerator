function toggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var darkTheme = document.getElementById("dark-theme");
  if (element.classList.contains("dark-mode")) {
    darkTheme.disabled = false;
  } else {
    darkTheme.disabled = true;
  }
}