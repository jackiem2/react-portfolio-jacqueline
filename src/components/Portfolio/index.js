import React from "react";
import projectPhoto from "../../assets/images/spacelaunch.png"
function Portfolio() {
   const currentCategory = {
        name: "Spacelaunch Tracker",
        description:
        "An application that informs users about local space launches and space news."
   };
   return (
       <section>
           <h1>Projects</h1>
           <p>{currentCategory.name}</p>
           <div>
               <img
                src={projectPhoto}
                alt="project"
                className="mx-1"
               />
           </div>
       </section>
   );
}
export default Portfolio;