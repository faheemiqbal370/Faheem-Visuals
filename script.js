function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  sidebar.classList.toggle("open");
  hamburger.innerHTML = sidebar.classList.contains("open") ? "&times;" : "&#9776;";
}

function showTab(tabId, btn) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
  document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
  btn.classList.add("active");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    const sidebar = document.getElementById("sidebar");
    const hamburger = document.querySelector(".hamburger");
    sidebar.classList.remove("open");
    hamburger.innerHTML = "&#9776;";
  }
});

document.querySelectorAll('#sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
    document.querySelector('.hamburger').innerHTML = '&#9776;';
  });
});
