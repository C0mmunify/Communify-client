import React from 'react';
import { runLogs } from '../../actions';

const RunLogs = () => {

    return(
        <button onClick={runLogs()}>Run Logs</button>
    )
}

export default RunLogs
