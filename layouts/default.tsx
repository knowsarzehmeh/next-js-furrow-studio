import { useState } from 'react';
import PropTypes from 'prop-types';

// styled components
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';

// components
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Cursor from '../components/CustomCursor';
// context
import { useGlobalStateContext, useGlobalDispatchContext, useCursorDispatchContext } from '../context/globalContext';

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        cursor: none;
        text-decoration: none;
    }

    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${props => props.theme.background} ;
        overscroll-behavior: none;
        overflow-x: hidden;
    }
    /* div a {
        color: ${props => props.theme.text} !important;
    }

    div span {
        background: ${props => props.theme.text} !important;
    } */

`;



function Layout({ children}) {

    const darkTheme = {
        background: '#000',
        text: '#fff',
        red: '#ea295e',
    }
    
    const lightTheme = {
        background: '#fff',
        text: '#000',
        red: '#ea295e',
    }

    

    const { currentTheme, cursorStyles } = useGlobalStateContext();
    const onCursor = useCursorDispatchContext();
    const [toggleMenu, setToggleMenu] = useState(false)
    //     const dispatch = useGlobalDispatchContext();
    
    // const onCursor = cursorType => {
        //     cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
        //     dispatch({
            //         type: 'CURSOR_TYPE',
            //         cursorType
            //     });
            // }
    return (
        <ThemeProvider theme={currentTheme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
            <Cursor toggleMenu={toggleMenu} />
            <Header 
            onCursor={onCursor} 
            toggleMenu={toggleMenu}
            setToggleMenu={setToggleMenu}
             />
            <Navigation 
             onCursor={onCursor} 
            toggleMenu={toggleMenu} 
            setToggleMenu={setToggleMenu} 
            />
        <main>
            {children}
        </main>
       </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout;
