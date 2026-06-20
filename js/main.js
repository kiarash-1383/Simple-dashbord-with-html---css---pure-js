/* ─── Element References ─────────────────────────────────────────── */
const hamburgerBtn    = document.getElementById('hamburger-btn');
const sidebar         = document.querySelector('.sidebar');
const overlay         = document.getElementById('overlay');
const userNameBtn     = document.getElementById('user-name-btn');
const userDropdown    = document.getElementById('user-dropdown');
const btnDark         = document.getElementById('btn-dark');
const btnLight        = document.getElementById('btn-light');
const html            = document.documentElement;

/* ─── Sidebar Toggle (mobile) ────────────────────────────────────── */
function openSidebar() {
  sidebar.classList.add('show');
  overlay.classList.add('show');
}

function closeSidebar() {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
}

hamburgerBtn?.addEventListener('click', openSidebar);
overlay.addEventListener('click', closeSidebar);

/* ─── User Dropdown ──────────────────────────────────────────────── */
userNameBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  userDropdown.classList.toggle('show');
});

userDropdown?.addEventListener('click', (e) => {
  const item = e.target.closest('li');
  if (!item) return;
  userNameBtn.textContent = item.dataset.name || item.textContent.trim();
  userDropdown.classList.remove('show');
});

// Close dropdown on outside click
document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-info')) {
    userDropdown?.classList.remove('show');
  }
});

/* ─── Dark / Light Mode ──────────────────────────────────────────── */
function setTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    btnDark?.classList.add('active-theme-btn');
    btnLight?.classList.remove('active-theme-btn');
  } else {
    btnLight?.classList.add('active-theme-btn');
    btnDark?.classList.remove('active-theme-btn');
  }
}

btnDark?.addEventListener('click',  () => setTheme('dark'));
btnLight?.addEventListener('click', () => setTheme('light'));

// Restore saved theme on load
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

/* ─── Time Filter Buttons ────────────────────────────────────────── */
document.querySelectorAll('.time-filters').forEach(group => {
  group.addEventListener('click', (e) => {
    const btn = e.target.closest('.time-btn');
    if (!btn) return;
    group.querySelectorAll('.time-btn').forEach(b => b.classList.remove('time-btn--active'));
    btn.classList.add('time-btn--active');
  });
});

/* ─── Operation Tabs ─────────────────────────────────────────────── */
document.querySelectorAll('.op-tabs').forEach(group => {
  group.addEventListener('click', (e) => {
    const tab = e.target.closest('.op-tab');
    if (!tab) return;
    group.querySelectorAll('.op-tab').forEach(t => t.classList.remove('op-tab--active'));
    tab.classList.add('op-tab--active');
  });
});
