import Recipe from './Recipe'
import SerchRecipes from './SearchRecipes'
import './recipes.css'
const Recipes = ({recipes,inputHandler}) => {
  return (
    <div className = 'recipes'>
      <SerchRecipes inputHandler = {inputHandler}/>
      {recipes.map( recipe => <Recipe key ={recipe.id} recipe ={recipe}/>)}
    </div>
  );
};

export default Recipes;