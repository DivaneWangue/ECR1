// Menu mobile
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Scroll vers Formations
document.querySelector(".btn-secondary").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#formations").scrollIntoView({ behavior: "smooth" });
});

// Scroll vers le formulaire d'inscription
document.getElementById("btn-inscrire")?.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#inscription").scrollIntoView({ behavior: "smooth" });
});

// Chargement des formations depuis JSON
fetch('data/manifest.json')
  .then(response => response.json())
  .then(formations => {
    const container = document.getElementById('formations-container');
    formations.forEach(f => {
      const card = document.createElement('div');
      card.classList.add('feature-card');
      card.innerHTML = `
        <h3>${f.titre}</h3>
        <p>Catégorie: ${f.categorie}</p>
        <p>Durée: ${f.duree}</p>
        <p>Niveau: ${f.niveau}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erreur:', err));