import RecipeCard from './RecipeCard'
import SerchRecipes from './SearchRecipes'
import './recipes.css'
import SubHeader  from '../header/SubHeader'
const Recipes = ({recipes,inputHandler}) => {
  return (
    <div className = 'recipe_container'>
            <SubHeader 
                title = "All exiciting Recipies for you!"
                text="Pick your Favourite One!"
                children = {<SerchRecipes inputHandler = {inputHandler}/>}
            />
      
        <div className="recipies">
          {recipes.map( recipe => <RecipeCard  key ={recipe.id} recipe ={recipe}/>)}
        </div>
      
    </div>
  );
};

export default Recipes;