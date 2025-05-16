'use client';

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Works', href: '#works', id: 'works' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 0',
      marginBottom: '4rem',
      borderBottom: '1px solid #eee'
    }}>
      <div>
        <Link href="/" style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#1e293b'
        }}>
          Mohammed Asif
        </Link>
      </div>
      
      <nav>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                fontWeight: '500',
                color: item.id === activePage ? '#4860FF' : '#64748b',
                position: 'relative',
                padding: '0.25rem 0',
                ...(item.id === activePage ? {
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #4860FF'
                } : {})
              }}
              onClick={() => setActivePage(item.id)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 