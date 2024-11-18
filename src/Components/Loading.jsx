import React from 'react'
import img from '../assets/Spin@1x-1.0s-200px-200px.gif';
import dark from '../assets/darkSpinner.gif';
import useTheme from '../Hooks/useTheme';

export default function Loading() {

  let {isDark} = useTheme()

  return (
    <div className='w-[100px] mx-auto my-[80px] h-screen'>
        <img src={isDark ? dark : img} className='bg-dcard'></img>
    </div>
  )
}
