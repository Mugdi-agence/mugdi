'use client';

import { useState } from 'react';
import Loader from './loader';

export default function LoaderWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
            {children}
        </>
    );
}