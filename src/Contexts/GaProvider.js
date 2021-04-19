import React from 'react';
import ReactGA from 'react-ga';

const GaContext = React.createContext({})

const RouteWatch = ({ history }) => {
    const { key } = history.location;


    return null;
}

const useGa = () => {
    return React.useContext(GaContext);
}

export { useGa }

const GaProvider = ({ children, history }) => {
    React.useEffect(() => {
        ReactGA.initialize('UA-194778071-1');
    }, [])

    React.useEffect(() => {
        history.listen(location => {
            const { pathname, search } = location;

            ReactGA.pageview(pathname + search)
        })

    }, [history])

    return (
        <GaContext.Provider value={{ RouteWatch }}>
            {children}
        </GaContext.Provider>
    )
}

export default GaProvider;
