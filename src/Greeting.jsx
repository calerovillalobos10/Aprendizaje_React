// Los componentes se crean con letra mayúscula al incio, para diferenciarlos de jsx con los de html
// export const Greeting = (props) => {
//     console.log(props);
//     return <h1>{props.title}</h1>
// }

export const Greeting = ({ title, name = 'User' }) => {
    return <h1>{title}, dice {name}</h1>
}

export const UserCard = ({name, amount, married, address, greet}) => {
    return <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? 'married':'single'}</p>
        <ul>
            <li>City: {address.city}</li>
            <li>Address: {address.street}</li>
        </ul>
    </div>
}