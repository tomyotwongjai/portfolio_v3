import { useState, useEffect } from 'react';
import {BsFillArrowUpSquareFill} from 'react-icons/bs';
import './ScrollUp.scss';


    function ScrollUp() {

        const [showScroll, setShowScroll] = useState(false);


        useEffect(() => {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 400) {
                    setShowScroll(true);
                } else {
                    setShowScroll(false);
                }
            });
        }, []);

        const goToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        return (
            <>
                {showScroll &&
                    <BsFillArrowUpSquareFill className="scroll-up" onClick={goToTop} />}

            </>);
    }

export default ScrollUp;