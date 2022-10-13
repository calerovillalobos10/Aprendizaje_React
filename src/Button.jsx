import PropTypes from 'prop-types';

export const Button = ({text, name}) => {
    return <button onClick={()=>{
        console.log('Hola Mundo');
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'Some User'
}