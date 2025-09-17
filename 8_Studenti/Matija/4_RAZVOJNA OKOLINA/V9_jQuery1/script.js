$(document).ready(()=>{

  // let xhr = new XMLHttpRequest();

  // xhr.open("GET", "https://pokeapi.co/api/v2/pokemon-color/yellow/", true);

  // function fillList(){
  //   const data = JSON.parse(xhr.response);
  //   const source = document.getElementById("hb-template").innerHTML;
  //   const template = Handlebars.compile(source);
    
  //   const context = { pokemon: data.pokemon_species.slice(0,20)};

  //   const html = template(context);

  //   document.getElementById("hb-result").innerHTML = html;

  // } 


  // xhr.onload = function() {

  //   fillList();

  // }

  // xhr.send();


  const source = document.getElementById("hb-template").innerHTML;
  const destination = document.getElementById("hb-result");
  const template = Handlebars.compile(source);

  function addStripes(){
    $("table tr").removeClass("striped");
    $("table tr:nth-child(even)").addClass("striped");
  }

  function afterRender(){
    $("table th").css("color","darkBlue");
    addStripes();

    setTimeout(function(){
      const hideElements = $("table a:contains('p')").filter(function(){
        return this.innerHTML.indexOf('p') == 0;
      })

      hideElements.closest("tr").remove();
      addStripes();

      $("<div></div>").insertAfter($("#hb-template")).text("Skriveno: " + hideElements.length);

    }, 2000);
  }

  async function getPokemons(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-color/yellow/");
    const data = await response.json();

    return data.pokemon_species.slice(0,20);
  }

  function fillList(pokemons){

    const context = {pokemon: pokemons, tableClass: "table"};
    const html = template(context);
    destination.innerHTML = html;
    $('[data-toggle="popover"]').popover();

    afterRender();
  }

  getPokemons().then(pkmns => fillList(pkmns));
});