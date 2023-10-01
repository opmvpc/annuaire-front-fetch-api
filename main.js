import * as bootstrap from 'bootstrap';
import './style.scss';
import { nav } from './nav';

const listePersonnes = async () => {
  // récupération des données
  const url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = '/api/personnes';
  const reponse = await fetch(url);
  const personnes = await reponse.json();

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

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        ${await listePersonnes()}
      </div>
    </div>
  </main>
`;
