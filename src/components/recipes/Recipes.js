import RecipeCard from './RecipeCard'
import SerchRecipes from './SearchRecipes'
import './recipes.css'

//import SearchBar from "material-ui-search-bar";

const Recipes = ({recipes,inputHandler}) => {
  return (
    <div className = 'recipe_container'>
      <SerchRecipes inputHandler = {inputHandler}/>
      <div className="recipies">
        {recipes.map( recipe => <RecipeCard  key ={recipe.id} recipe ={recipe}/>)}
      </div>
    </div>
  );
};

export default Recipes;