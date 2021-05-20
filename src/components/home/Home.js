import SubHeader from '../header/SubHeader'
import './home.css'
import RecipeCard from '../recipes/RecipeCard'
const Home = ({recipes}) => {
console.log('recipes',recipes)



  const list = recipes.map( recipe => <RecipeCard  key ={recipe.id} recipe ={recipe}/>)
  return (
   
      <div className ='home'>
        <SubHeader 
          title = "Welcome to Fooddies!"
          text="Our Today's Pick for you"
          children  = {<div className='pick'> {list}</div>}
        /> 
     </div>
  
  );
};

export default Home