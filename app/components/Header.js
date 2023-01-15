import React from 'react'
import { useContext } from 'react';
import {ThemeContext} from '../contexts/theme'


export default function Header(){

    const {isDarkTheme, toggleThemeHandler} = useContext(ThemeContext); // destructuring assinment
    console.log(useContext(ThemeContext));

    return(
        
        <header>

<nav className="fixed z-10 w-full bg-red-400 md:absolute dark:bg-slate-700">
        <div class="container m-auto px-2 md:px-12 lg:px-7">
            <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
                <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
                    <a href="/" aria-label="logo" class="flex space-x-2 items-center">
                        <img src='/assets/coologo.png' class="w-12" alt="tailus logo" width="144" height="133"/>
                        <span class="text-2xl font-bold text-yellow-50">Cookie <span class="text-yellow-50">Stand Admin</span></span>
                    </a>

                    <button aria-label="humburger" id="hamburger" class="relative w-10 h-10 -mr-2 lg:hidden">
                        <div aria-hidden="true" id="line" class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                        <div aria-hidden="true" id="line2" class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                    </button>
                </div>

                <div class="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                    <div class="text-yellow-50 lg:pr-4">
                        <ul class="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                            <li>
                                <a href="#" class="block md:px-4 transition hover:text-yellow-700">
<span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block md:px-4 transition hover:text-yellow-700">
<span>About</span>
                                </a>
                            </li>
                            

                        </ul>
                    </div>

                    {/* <div class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                        <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                            <span class="block text-yellow-800 font-semibold text-sm">
                                Sign up
                            </span>
                        </button> */}
                        <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max bg-zinic-300 dark:bg-white" onClick={toggleThemeHandler}>
                            <span class="block text-yellow-900 font-semibold text-sm ">
                                Change Theme
                            </span>
                        </button>
                    {/* </div> */}
                </div>
            </div>
        </div>
    </nav>
           

        </header>
        

)
}