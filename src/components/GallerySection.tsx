import React, { useState } from 'react';

import { galleryData } from '../data';

import { PhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

import 'yet-another-react-lightbox/styles.css';

const slides = galleryData.images.map(({ original, width, height }) => ({
	src: original,
	width,
	height,
}));

const GallerySection = () => {
	// index state
	const [index, setIndex] = useState(-1);

	const { title, images, btnIcon, btnText } = galleryData;

	return (
		<section
			className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0"
			id="gallery"
		>
			<div className="container mx-auto">
				<motion.h2
					variants={fadeIn('up')}
					initial="hidden"
					whileInView={'show'}
					viewport={{ once: false, amount: 0.6 }}
					className="h2 max-w-[370px] lg:mb-20"
				>
					{title}
				</motion.h2>
			</div>

			{/* Photo album */}
			<motion.div
				variants={fadeIn('up')}
				initial="hidden"
				whileInView={'show'}
				viewport={{ once: false, amount: 0.2 }}
				className="mb-8 lg:mb-20"
			>
				<PhotoAlbum
					onClick={(event, photo, index) => setIndex(index)}
					layout="rows"
					photos={images}
				/>
				<Lightbox
					slides={slides}
					styles={{
						container: {
							backgroundColor: 'rgba(0,0,0,.9)',
						},
					}}
					open={index >= 0}
					index={index}
					close={() => setIndex(-1)}
				/>
			</motion.div>
			{/* Btn */}
			<motion.div
				variants={fadeIn('up')}
				initial="hidden"
				whileInView={'show'}
				viewport={{ once: false, amount: 0.2 }}
				className="flex justify-center"
			></motion.div>
		</section>
	);
};

export default GallerySection;
