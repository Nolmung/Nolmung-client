import ReactGA from 'react-ga4';
import { UaEventOptions } from 'react-ga4/types/ga4';

export const withEvent =
  <T extends (...args: any[]) => unknown>(fn: T, eventInfo: UaEventOptions) =>
  (...args: any[]) => {
    ReactGA.event(eventInfo);
    return fn(...args);
  };
withEvent;
