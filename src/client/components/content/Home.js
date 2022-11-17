import React from 'react';
import ContentTop from '../content/ContentTop';
import ContentBottom from '../content/ContentBottom';
import useFetch from '../header/useFetch';

function Home() {
  const { meals, loading, error, title } = useFetch(
    'http://localhost:5000/api/meals'
  );

  return (
    <div className='content'>
      <ContentTop />

      {error && <div>{error}</div>}
      {!loading && <h2>Loading...</h2>}
      {meals && (
        <ContentBottom
          // @ts-ignore
          meals={meals}
          title={title}
        />
      )}
    </div>
  );
}

export default Home;

// handleDelete={handleDelete}
