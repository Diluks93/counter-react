import React from 'react';
import { Counter } from './components/counter';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Counter />
    </ErrorBoundary>
  );
}

export default App;
