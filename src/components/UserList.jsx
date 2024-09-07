import Types from 'prop-types'
import { arrayOf, number, string } from "prop-types"
import { useState } from "react"
import { UserItem } from './UserItem'

export const UserList = ({ users, onRemove }) => {

    return <>
        <h3>UserList</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user =>
                    <UserItem
                        key={user.id}
                        user={user}
                        onRemove={onRemove}
                    />)}
            </tbody>
        </table>

    </>
}

UserList.propTypes = {
    users: Types.arrayOf(
        Types.exact({
            id:number,
            name: string,
            surname: string,
            email: string,
            password: string,
            age: number,
        })
    )
}