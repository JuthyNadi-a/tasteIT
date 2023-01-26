import React from 'react';
import './Button.module.css'
const Button = ({name}) => {
    return (
        <div>
            <button>
                {name}
            </button>
        </div>
    );
};

export default Button;