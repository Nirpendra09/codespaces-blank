// src/App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import store from './redux/store';
import RouterComponent from './router';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <Router>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1">
            <TopBar />
            <div className="App h-full">
              <QueryClientProvider client={queryClient}>
                <RouterComponent />
              </QueryClientProvider>
            </div>
          </div>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
