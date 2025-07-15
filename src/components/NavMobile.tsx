import React from 'react';

import { navData } from '../data';

import Socials from './Socials';

type NavMobileProps = {
	setNavMobile: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({ setNavMobile }: NavMobileProps) => {
	const { items } = navData;

	return (
		<nav className="w-full h-full flex-col justify-evenly overflow-hidden">
			<ul className="flex flex-col justify-center items-center gap-y-6 py-24 mb-8 ">
				{items.map((item, index) => (
					<li key={index}>
						<a
							className="text-2xl font-primary uppercase"
							href={item.href}
							onClick={() => setNavMobile(false)}
						>
							{item.name}
						</a>
					</li>
				))}
			</ul>
			<div className="text-2xl ">
				<Socials />
			</div>
		</nav>
	);
};

export default NavMobile;
