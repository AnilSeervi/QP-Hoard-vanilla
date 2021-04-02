const tabs = document.querySelector(".tabs");
M.Tabs.init(tabs);
document.addEventListener("DOMContentLoaded", function () {
  const sidenavs = document.querySelectorAll(".sidenav");
  const collapsibles = document.querySelectorAll(".collapsible");
  M.Collapsible.init(collapsibles, {
    onOpenEnd() {
      const active = document.querySelector(".collapsible .active");
      active.querySelector("i").textContent = "keyboard_arrow_up";
    },
    onCloseStart() {
      const active = document.querySelector(".collapsible .active");
      active.querySelector("i").textContent = "keyboard_arrow_down";
    },
  });
  M.Sidenav.init(sidenavs, { edge: "right" });
});
