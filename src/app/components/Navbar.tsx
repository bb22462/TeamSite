'use client'
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PaperAirplaneIcon, CommandLineIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
    const [showNav, setShowNav] = React.useState<boolean>(false);
    function changeState() {
        setShowNav(!showNav);
        console.log("yes");
    }
    return (
        <nav className="bg-gray-950">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" onClick={function() {setShowNav(!showNav)}} className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
 
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center text-2xl font-semibold text-white">
                            <h1>Bad Bats</h1>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 transition-all">
        
                                <a href="/" className="transition bg-gray-950 hover:bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">Главная</a>
                                <a href="/news/1" className="transition bg-gray-950 hover:bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">Новости</a>
                                <a href="/team" className="transition bg-gray-950 hover:bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">Команда</a>
                                <a href="https://t.me/bad_bats_ftc" className="transition bg-gray-950 hover:bg-gray-800 text-blue-300 rounded-md px-3 py-2 text-sm font-medium">Telegram <PaperAirplaneIcon className="h-4 w-4 inline"></PaperAirplaneIcon></a>
                                <a href="https://github.com/bb22462" className="transition bg-gray-950 hover:bg-gray-800 text-white rounded-md px-3 py-2 text-sm font-medium">GitHub <CommandLineIcon className="h-4 w-4 inline"></CommandLineIcon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"sm:hidden transition " + (showNav ? "block" : "hidden")} id="mobile-menu">
                <div className="space-y-1 px-2 pb-3 pt-2 text-white">
                    <a href="/" className="transition bg-gray-950 hover:bg-gray-800 block rounded-md px-3 py-2 text-base font-medium">Главная</a>
                    <a href="/news/1" className="transition bg-gray-950 hover:bg-gray-800 block rounded-md px-3 py-2 text-base font-medium">Новости</a>
                    <a href="/team" className="transition bg-gray-950 hover:bg-gray-800 block rounded-md px-3 py-2 text-base font-medium">Команда</a>
                    <a href="https://t.me/bad_bats_ftc" className="transition bg-gray-950 hover:bg-gray-800 block rounded-md px-3 py-2 text-base text-blue-300 font-medium">Telegram <PaperAirplaneIcon className="h-4 w-4 inline"></PaperAirplaneIcon></a>
                    <a href="https://github.com/bb22462" className="transition bg-gray-950 hover:bg-gray-800 block rounded-md px-3 py-2 text-base font-medium">GitHub <CommandLineIcon className="h-4 w-4 inline"></CommandLineIcon></a>
                </div>
            </div>
        </nav>

    )
}