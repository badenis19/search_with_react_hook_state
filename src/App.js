import React from 'react';
import {SearchUser} from "./SearchUser";
import { RepoProvider } from './RepoContext';

function App() {
  return (
    <RepoProvider>
      <div className="App">
      < SearchUser />
      </div>
    </RepoProvider>
  );
}

export default App;
