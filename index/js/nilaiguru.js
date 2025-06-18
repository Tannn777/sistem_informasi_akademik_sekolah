const kelasData = [
  { nama: "X RPL", img: "../asset/img/htrpll.png" },
  { nama: "XI RPL", img: "../asset/img/htrpll.png" },
  { nama: "XII RPL", img: "../asset/img/htrpll.png" },
  { nama: "X DKV", img: "../asset/img/htdkv.png" },
  { nama: "XI DKV", img: "../asset/img/htdkv.png" },
  { nama: "XII DKV", img: "../asset/img/htdkv.png" },
  { nama: "X AKL", img: "../asset/img/htakl.png" },
  { nama: "XI AKL", img: "../asset/img/htakl.png" },
  { nama: "XII AKL", img: "../asset/img/htakl.png" },
  { nama: "X BR", img: "../asset/img/htbr.png" },
  { nama: "XI BR", img: "../asset/img/htbr.png" },
  { nama: "XII BR", img: "../asset/img/htbr.png" },
  { nama: "X MP", img: "../asset/img/htmp.png" },
  { nama: "XI MP", img: "../asset/img/htmp.png" },
  { nama: "XII MP", img: "../asset/img/htmp.png" }
];

let page = 0;
const perPage = 3;
const container = document.getElementById("kelasWrapper");

function renderKelas() {
  container.innerHTML = "";
  const start = page * perPage;
  const items = kelasData.slice(start, start + perPage);
  items.forEach(k => {
    const div = document.createElement("div");
    div.className = "kelas-box";
    div.onclick = () => showOptions(k.nama);
    div.innerHTML = `
      <img src="${k.img}" alt="${k.nama}">
      <div class="overlay">${k.nama}</div>
    `;
    container.appendChild(div);
  });
}

function nextSlide() {
  if ((page + 1) * perPage < kelasData.length) {
    page++;
    renderKelas();
  }
}

function prevSlide() {
  if (page > 0) {
    page--;
    renderKelas();
  }
}

let selectedKelas = "";

function showOptions(kelas) {
  selectedKelas = kelas;
  document.getElementById("popup-title").textContent = kelas;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function gotoDaftarSiswa() {
  window.location.href = `daftarsiswa.html?kelas=${encodeURIComponent(selectedKelas)}`;
}

function inputNilai(jenis) {
  alert("Input nilai " + jenis + " untuk kelas " + selectedKelas);
}

document.addEventListener("DOMContentLoaded", renderKelas);
