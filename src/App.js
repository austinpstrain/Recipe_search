import { useState } from 'react'
import Header from './Components/Header'
import Recipes from './Components/Recipes'
import AddRecipe from './Components/AddRecipe'

function  App() {
  const [showAddRecipe, setShowAddRecipe] = useState(false)

  //Define recipes here as gloabla state so we can pass it down to components as props
  const [recipes, setRecipes] = useState([
    {
        id: '1',
        text: 'Example Default Recipe',
        day: 'Feb 5th at 2:30pm',
        reminder: 'true',
        calories: '600',
        carbohydrates: '60',
        proteins: '60',
        fats: '40',
        selected: 'true',
    },
  ])
console.log(recipes);
  //Toggle Reminder
  const toggleReminder = (id) => {
    setRecipes(
      recipes.map((recipe) =>
       recipe.id === id ? { ...recipe, reminder:
       !recipe.reminder} : recipe
      )
    )
  }

  //Toggle Selected
  const toggleSelected = (id) => {
    setRecipes(
      recipes.map((recipe) =>
       recipe.id === id ? { ...recipe, selected:
       'true'} : {...recipe, selected: 'false'}
      )
    )
  }

  const addRecipe = (recipe, toggleSelected) => {
    let temp = [...recipes];
    temp.push(recipe);
    temp.map((item)=>{
      if(item.id === recipe.id)
        item.selected = 'true';
      else
        item.selected = 'false';
      return {...item};
    });
    setRecipes([...temp]);
  }
  
  //Whenever we want to delete, add or update we want to create the function in this App.
  //State get passed down, actions get passed up
  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !==id))
  }

  return (
    // Can only return one element i.e. one div. Other components can be inside
    <div className="container">
      <Header 
      onAdd={() => setShowAddRecipe(!showAddRecipe)}
      showAdd = {showAddRecipe}
      />
      {showAddRecipe && <AddRecipe onAdd={addRecipe} toggleSelected={addRecipe}/>}
      {recipes.length > 0 ? (<Recipes recipes={recipes} onDelete={deleteRecipe} onToggle={toggleReminder} onSelect={toggleSelected}/>) : ('No Recipes Added')}
    </div>
  );
}

export default App;
