'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    }}>
      {/* Left section with text */}
      <div style={{ maxWidth: '50%' }}>
        <h1 style={{ 
          fontSize: '2.75rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '0.5rem' 
        }}>
          Hi,
        </h1>
        <h2 style={{ 
          fontSize: '2.75rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '0.5rem' 
        }}>
          I'm <span style={{ color: '#4860FF' }}>Asif</span>
        </h2>
        <h3 style={{ 
          fontSize: '2.75rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '2rem' 
        }}>
          Mobile Application Developer
        </h3>
        
        <Link href="#contact" style={{
          backgroundColor: '#4860FF',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.375rem',
          fontWeight: '500',
          display: 'inline-block',
          textDecoration: 'none'
        }}>
          Contact
        </Link>

        {/* Social Media Links */}
        <div style={{
          display: 'flex',
          gap: '1.25rem',
          marginTop: '4rem'
        }}>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="https://pud.dev" target="_blank" rel="noopener noreferrer" aria-label="pud.dev">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#111827"/>
              <path d="M7.5 16.5V7.5H10.5C12.1569 7.5 13.5 8.84315 13.5 10.5C13.5 12.1569 12.1569 13.5 10.5 13.5H9V16.5H7.5ZM9 12H10.5C11.3284 12 12 11.3284 12 10.5C12 9.67157 11.3284 9 10.5 9H9V12ZM16.5 16.5C15.1193 16.5 14 15.3807 14 14V10C14 8.61929 15.1193 7.5 16.5 7.5C17.8807 7.5 19 8.61929 19 10V14C19 15.3807 17.8807 16.5 16.5 16.5ZM15.5 10V14C15.5 14.5523 15.9477 15 16.5 15C17.0523 15 17.5 14.5523 17.5 14V10C17.5 9.44772 17.0523 9 16.5 9C15.9477 9 15.5 9.44772 15.5 10Z" fill="white"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Right section with image */}
      <div style={{ 
        backgroundColor: '#4860FF',
        borderRadius: '50%',
        width: '450px',
        height: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <Image
          src="/profile-image.jpg"
          alt="Asif - Mobile Application Developer"
          width={350}
          height={350}
          style={{
            objectFit: 'cover',
            marginBottom: '-10px'
          }}
          priority
        />
      </div>
    </div>
  );
};

export default Hero; 