import { StationCommand } from "./command";

export interface StationResultTypes {
    [StationCommand.reboot]: Record<string, never>;
    [StationCommand.setGuardMode]: Record<string, never>;
    [StationCommand.isConnected]: { connected: boolean };
    [StationCommand.connect]: Record<string, never>;
    [StationCommand.disconnect]: Record<string, never>;
    [StationCommand.getPropertiesMetadata]: { properties: Record<string, unknown>; };
    [StationCommand.getProperties]: { properties: Record<string, unknown>; };
    [StationCommand.setProperty]: Record<string, never>;
    /*[StationCommand.getCameraInfo]: Record<string, never>;
    [StationCommand.getStorageInfo]: Record<string, never>;*/
}
