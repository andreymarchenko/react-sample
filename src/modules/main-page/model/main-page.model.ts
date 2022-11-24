import { ReactNode } from 'react';

type VehicleType = 'car' | 'airplane' | 'train';

export type Vehicle = {
    id: number;
    type: VehicleType;
    brand: string;
    colors: string[];
    img: string;
};

export type VehicleFilter = {
    type?: string;
    brand?: string;
    color?: string;
};

export type Option = {
    label: string;
    value: string;
};

export enum RightPanelPosition {
    BOTTOM = 'bottom',
    RIGHT = 'right'
}

export const MOBILE_SCREEN_MAX_WIDTH = 768;

export interface ListProps {
    data: Vehicle[];
    typeDisplayName: string;
    loading: boolean;
}

export interface SelectProps {
    label: string;
    onChange: (value: any, option: Option | Option[]) => void;
    options: Option[];
    disabled?: boolean;
}

export interface FloatingButtonProps {
    onClick: () => void;
    icon: ReactNode;
    tooltipText?: string;
}

export enum ParameterName {
    TYPE = 'type',
    BRAND = 'brand',
    COLOR = 'color'
}

export interface RightPanelProps {
    title: string;
    opened: boolean;
    placement: RightPanelPosition;
    onClose: () => void;
    children?: ReactNode;
}
