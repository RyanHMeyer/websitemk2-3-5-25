///Dark Mode
//Loaded in <head> (not deferred) so the theme is applied before the page is drawn, with no flash of the light theme.
(function () {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}//localStorage can be blocked in some browsers
  const dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;//no saved choice? follow the device setting
  if (dark) {
    document.documentElement.classList.add("dark");
  }
})();

//The header (and its button) is loaded later by javas.js, so listen on the whole document for clicks on the button
document.addEventListener("click", function (event) {
  if (!event.target.closest("#theme-toggle")) {
    return;
  }
  const isDark = document.documentElement.classList.toggle("dark");
  try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
});
