import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Coursal from '../components/Coursal'


export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div><Coursal/></div>
            <div><Card/></div>
            <div><Footer /></div>
        </div>
    )
}
