import React from 'react'

const Button = ({ children, className }) => {
    return (
        <div>
            <a href="#" className={`bg-main text-white ml-4 py-3 px-8 rounded-md ${className}`}>
                {children}
            </a>
        </div>
    )
}

export default Button
