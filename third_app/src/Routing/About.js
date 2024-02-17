// import React from 'react'

// export const About = () => {
//   return (
//     <>
//     <div>About</div>
//     <div className='container'>This is About us Page</div>
//     </>
//   )
// }


import React from 'react';

function About() {
  // Add logic here
  const isAdmin = false;

  return (
    <div>
      <h2>About Us</h2>
      {isAdmin ? (
        <p>You have admin privileges.</p>
      ) : (
        <p>You do not have admin privileges.</p>
      )}
    </div>
  );
}

export default About;


