import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({title, onAdd, showAdd}) {
  return(
    <header className='header'>
      <h1>Task Tracker</h1>
      <Button 
        colour={showAdd ? 'Red' : 'Green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}/>
    </header>
  )
};

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}