import React from 'react'

function Header() {
    return (
        <div>
            <header className="row block center">
                <div>
                    <a href="#/">
                        <h1>Shopping App</h1>
                    </a>
                </div>
                <div>
                    <a href="#/cart">Cart</a> <a href="#/signin">Sign In</a>
                </div>
            </header>
        </div>
    )
}

export default Header
