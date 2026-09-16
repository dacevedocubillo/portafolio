import { useState } from 'react';
const Navbar = () => { const [isOpen,setIsOpen]=useState(false); const close=()=>setIsOpen(false); return (
<nav className="navbar navbar-expand-lg fixed-top navbar-dark"><div className="container">
<a className="navbar-brand fw-bold" href="#" onClick={close}>Daniela Acevedo</a>
<button className="navbar-toggler" onClick={()=>setIsOpen(!isOpen)} aria-label="Toggle navigation" aria-expanded={isOpen}><span className="navbar-toggler-icon"></span></button>
<div className={`collapse navbar-collapse ${isOpen?'show':''}`}><ul className="navbar-nav ms-auto">
<li className="nav-item"><a href="#about" onClick={close} className="nav-link">About</a></li><li className="nav-item"><a href="#skills" onClick={close} className="nav-link">Skills</a></li><li className="nav-item"><a href="#services" onClick={close} className="nav-link">Services</a></li><li className="nav-item"><a href="#projects" onClick={close} className="nav-link">Projects</a></li><li className="nav-item"><a href="#experience" onClick={close} className="nav-link">Experience</a></li><li className="nav-item"><a href="#contact" onClick={close} className="nav-link nav-cta">Contact</a></li>
</ul></div></div></nav> ); };
export default Navbar;
