import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { fadeIn } from '../variants';
import { motion } from 'framer-motion';

const styles = {
	path: { stroke: '#111111' },
	trail: { stroke: '#eeeeee' },
	text: { fill: '#111111', fontSize: '24px' },
};

const tattooStyles = [
	{ label: 'OldㅤSchool', target: 90 },
	{ label: 'New School', target: 85 },
	{ label: 'Realismo', target: 80 },
	{ label: 'Blackwork', target: 75 },
	{ label: 'Tribal', target: 70 },
	{ label: 'Oriental', target: 65 },
	{ label: 'Minimalista', target: 60 },
	{ label: 'Lettering', target: 95 },
];

const Skills = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });

	const [progressValues, setProgressValues] = useState(
		tattooStyles.map(() => 0)
	);

	useEffect(() => {
		if (!inView) return;

		const interval = setInterval(() => {
			setProgressValues((prev) =>
				prev.map((value, index) => {
					const target = tattooStyles[index].target;
					return value < target ? value + 1 : value;
				})
			);
		}, 30);

		// Para quando todos chegarem ao valor alvo
		if (progressValues.every((val, i) => val >= tattooStyles[i].target)) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [inView, progressValues]);

	return (
		<motion.section
			ref={ref}
			className="section font-primary"
			variants={fadeIn('up')}
			initial="hidden"
			whileInView={'show'}
			viewport={{ once: false, amount: 0.1 }}
		>
			<div className="container mx-auto my-12">
				<div className="flex flex-col justify-between items-center gap-y-12 xl:flex-row xl:gap-[35px]">
					{tattooStyles.map((style, index) => (
						<div
							key={style.label}
							className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6"
						>
							<CircularProgressbar
								strokeWidth={1}
								value={progressValues[index]}
								text={`${progressValues[index]}%`}
								styles={styles}
							/>
							<div className="uppercase font-light tracking-[1.2px] text-center">
								{style.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.section>
	);
};

export default Skills;
