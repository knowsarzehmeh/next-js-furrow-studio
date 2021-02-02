import {createContext, useReducer, useContext } from 'react';


// Define the context
const GlobalStateContext = createContext(null); 
const GlobalDispatchContext = createContext(null); 
const CursorDispatchContext = createContext(null);

// Reducer
const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return {
                ...state,
               currentTheme: action.theme
            }
        case 'CURSOR_TYPE':
            return {
                ...state,
               cursorType: action.cursorType
            }
    
        default:
            throw new Error(`Unhandeled action type: ${action.type}`);
    }
}

export const GlobalProvider = ({ children }) => {
     const getDefaultTheme = () => {
            if(process.browser){
               const theme = window.localStorage.getItem('theme') === null ? 'dark' : window.localStorage.getItem('theme');
               return theme;
            }else {
                // Use Cookie - because we are in SSR mode
                return 'dark';
            }
        }

  const [state, dispatch] = useReducer(globalReducer,{
        currentTheme: getDefaultTheme(),
        cursorType: false,
        cursorStyles: [ "pointer", "hovered", "locked"]
    });

 

    // define cursor move context
    const onCursor = cursorType => {
        cursorType = (state.cursorStyles.includes(cursorType) && cursorType) || false;
        dispatch({
            type: 'CURSOR_TYPE',
            cursorType
        });
    };
    

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
          <GlobalStateContext.Provider value={state}>
              <CursorDispatchContext.Provider value={onCursor}>
                 {children}
              </CursorDispatchContext.Provider>
          </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    );
};




export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
export const useCursorDispatchContext = () => useContext(CursorDispatchContext);