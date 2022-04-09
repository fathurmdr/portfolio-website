import React, { useEffect, useState } from 'react'

const navigation = [
    {name: "Home"},
    {name: "Portfolio"},
    {name: "Resume"},
    {name: "Contact"},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
    const [humburgerActive, setHumburgerActive] = useState(false)

    // Navbar Fixed
    window.onscroll = function () {
        const header = document.querySelector('header');
        const fixedNav = header.offsetTop;
    
        if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        } else {
        header.classList.remove('navbar-fixed');
        }
    };
    

    

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className='container lg:px-16'>
                <div className='flex items-center justify-between relative'>
                    <div className='px-2'>
                        <a href='#home' className='font-bold text-lg text-primary block py-3'>
                            <img src='img/logo.png' alt='Fathu Rahman' className='h-8'/>
                        </a>
                    </div>
                    <div className='flex items-center px-2'>
                        <button type='button' className={classNames("block absolute right-2 lg:hidden",humburgerActive?"hamburger-active":"")} onClick={()=>setHumburgerActive(!humburgerActive)}>
                            <span className="w-[30px] h-[4px] my-1.5 block bg-primary transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="w-[30px] h-[4px] my-1.5 block bg-primary transition duration-300 ease-in-out"></span>
                            <span className="w-[30px] h-[4px] my-1.5 block bg-primary transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>
                        <nav className={classNames('absolute py-2 bg-white shadow-lg rounded-lg max-w-[200px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none',!humburgerActive?'hidden':'')}>
                            <ul class="block lg:flex">
                                {navigation.map(el=>
                                    <li class="group">
                                        <a href="#home"><p className='text-base text-slate-500 font-medium py-2 mx-6 flex group-hover:text-sky-400'>{el.name}</p></a>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </header>
    )
}
