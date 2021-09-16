import React from 'react';
import '../../assets/css/nav.css';

function Nav(props) {

    // destructure props
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return (
        <header className="flex-row justify-space-between px-2">
            <h2 className="flex-row my-2 align-center">
                <a href="/">
                    Sarah<span className="text-primary">Azzopardi</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row h100 align-center">
                    {categories.map(category => (
                        <li className={`my-2 mx-2 ${category.name === currentCategory.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                            }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Nav;