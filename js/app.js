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
fetch ('data/formations.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('formations-container');
    data.formations.forEach(f => {
      const card = document.createElement('div');
      card.classList.add('feature-card');
      card.innerHTML = `
        <h3>${f.title}</h3>
        <p>Catégorie: ${f.category}</p>
        <p>Durée: ${f.duration}</p>
        <p>Niveau: ${f.level}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erreur:', err));