import React from 'react';
const Header = (props) => {
    return (
        <div className="ui fixed menu">
            <div className ="ui container ">
                <h2>{props.value}</h2>
            </div>
        </div>
    );
};
export default Header;