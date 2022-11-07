import './App.css';
import { useCallback, useState } from "react";

import useSocket from "./hooks/useSocket";
import ChartBar from "./components/Chart";

const App = () => {
    const [dataset, setData] = useState([
        { number: 100, time: new Date(Date.now() - 1000 * 30), color: '#cd95b0',label: "COIN" },
        { number: 69, time: new Date(Date.now() - 1000 * 25), color: '#cd95b0' , label: "COIN" },
        { number: 43, time: new Date(Date.now() - 1000 * 20), color: '#cd95b0', label: "COIN"  },
        { number: 1, time: new Date(Date.now() - 1000 * 15), color: '#cd95b0', label: "COIN"  },
        { number: 72, time: new Date(Date.now() - 1000 * 10), color: '#cd95b0', label: "COIN"  },
        { number: 52, time: new Date(Date.now() - 1000 * 5), color: '#cd95b0', label: "COIN"  },
        { number: 23, time: new Date(Date.now()), color: '#cd95b0', label: "COIN" },
    ])

    const handleNewNotification = useCallback(data => {
        setData(data)
    }, []);

    useSocket(handleNewNotification);

    return (
        <div className="App">
            <header className="App-header">
                <ChartBar dataset={dataset} />
            </header>
        </div>
    );
}

export default App;