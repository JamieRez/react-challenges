import React, {Component} from 'react';

export class UserList extends Component {
    render() {

        var list = this.props.list.map((user, index) => {
            return (
                <div>
                    <ul key={index}>
                        <li>Name: {user.name}</li>
                        <li>Team: {user.team}</li>
                        <li>Id: {user.id}</li>
                    </ul>
                </div>
            );
        });
        return (
            <div>{list}</div>
        );
    }
}
