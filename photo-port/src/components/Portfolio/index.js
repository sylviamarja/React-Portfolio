import React from 'react';
import mealThyme from '../../assets/images/MealThyme.jpg';
import windShop from '../../assets/images/WindowShopper.jpg';


function Portfolio() {
    const gallery = [
        {
            name: "Meal Thyme",
            src: mealThyme,
            git: "https://github.com/uoftgroup7/mealThyme/",
            live: "https://uoftgroup7.github.io/mealThyme/"
        },
        {
            name: "Window Shopper",
            src: windShop,
            git: "https://github.com/Gr0upFour/projectTwo",
            live: "https://project2-window-shopper.herokuapp.com/"
        }
    ]

    return (
        <section>
            <div>
                <h1>Projects Portfolio</h1>
            </div>
            <ul>
                {gallery.map((portfolio) => (
                    <li className="project-list">
                        <a href={portfolio.git} target="_blank" rel="noreferrer"><h3>{portfolio.name}</h3></a>
                        <img src={portfolio.src} style={{ width: "25%" }} alt={portfolio.name} />
                        <div>
                            <a href={portfolio.live} target="_blank" rel="noreferrer">Live Webpage</a>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Portfolio;
