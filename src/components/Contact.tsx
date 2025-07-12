import React, { FormEvent, useState } from 'react';

import { contactData } from '../data';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
	const { form, info, title } = contactData;

	const [name, setName] = useState('');
	const [message, setMessage] = useState('');
	const phoneNumber = '3193514090';

	const handleWhatsapp = (e: FormEvent) => {
		e.preventDefault();

		const finalMessage =
			message === ''
				? 'Olá, vi seu portifólio, gostaria de conversar sobre uma tatoo que quero fazer. '
				: message;

		window.open(
			`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
				`*Nome: ${name || 'Não informado'}*\n\n${finalMessage}`
			)}`,
			'_blank'
		);
	};

	return (
		<section className="section ">
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-y-10 w-full">
					<motion.div
						variants={fadeIn('right')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.4 }}
						className="flex-1"
					>
						<h2 className="h2 max-w-[490px]">{title}</h2>
						<div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
							{info.map((item, index) => {
								const {
									email,
									address,
									link,
									phone,
									subtitle,
									title,
								} = item;
								return (
									<div key={index}>
										<div className="font-primary uppercase font-medium text-xl mb-3">
											{title}
										</div>
										<div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
											{subtitle}
										</div>

										<div className="flex flex-col gap-y-3 mb-8">
											<div className="flex items-center gap-[10px]">
												<div>{address.icon}</div>
												<div className="font-medium">
													{address.name}
												</div>
											</div>

											<div className="flex items-center gap-[10px]">
												<div>{phone.icon}</div>
												<div className="font-medium">
													{phone.number}
												</div>
											</div>
										</div>
										<a
											className="inline-flex flex-col gap-x-3 gap-y-3 items-center font-bold border-b p-3 border-dark pb-[5px] hover:bg-[#eee] transition duration-300"
											href="https://www.google.com/maps/place/Av.+Universo,+747+-+Copacabana,+Belo+Horizonte+-+MG,+31540-550/@-19.8334541,-43.9901421,17z/data=!3m1!4b1!4m6!3m5!1s0xa691cebbfbff85:0xbe9eb2e16a25fe57!8m2!3d-19.8334541!4d-43.9875672!16s%2Fg%2F11w49k3l61?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
											target="_bank"
										>
											{address.icon} {link}
										</a>
									</div>
								);
							})}
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('left')}
						initial="hidden"
						whileInView={'show'}
						viewport={{ once: false, amount: 0.4 }}
						className="flex-1 xl:pl-[40px] flex justify-center items-center"
					>
						<form
							className="flex flex-col w-full gap-y-5"
							onSubmit={handleWhatsapp}
						>
							<input
								className="w-full border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
								placeholder={form.name}
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								className="w-full border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
								placeholder={form.message}
								type="text"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<button className="btn btn-sm btn-dark self-start mt-4">
								{form.btnText}
							</button>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
