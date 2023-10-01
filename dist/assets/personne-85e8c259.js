import{n as r}from"./nav-7bb21c3a.js";const t=async()=>{const e=window.location.search,n=new URLSearchParams(e).get("id")??1;console.log(n);const s=new URL("https://api-annuaire.vercel.app");return s.pathname="/api/personnes/"+n,await(await fetch(s)).json()},o=()=>{const e=new URL("https://api-annuaire.vercel.app");return e.pathname=a.avatar,`
      <div class="card col col-sm-10 col-md-8 col-xl-6 mx-auto">
      <img src="${e}" crossorigin class="card-img-top" alt="avatar de ${a.prenom} ${a.nom}">
        <div class="card-body">
          <h5 class="card-title">${a.prenom} ${a.nom}</h5>
          <h6 class="card-title">${a.date_de_naissance}</h6>
          <h6 class="card-title">${a.numero_de_telephone}</h6>
          <h6 class="card-title">${a.adresse_email}</h6>
          <p class="card-text">
            ${a.description}
          </p>
        </div>
      </div>
    `},a=await t();document.querySelector("#app").innerHTML=`
  <main>
    ${r}

    <div class="container-fluid my-4">
      ${o()}
    </div>
  </main>
`;
