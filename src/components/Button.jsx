import PropTypes from 'prop-types'

export default function Button({colour, text, onClick}) {
  return  <button 
            onClick={onClick}
            style={{backgroundColor: colour}} 
            className='btn'
          >
            {text}
          </button>
};

Button.defaultProps = {
  colour: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  colour: PropTypes.string,
  onClick: PropTypes.func
}