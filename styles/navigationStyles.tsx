import styled from 'styled-components';
import { motion } from 'framer-motion';


export const Nav = styled(motion.div)`
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: block;
     background: ${props => props.theme.red};
     color: ${props => props.theme.text};
     z-index: 100;
     overflow: hidden;
`;

export const NavHeader = styled.div`
    position: relative;
    top: 72px;
    h2 {
        color: ${props => props.theme.background};
    }
`;

export const CloseNav = styled.div`
          button {
        transform-origin: center;
        background: none;
        border: none;
        padding: 20px;
        outline: none;
        span {
            width:36px;
            height: 8px;
            display: block;
            background: ${props => props.theme.background};
            margin: 8px;
        }
    }
`;
export const NavList = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
         
         ul {
             padding: 0;
             li {
                list-style-type: none;
                font-size: 3rem;
                text-transform: uppercase;
                font-weight: 900;
                height: 96px;
                line-height: 96px;
                overflow: hidden;
                
                a {
                    color: inherit;
                    text-decoration: none;
                }

                .link {
                    color: ${props => props.theme.background};
                    position: relative;
                    display: flex;
                    align-items: center;

                    .arrow {
                         height: 76px;
                         margin-right: 8px;
                         
                         svg {
                             width: 100px;
                             path{ fill: ${props => props.theme.background} };
                         }
                    }
                }
             }
         }
`;

export const NavFooter = styled.div`
`
export const NavVideo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 25%;
    z-index: -1;
    height: 100%;
    width: 100%;
    background: #000;

    .reveal{
        width: 100%;
        background: ${props => props.theme.red};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
    }

    .video {
        background: #000;
        position: absolute;
        height: 100%;
        margin: 0;
        z-index: -1;
        
        video {
            height: 100%;
        }
    }
`;
