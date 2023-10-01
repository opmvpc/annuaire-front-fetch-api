import * as bootstrap from 'bootstrap';
import '../style.scss';
import { nav } from '../nav';

const getPersonne = async () => {
  // récupération des paramètres GET de l'url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const personneId = urlParams.get('id') ?? 1;
  console.log(personneId);

  // récupération des données
  const url = new URL(import.meta.env.VITE_API_URL);
  url.pathname = '/api/personnes/' + personneId;
  const reponse = await fetch(url);
  const personne = await reponse.json();

  return personne;
};

const detailsPersonne = () => {
  // url de l'image
  const imgUrl = new URL(import.meta.env.VITE_API_URL);
  imgUrl.pathname = personne.avatar;

  return `
      <div class="card col col-sm-10 col-md-8 col-xl-6 mx-auto">
      <img src="${imgUrl}" crossorigin class="card-img-top" alt="avatar de ${personne.prenom} ${personne.nom}">
        <div class="card-body">
          <h5 class="card-title">${personne.prenom} ${personne.nom}</h5>
          <h6 class="card-title">${personne.date_de_naissance}</h6>
          <h6 class="card-title">${personne.numero_de_telephone}</h6>
          <h6 class="card-title">${personne.adresse_email}</h6>
          <p class="card-text">
            ${personne.description}
          </p>
        </div>
      </div>
    `;
};

const personne = await getPersonne();

document.querySelector('#app').innerHTML = `
  <main>
    ${nav}

    <div class="container-fluid my-4">
      ${detailsPersonne()}
    </div>
  </main>
`;
