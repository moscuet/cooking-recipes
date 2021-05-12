import RecipeCard from './RecipeCard'
import SerchRecipes from './SearchRecipes'
import './recipes.css'
import Row from 'react-bootstrap/Row'
//import SearchBar from "material-ui-search-bar";
import SubHeader  from '../header/SubHeader'
const Recipes = ({recipes,inputHandler}) => {
  return (
    <div className = 'recipe_container'>
            <SubHeader 
                title = "All exiciting Recipies for you!"
                text="Pick your Favourite One!"
                children = {<SerchRecipes inputHandler = {inputHandler}/>}
            />
      <Row>
        <div className="recipies">
          {recipes.map( recipe => <RecipeCard  key ={recipe.id} recipe ={recipe}/>)}
        </div>
      </Row>
    </div>
  );
};

export default Recipes;