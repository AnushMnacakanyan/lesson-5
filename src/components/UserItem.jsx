import PropTypes from 'prop-types';
export const UserItem = ({ user, onRemove }) => {
    return <>
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>
                <button onClick={() => onRemove(user.id)}>Delete</button>
            </td>
        </tr>
    </>
}

UserItem.propTypes = {
    user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }).isRequired,
    onRemove: PropTypes.func.isRequired,
};