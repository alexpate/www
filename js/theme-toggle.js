function changeColorScheme(newColorScheme) {
  localStorage.colorScheme = newColorScheme;

  document.body.dataset.theme = newColorScheme;
  return;
}

function toggleColorScheme() {
  const newColorScheme = localStorage.colorScheme === 'dark' ? 'light' : 'dark';
  return changeColorScheme(newColorScheme);
}

const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
  themeToggle.addEventListener('click', (e) => {
    toggleColorScheme();
  });
}

if (localStorage.colorScheme) {
  document.body.dataset.theme = localStorage.colorScheme;
} else if (
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches
) {
  changeColorScheme('dark');
}

// Listen for changes to the users preferences
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    changeColorScheme(newColorScheme);
  });
