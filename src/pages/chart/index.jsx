import {useCallback, useState} from "react";

import {ReactComponent as Loader} from "../../assets/img/Rolling-1s-200px.svg";

import ChartBar from "../../components/Chart";
import useSocket from "../../hooks/useSocket";

const Chart = () => {
    const [dataset, setData] = useState([])

    const handleNewNotification = useCallback(data => {
        setData(data)
    }, []);

    useSocket(handleNewNotification);

    if(!dataset.length){
        return <div>We receive data up to 5 seconds
            <Loader />
        </div>
    }

    return(
        <ChartBar dataset={dataset} />
    )
}

export default Chart;