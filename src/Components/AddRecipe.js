import { useState } from 'react'
// onAdd calls addRecipe at App.js with the recipe submitted
const AddRecipe = ({onAdd, onSelect}) => {
    //each input will have a component level state. Not app level

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [calories, setCalories] = useState('')
    const [carbohydrates, setCarbohydrates] = useState('')
    const [proteins, setProteins] = useState('')
    const [fats, setFats] = useState('')
    const [reminder, setReminder] = useState(false) //default = false
    let time = new Date().toLocaleString();
        
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Pleas add text.');
            return
        }

        setInterval(() => {
            setDay(time);
        }, 100);
        
       // const selected = 'true'
       // onAdd({text, day, calories, carbohydrates, proteins, fats, reminder, selected})
        const id = Math.floor(Math.random() * 10000) + 1;
        onAdd({text: text,day: day,calories: calories,carbohydrates: carbohydrates,proteins: proteins,fats: fats,reminder: reminder,id: id,});
        onSelect(id);
        setText('');
        setDay('');
        setCalories('');
        setCarbohydrates('');
        setProteins('');
        setFats('');
        setReminder(false);
    }

    const twoFucntions = (e) =>{
        setText(e.target.value);
        setInterval(() => {
            setDay(time);
        }, 100);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name Recipe</label>
                <input 
                type='text' 
                placeholder='Add Name of Recipe'
                value={text}
                onChange={(e) => twoFucntions(e)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Favorite?</label>
                <input 
                type='checkbox'
                checked={reminder}
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <div className='form-control'>
                <label>Calories</label>
                <input 
                type='text' 
                placeholder='Add Calories'
                value={calories}
                onChange={(e) => setCalories(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Carbohydrates</label>
                <input 
                type='text' 
                placeholder='Add Carbohydrates'
                value={carbohydrates}
                onChange={(e) => setCarbohydrates(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Proteins</label>
                <input 
                type='text' 
                placeholder='Add Proteins'
                value={proteins}
                onChange={(e) => setProteins(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Fats</label>
                <input 
                type='text' 
                placeholder='Add Fats'
                value={fats}
                onChange={(e) => setFats(e.target.value)}
                />
            </div> 
            
            <input type='submit' value='Save Search' className='btn btn-block'/>
        </form>
    )
}
export default AddRecipe