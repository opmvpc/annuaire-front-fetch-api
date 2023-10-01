import{n as o}from"./nav-7bb21c3a.js";const c=async()=>{const e=new URL("https://api-annuaire.vercel.app");return e.pathname="/api/personnes",await(await fetch(e)).json()},i=()=>{let e="";for(let a=0;a<r.length;a++){const n=r[a],s=new URL("https://api-annuaire.vercel.app");s.pathname=n.avatar;let t=`
      <a class="card col-5 col-md-3" href="/personne/?id=${n.id}">
        <img src="${s}" crossorigin class="card-img-top" alt="avatar de ${n.prenom} ${n.nom}">
        <div class="card-body">
          <h5 class="card-title">${n.prenom} ${n.nom}</h5>
        </div>
      </a>
    `;e+=t}return e},r=await c();document.querySelector("#app").innerHTML=`
  <main>
    ${o}

    <div class="container-fluid my-4">
      <div class="d-flex gap-3 flex-wrap justify-content-center">
        ${i()}
      </div>
    </div>
  </main>
`;
