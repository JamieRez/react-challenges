import React, {Component} from 'React';

var styles = {
    textAlign : 'center'
}

export const MyTitle = (props) => {
    return (
        <div>
            <h1 style={styles}>{props.title}</h1>
        </div>
    );
}
