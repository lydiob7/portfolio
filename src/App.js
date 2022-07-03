import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
import { ThemeProvider } from 'components/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

// Routes
import { LanguageCheck, RoutesSwitch } from 'utils';

const store = configureStore();

const App = () => {
    return (
        <>
            <Provider store={store}>
                <ThemeProvider>
                    <CssBaseline>
                        <LanguageCheck>
                            <RoutesSwitch />
                        </LanguageCheck>
                    </CssBaseline>
                </ThemeProvider>
            </Provider>
        </>
    );
};

export default App;
