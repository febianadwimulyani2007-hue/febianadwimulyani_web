const greetButton = document.getElementById('greetButton');
const themeButton = document.getElementById('themeButton');
const greetMessage = document.getElementById('greetMessage');

let messageVisible = false;

function toggleGreeting() {
  if (messageVisible) {
    greetMessage.textContent = 'Klik tombol untuk melihat sapaan spesial.';
    greetButton.textContent = 'Tampilkan Sapaan';
  } else {
    greetMessage.textContent = 'Halo! Saya Febiana Dwi Mulyani, senang bertemu denganmu di website ini.';
    greetButton.textContent = 'Sembunyikan Sapaan';
  }
  messageVisible = !messageVisible;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeButton.textContent = isDark ? 'Tema Terang' : 'Tema Gelap';
}

greetButton.addEventListener('click', toggleGreeting);
themeButton.addEventListener('click', toggleTheme);
