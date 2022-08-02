const themeKey = 'theme';

window.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector(':root');
  const themeToggleButton = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem(themeKey);

  if (savedTheme) {
    html.setAttribute('data-theme', savedTheme);
  } else if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    html.setAttribute('data-theme', 'dark');
    localStorage.setItem(themeKey, 'dark');
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (event.matches) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem(themeKey, 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem(themeKey, 'light');
      }
    });

  themeToggleButton.addEventListener('click', (event) => {
    if (html.getAttribute('data-theme') === 'dark') {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem(themeKey, 'light');
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem(themeKey, 'dark');
    }
  });
});
