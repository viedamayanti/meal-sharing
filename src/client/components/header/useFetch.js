import { useState, useEffect } from 'react';

function useFetch(url) {
  const [meals, setMeals] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('internal server error');
          }
          return res.json();
        })
        .then((data) => {
          setMeals(data);
          setLoading(true);
          setError(null);
        })

        .catch((err) => {
          setLoading(true);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  return {
    meals,
    loading,
    error,
    setMeals,
  };
}

export default useFetch;
