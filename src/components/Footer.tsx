import React from 'react';
import { footerData } from '../data';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const staggerContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.3,
			delayChildren: 0.2,
		},
	},
};

const Footer = () => {
	const { about, links, newsletter, program } = footerData;
	return (
		<footer className="section bg-dark">
			<div className="container mx-auto">
				<motion.div
					variants={staggerContainer}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.1 }}
					className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
				>
					<motion.div
						variants={fadeIn('up')}
						className="flex-1 flex flex-col gap-y-6"
					>
						<div className="font-primary text-xl tracking-[0.08em] uppercase">
							{about.title}
						</div>
						<div className="leading-relaxed text-[#dbdbdb] ">
							{about.subtitle}
						</div>

						<div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb">
							<div className="flex items-center gap-x-[10px]">
								<div>{about.address.icon}</div>
								<div>{about.address.name}</div>
							</div>
							<div className="flex items-center gap-x-[10px]">
								<div>{about.phone.icon}</div>
								<div>{about.phone.number}</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeIn('up')}
						className="flex-1 flex flex-col xl:items-center"
					>
						<div>
							<div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
								{links.title}
							</div>
							<ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
								{links.items.map((item, index) => {
									const { name, href } = item;

									return (
										<li key={index}>
											<a
												href={href}
												className="hover:text-white transition"
											>
												{name}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</footer>
	);
};

export default Footer;
