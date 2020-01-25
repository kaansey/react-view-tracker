import React from 'react';
interface ViewTrackerProps {
    children: JSX.Element;
    onShow?(entry?: IntersectionObserverEntry): void;
    onHide?(entry?: IntersectionObserverEntry): void;
    onStartObserving?(container?: any): void;
    onStopObserving?(container?: any): void;
    setRootContainer?(): Element;
    once?: boolean;
    visiblePercentage?: number | Array<number>;
    offset?: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
}
declare const _default: React.NamedExoticComponent<ViewTrackerProps>;
export default _default;
