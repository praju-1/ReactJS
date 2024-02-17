// import React from 'react'

// export const Home = () => {
//   return (
//     <>
//     <div>Home</div>
//     <div className='container'>This is About us Page</div>
//     </>
//   )
// }
import React from 'react';

function Home() {
  // Add logic here
  const isLoggedIn = true;

  return (
    <div>
      <h2>Home</h2>
      {isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <p>Please log in to view content.</p>
      )}
    </div>
  );
}

export default Home;