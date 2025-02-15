import { DeviceCommand } from "./command";

export interface DeviceResultTypes {
    [DeviceCommand.setStatusLed]: Record<string, never>;
    [DeviceCommand.setAutoNightVision]: Record<string, never>;
    [DeviceCommand.setMotionDetection]: Record<string, never>;
    [DeviceCommand.setSoundDetection]: Record<string, never>;
    [DeviceCommand.setPetDetection]: Record<string, never>;
    [DeviceCommand.setRTSPStream]: Record<string, never>;
    [DeviceCommand.setAntiTheftDetection]: Record<string, never>;
    [DeviceCommand.setWatermark]: Record<string, never>;
    [DeviceCommand.enableDevice]: Record<string, never>;
    [DeviceCommand.lockDevice]: Record<string, never>;
    [DeviceCommand.getPropertiesMetadata]: { properties: Record<string, unknown>; };
    [DeviceCommand.getProperties]: { properties: Record<string, unknown>; };
    [DeviceCommand.setProperty]: Record<string, never>;
}
