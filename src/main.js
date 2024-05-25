async function loadSection(id, url) {
    const response = await fetch(url);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadSection('header', '/src/header.html');
    loadSection('header', '/src/header.html');

    loadSection('hero', '/src/hero.html');
    loadSection('company','/src/company.html');
    loadSection('services', '/src/services.html');
    loadSection('footer', '/src/footer.html');
  });
  