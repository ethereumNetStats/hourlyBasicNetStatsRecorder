//Define the type of the client => server events.
import {basicNetStats, blockNumberWithTimestamp} from "./types";

type ServerToClientEvents = {
    newBlockDataRecorded: (blockNumberWithTimestamp: blockNumberWithTimestamp) => void,
};

//Define the type of the client => server events.
type ClientToServerEvents = {
    hourlyBasicNetStatsRecorded: (emitDate: basicNetStats) => void,
};

export type {ServerToClientEvents, ClientToServerEvents}
