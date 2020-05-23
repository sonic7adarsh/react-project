import React from 'react';
import Spinner from './components/UI/Spinner/Spinner'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        hey Minions......
        <Spinner/>
      </Layout>
    </div>
  );
}

export default App;
