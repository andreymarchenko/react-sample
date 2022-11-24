import '@testing-library/jest-dom/extend-expect';
import * as ResizeObserverModule from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserverModule.default;

Object.defineProperty(window, 'matchMedia', {
    value: () => {
        return {
            matches: false,
            addListener: () => {},
            removeListener: () => {}
        };
    }
})
