import React from 'react';

function Nav() {
    const categories = [
        {
          name: "About",
          description:
            "About me",
        },
        { name: "Portfolio", description: "projects" },
        { name: "Contact", description: "contact me" },
        {
          name: "Resume",
          description: "resume",
        },
      ];

    function categorySelected(name) {
        console.log(`${name} clicked`) 
    }

  return (
    <header className='flex-row px-1'>
        <a href='/'>
        <h2>Jacqueline Merlan</h2>
        </a>
        <nav>
            <ul className="flex-row">
            {categories.map((category) => (
                <li
                className="mx-1"
                key={category.name}
                > <a href={'#' + category.name.toLowerCase()}>
                <span onClick={() => categorySelected(category.name)}>
                    {category.name}
                </span>
                </a>
                </li>
            ))}
            </ul>
        </nav>
    </header>
  );
}

export default Nav;