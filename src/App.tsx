import React from 'react';
import './App.css';
import { useGetPostsQuery } from './services/post-service';

const App = () => {
  const { data = [], error, isLoading } = useGetPostsQuery();

  return (
    <div className="App">
      {error ? (
        <>Oops, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : null}
    </div>
  );
}

export default App;
