import {useEffect} from 'react';
import Link from 'next/link';
import { Container, Flex } from '../styles/globalStyles';
import { HeaderNav, Logo, Menu } from '../styles/headerStyles';

import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext';

function Header({ onCursor, toggleMenu, setToggleMenu }) {

    const dispatch = useGlobalDispatchContext();
    const { currentTheme } = useGlobalStateContext();


    const toggleTheme = () => {
        if(currentTheme === 'dark') {
            dispatch({ type: 'TOGGLE_THEME', theme: 'light' });
        }else {
            dispatch({ type: 'TOGGLE_THEME', theme: 'dark' });
        }
    };

    useEffect(() => {
        window.localStorage.setItem('theme', currentTheme);
    }, [currentTheme])

    return (
        <HeaderNav 
        initial={{ y: -72 , opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{duration: 1, ease: [ .6, .05, -.01, .9 ]}}
         >
      
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo 
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    >
                        <Link href='/'>
                            <a>
                            FURR 
                            </a>
                        </Link>
                        <span 
                        onClick={toggleTheme}
                        onMouseEnter={() => onCursor('pointer')}
                        onMouseLeave={onCursor}
                        ></span>
                        <Link href='/'>
                            <a>W</a>
                        </Link>
                    </Logo>

                    <Menu>
                        <button onClick={ () => setToggleMenu(!toggleMenu) }>
                            <span></span>
                            <span></span>
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
