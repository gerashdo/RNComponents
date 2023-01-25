import React from 'react'
import 'react-native-gesture-handler';

import { Navigator } from './src/navigator/Navigator';
import { ThemeProvider } from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({ children }:AppStateProps) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;
