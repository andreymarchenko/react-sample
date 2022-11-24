import React from 'react';
import { Vehicle } from '../modules/main-page/model';

const RestServiceContext = React.createContext<{
    fetchData: (
        callback: (error: string | null, data?: Vehicle[]) => void
    ) => void;
} | null>(null);

export default RestServiceContext;
