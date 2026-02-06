import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Prevent browser from restoring scroll position on refresh
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);

        return () => {
            // Optional: Restore to auto if needed, but for this app 'manual' + scrollTo(0,0) is desired behavior
            if ('scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
            }
        };
    }, [pathname]);

    return null;
};

export default ScrollToTop;
