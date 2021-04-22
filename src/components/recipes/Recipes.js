import Recipe from './Recipe'
import './recipes.css'
const Recipes = ({recipes}) => {
  console.log('from recipes',recipes)
  return (
    <div className = 'recipes'>
      {recipes.map( r => <Recipe key ={r.id} recipe ={r}/>)}
    </div>
  );
};

export default Recipes;