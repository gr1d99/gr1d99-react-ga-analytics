import React from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom'

const GaContext = React.createContext({})

const GaProvider = ({ history, children }) => {
    React.useEffect(() => {
        ReactGA.initialize('UA-194778071-1');
    }, [])

    React.useEffect(() => {
        history.listen(location => {
            console.log({location})
        })
    }, [history])

    console.log({ history})

    return (
        <GaContext.Provider value={{}}>
            {children}
        </GaContext.Provider>
    )
}

export default GaProvider;
