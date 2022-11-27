import  {FaTimes} from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'

const Recipe = ({ recipe, onDelete, onToggle, onSelect }) => {
    return (
        <>
            <FaTimes style={{ float: 'right', marginRight: '2%', marginTop: '1%', color: 'red', cursor: 'pointer', }} onClick={() => onDelete(recipe.id)}/>
            <div
            // Notice use of backtick (`) to set className to recipe.reminder if reminder is true
            
            className={`recipe ${recipe.selected === 'true' && "selected"}`}
            onDoubleClick={() => onToggle(recipe.id)}
            onClick={() => onSelect(recipe.id)}            
            >
                <h3>
                    {recipe.reminder ? 
                    <FaStar 
                    style={{ color: 'gold', cursor: 'pointer', position: 'absolute', 
                    marginLeft: '-40px', fontSize:'150%' }} 
                    /> : ""}
                    {recipe.text}
                </h3>
                <p><b>{recipe.day}</b></p>
                <table>
                    <tbody>
                    <tr>
                        <td>Calories</td>
                        <td>{recipe.calories}</td>
                    </tr>
                    <tr>
                        <td>Carbohydrates</td>
                        <td>{recipe.carbohydrates}</td>
                    </tr>
                    <tr>
                        <td>Proteins</td>
                        <td>{recipe.proteins}</td>
                    </tr>
                    <tr>
                        <td>Fats</td>
                        <td>{recipe.fats}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

export default Recipe