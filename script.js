const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

document.querySelector("button").addEventListener("click", breadCrumbs);

// breadCrumbs();
function breadCrumbs() {
  console.log("*****");
  document.querySelector("div").innerHTML = `<p><a href="${bc[0].link}">${bc[0].name}</a></p> / <p><a href="${bc[1].link}">${bc[1].name}</a></p> / <p><a href="">${bc[2].name}</a></p>`;

  //    bc.forEach((element) => {
  //     `<p><a href="${element.link}">${element.name}</a></p>` + "/";
  //   });

  //   bc.forEach((element) => {
  //     document.querySelector("div").innerHTML = `<p><a href="${element.link}">${element.name}</a></p>` + "/";
  //   });
  //   (document.querySelector("p").innerHTML = `<a href="${bc[0].link}">${bc[0].name}</a>`)

  //   bc[2].link);
}
