document.addEventListener("DOMContentLoaded", function () {
  fetch("../index/get_user.php")
    .then((res) => res.json())
    .then((data) => {
      const display = document.getElementById("user-display");
      if (data.username && data.role) {
        display.textContent = `Jadwal mengajar untuk ${data.username}`;
      } else {
        display.textContent = "Pengguna tidak dikenali";
      }
    })
    .catch((err) => {
      console.error("Gagal memuat user:", err);
    });
});
