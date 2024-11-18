import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './styles.css';
import useTheme from '../../Hooks/useTheme';


export default function () {

    const location = useLocation();

    let {isDark} = useTheme();

    useEffect(() => {
        let body = document.body;
        if (isDark) {
            // body class = 'bg-dbg'
            body.classList.add('bg-dbg')
        } else {
            // body class = ''
            body.classList.remove('bg-dbg')
        }

    }, [isDark]);

  return (
    <div className={isDark ? 'bg-dbg text-white' : 'bg-white'}>
        
        <Navbar />

        {/* dynamic router changes contents */}

        <SwitchTransition>
            <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
                <div className='max-w-6xl mx-auto p-3'>
                    <Outlet />
                </div>
            </CSSTransition>
        </SwitchTransition>
        
    </div>
  )
}
