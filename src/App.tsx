

import { Main, SidePanel } from './components';
import { AppContextProvider } from './context';
import { StyledEngineProvider } from '@mui/material/styles';

export const App = () => {
  return (
    <AppContextProvider>
      <StyledEngineProvider injectFirst>
        <SidePanel>
          <Main />
        </SidePanel>
      </StyledEngineProvider >
    </AppContextProvider >
  );
}


