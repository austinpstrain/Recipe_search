import Recipe from './Recipe'

const Recipes = ({recipes, onDelete, onToggle, onSelect}) => {

    return (
         // When we use .map, and output a JSK, that is called a list. Parten (h3) of list needs a key defined
        <>
        {[...recipes].reverse().map((recipe) => (
            <Recipe 
            key = {recipe.id} 
            recipe={recipe} 
            onDelete={onDelete}
            onToggle = {onToggle}
            onSelect = {onSelect}
            />
        ))}
        </>
    )
}

export default Recipes