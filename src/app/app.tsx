import React from 'react';
import { Layout, ErrorPage } from '../components';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import MainPage from '../modules/main-page';

const App = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorPage}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    );
};

export default App;
