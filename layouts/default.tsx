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
`;



function Layout({ children}) {

    const { currentTheme, cursorStyles } = useGlobalStateContext();
    const onCursor = useCursorDispatchContext();
    const [toggleMenu, setToggleMenu] = useState(false)
    const [hamburgerPosition, setHamburgerPosition] = useState({ x: 0, y: 0})
    //     const dispatch = useGlobalDispatchContext();
    
    const darkTheme = {
        background: '#000',
        text: '#fff',
        red: '#ea295e',
        left: `${hamburgerPosition.x}px`,
        top: `${hamburgerPosition.y}px`,
    }
    
    const lightTheme = {
        background: '#fff',
        text: '#000',
        red: '#ea295e',
        left: `${hamburgerPosition.x}px`,
        top: `${hamburgerPosition.y}px`,
    }
    
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
            hamburgerPosition={hamburgerPosition}
            setHamburgerPosition={setHamburgerPosition}
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
