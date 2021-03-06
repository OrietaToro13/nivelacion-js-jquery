$(document).ready( function(){
$( "#hide" ).hide();

 function printNews(){
 	$("#mas").append("NUEVAS RECETAS");

 }

 printNews();
});




	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);




/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(r){/*forEach para que recorra los objetos*/
		if(r.highlighted == true){/*la condicion if para los resaltados*/
		renderRecipe(r);
	}

	});
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append("<a class="item-recipe" href="#">
  <span class="attribution">
    <span class="title-recipe">` + recipe.title + ´ </span>
    <span class="metadata-recipe">
      <span class="author-recipe">` + recipe.source.name + ´</span>
      <span class="bookmarks-recipe">
        <span class="icon-bookmark"></span> 
      </span>
    </span>
  </span>

  <img src="img/recipes/320x350/ `recipe.name + ´.jpg " />
</a>

)
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


