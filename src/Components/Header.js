import PropTypes from 'prop-types'
import Button from'./Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Macro Recipe Search v.2',
  }

Header.propTypes = {
    title: PropTypes.string,
}

// CSS in JS
// const headingStyle={
//     color: 'green', 
//     backgroundColor: 'black', 
// }

export default Header