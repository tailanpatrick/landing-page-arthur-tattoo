import React, { useEffect, useState } from 'react';

// import components
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import GallerySection from './components/GallerySection';
import Skills from './components/Skills';
import Interview from './components/Interview';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

const App = () => {
	const [navMobile, setNavMobile] = useState(false);

	useEffect(() => {
		if (navMobile) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}, [navMobile]);

	return (
		<div className="max-w-[1920px] mx-auto overflow-hidden bg-white">
			<Header navMobile={navMobile} setNavMobile={setNavMobile} />
			<Hero />
			<About />
			<GallerySection />
			<Skills />
			<Interview />
			<Contact />
			<Footer />
			<Copyright />
			{/* <div className='h-[4000px]'></div> */}
		</div>
	);
};

export default App;
