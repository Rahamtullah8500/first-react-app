import React from 'react';
import {FaTh,FaBars, FaUserAlt,FaAppStoreIos,FaWrench,FaWordpress,FaProjectDiagram, FaRegChartBar,FaReceipt, FaCommentAlt, FaShoppingBag, FaThList, FaHome} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Sidebar() {
    const[isOpen , setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);


    const menuItems=[
    {
        path:'/blank',
        name:'Home',
        icon:<FaHome/>

    },

    {
        path : '/dashboard',
        name:'Dashboard',
        icon:<FaTh/>
    },

    {
        path : '/about',
        name:'About',
        icon:<FaUserAlt/>
    },


    {
        path : '/Analytics',
        name:'Analytics',
        icon:<FaRegChartBar/>
    },


    {
        path : '/comment',
        name:'Comment',
        icon:<FaCommentAlt/>
    },
    
    {
        path : '/product',
        name:'Product',
        icon:<FaShoppingBag/>
    },

    {
        path : '/productList',
        name:'Product List',
        icon:<FaThList/>
    },
    {
        path:'/',
        name:'Rules',
        icon:<FaReceipt/>
    },
    {
        path:'/',
        name:'Apps',
        icon:<FaAppStoreIos/>
    },
    {
        path:'/',
        name:'Projects',
        icon:<FaProjectDiagram/>
    },
    {
        path:'/',
        name:'Workspace',
        icon:<FaWordpress/>
    },
    {
        path:'/',
        name:'Settings',
        icon:<FaWrench/>
    }
    ]



    return (
        <div className='container'>
            <div className='sidebar' style={{width: isOpen ? "200px" : "48px" }}>
                <div className='top_section'>
                    <div style={{display: isOpen ? "block" : "none" }} className="logo">Logo</div>
                    <div style={{marginLeft: isOpen ? "90px" : "-6px" }} className='bars'><FaBars onClick={toggle}/></div>
                </div>
                { 

                    menuItems.map((item, index) => (
                        
                        <Link to={item.path} key={index} className='link' >
                            <div className='icon'>{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none" }} className='link_text'>{item.name}</div>
                        </Link>
                       
                    ))
                   
                }
            </div>
                

        </div>
    )
}