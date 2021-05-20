import SubHeader from '../header/SubHeader'
import './home.css'
import RecipeCard from '../recipes/RecipeCard'
import {Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'

const Home = ({recipes}) => {

  const list = recipes.map( recipe => <RecipeCard  key ={recipe.id} recipe ={recipe}/>)
  return (   
      <div className ='home'>
        <SubHeader 
          title = "Welcome to Fooddies!"
          text="Our Today's Pick for you"
          children  = {<div className='pick'> {list}</div>}
        /> 
        <Link to = {`/recipes`}><Button  type="submit" variant="success" >Check more</Button></Link> 
     </div>
  
  );
};

export default Home