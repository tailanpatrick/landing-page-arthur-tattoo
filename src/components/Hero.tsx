/** @jsxImportSource react */
import React from 'react';
import { heroData } from '../data';
import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.6,
		},
	},
};

const Hero = () => {
	const { title, subtitle, btnText, btnIcon } = heroData;

	return (
		<section className="bg-hero bg-cover bg-center min-h-[80vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[-10px]">
			<motion.div
				variants={container}
				initial="hidden"
				whileInView={'show'}
				className="container mx-auto min-h-[80vh] lg:h-full flex items-center justify-center xl:justify-end"
			>
				<div className="text-white text-center lg:text-left lg:max-w-[640px]">
					<motion.h1 variants={fadeIn('down')} className="h1">
						{title}
					</motion.h1>
					<motion.p
						variants={fadeIn('down')}
						className="mb-8 lg:mb-16 max-w-lg leading-relaxed"
					>
						{subtitle}
					</motion.p>

					<motion.div variants={fadeIn('down')}>
						<button className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0">
							{btnText}
							<div>{btnIcon}</div>
						</button>
					</motion.div>
				</div>

				<div
					className="hidden xl:flex absolute -bottom-2 right-0 left-0 before:content-outlineText"
					style={{ opacity: 0.5 }}
				></div>
			</motion.div>
		</section>
	);
};

export default Hero;
