import { useContext, useState } from "react";
import SaveToList from "./SaveToList";
import { RecipeListContext } from "../recipeListContext";

function RecipeDetails() {
  const { oneRecipe, users, saveUserRecipe} = useContext(RecipeListContext);
  const [selectedUser, setSelectedUser] = useState(users[0].name);
  const ingredients = oneRecipe?.extendedIngredients;
  console.log(oneRecipe.sourceUrl);

  const ingredientList = ingredients?.map(function (item) {
    return <p>{item.original}</p>;
  });


  const selectChangeHandler = (event) => {   
    setSelectedUser(event.target.value);
  };

  const saveToRecipeList = () =>{
    const userId = !users.find(user=>selectedUser === user.name) ? userId = users[0]._id : users.find(user=>selectedUser === user.name)
  console.log(oneRecipe.extendedIngredients, "test list");
    
    saveUserRecipe(userId._id, oneRecipe.id)
  }
console.log(selectedUser)

  const selectUser = users.map((user) => (
    <SaveToList key={user._id} {...user} name={user.name}></SaveToList>
  ));

  return (
    <div>
      <h4>{oneRecipe.title}</h4>
      <p>Servings: {oneRecipe.servings}</p>
      <img src={oneRecipe.image} alt={oneRecipe.tile} />
      {ingredientList}
      <p>
        Find instructions on{" "}
        <a href={oneRecipe.sourceUrl} target="_blank" rel="noopener noreferrer">
          {oneRecipe.sourceName}
        </a>
      </p>
      <p>Select a user and save to list</p>
      {/* <input /> */}
      <select
      
        value="{selectedUser}"
        name="{selectedUser}"
        onChange={selectChangeHandler}
      >
        {selectUser}
      </select>

   
      <button onClick ={saveToRecipeList}>Save to a list</button>
    </div>
  );
}

export default RecipeDetails;