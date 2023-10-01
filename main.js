import * as bootstrap from 'bootstrap';
import './style.scss';
import { nav } from './nav';

const getPersonnes = async () => {
  const url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = '/api/personnes';
  const reponse = await fetch(url);
  const personnes = await reponse.json();

  return personnes;
};

const listePersonnes = () => {
  // récupération des données

  let html = '';
  for (let i = 0; i < personnes.length; i++) {
    const personne = personnes[i];

    // url de l'image
    const imgUrl = new URL(import.meta.env.VITE_API_URL);
    imgUrl.pathname = personne.avatar;

    let personneCard = `
      <a class="card col-5 col-md-3" href="/personne/?id=${personne.id}">
        <img src="${imgUrl}" crossorigin class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
        </div>
      </a>
    `;
    html += personneCard;
  }
  return html;
};

let personnes = await getPersonnes();

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      <input type="text" class="form-control" id="search-input" />
    </div

    <div class="container-fluid my-4">
      <div id="liste-personnes" class="d-flex gap-3 flex-wrap justify-content-center">
        ${listePersonnes()}
      </div>
    </div>
  </main>
`;

// recherche
document.querySelector('#search-input').addEventListener('input', async (e) => {
  const url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = '/api/personnes/search';
  url.searchParams.set('q', e.target.value ?? '');
  const reponse = await fetch(url);
  const results = await reponse.json();
  console.log(results);

  if (!results || results.length === 0 || results.statusCode === 500) {
    personnes = await getPersonnes();
  } else {
    personnes = results;
  }
  const liste = document.querySelector('#liste-personnes');
  liste.innerHTML = listePersonnes();
});
