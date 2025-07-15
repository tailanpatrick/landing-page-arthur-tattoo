import Logo from './img/header/logo.svg';
import GalleryImg1 from './img/gallery/1.png';
import GalleryImg2 from './img/gallery/2.png';
import GalleryImg3 from './img/gallery/3.png';
import GalleryImg4 from './img/gallery/4.png';
import GalleryImg5 from './img/gallery/5.png';
import GalleryImg6 from './img/gallery/6.png';
import GalleryImg7 from './img/gallery/7.png';
import GalleryImg8 from './img/gallery/8.png';
import QuoteImg from './img/testimonial/quote.svg';

// import icons

import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
	IoLogoInstagram,
	IoLogoPinterest,
	IoLogoTwitter,
	IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
	logo: Logo,
};

export const navData = {
	items: [
		{ href: '#hero', name: 'Inicio' },
		{ href: '#about', name: 'Sobre' },
		{ href: '#gallery', name: 'Galeria' },
		{ href: '#interview', name: 'No Estúdio' },
		{ href: '#contact', name: 'Contato' },
	],
};

export const socialData = [
	{ href: '/', icon: <GrFacebookOption /> },
	{ href: '/', icon: <IoLogoInstagram /> },
	{ href: '/', icon: <IoLogoPinterest /> },
	{ href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
	title: 'Prazer, Arthur Tattoo. ⭑',
	subtitle:
		'Cada tatuagem conta uma história única. Deixe sua marca com um trabalho feito com paixão, técnica e personalidade.',
	btnText: 'veja a galeria',
	btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
	title: 'Minha trajetória:',
	subtitle1:
		'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.',
	subtitle2:
		'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.',
	btnText: 'Saiba mais',
	btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
	title: 'Veja minha Galeria:',
	btnText: 'Ver todas',
	btnIcon: <IoMdArrowForward />,
	images: [
		{
			src: GalleryImg1,
			original: GalleryImg1,
			width: 465,
			height: 412,
		},
		{
			src: GalleryImg2,
			original: GalleryImg2,
			width: 465,
			height: 540,
		},
		{
			src: GalleryImg3,
			original: GalleryImg3,
			width: 465,
			height: 412,
		},
		{
			src: GalleryImg4,
			original: GalleryImg4,
			width: 465,
			height: 540,
		},
		{
			src: GalleryImg5,
			original: GalleryImg5,
			width: 465,
			height: 540,
		},
		{
			src: GalleryImg6,
			original: GalleryImg6,
			width: 464,
			height: 412,
		},
		{
			src: GalleryImg7,
			original: GalleryImg7,
			width: 465,
			height: 540,
		},
		{
			src: GalleryImg8,
			original: GalleryImg8,
			width: 465,
			height: 412,
		},
	],
};

export const interviewData = {
	title: '“Sua pele, sua história. A gente só eterniza.”',
	btnText: 'Assista agora',
	btnIcon: <FaPlay />,
};

export const testimonialData = [
	{
		quoteImg: QuoteImg,
		message:
			"The entire team is extremely kind and friendly. They're fantastic. They're great at what they do! And it's unique.They will properly consult with you.",
		name: 'Jack Geoffrey',
		occupation: 'Tattoo Artist',
	},
	{
		quoteImg: QuoteImg,
		message:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam culpa asperiores officia natus dignissimos autem possimus molestias aperiam?',
		name: 'Douglas Hane',
		occupation: 'Tattoo Artist',
	},
];

export const contactData = {
	title: 'Entre em contato comigo:',
	info: [
		{
			title: 'Estúdio',
			subtitle:
				'Se você tem uma ideia, dúvida ou quer agendar sua tatuagem, estou à disposição para conversar.',
			address: {
				icon: <FaMapMarkerAlt />,
				name: 'Av. Universo, 747 - Copacabana, Belo Horizonte - MG, 31540-550',
			},
			phone: {
				icon: <FaPhoneAlt />,
				number: '+55 (31) 9351-4090',
			},
			email: {
				icon: <FaEnvelope />,
				address: 'contact@yourcompany.com',
			},
			link: 'Ver no Maps',
		},
	],
	form: {
		name: 'Digite seu nome aqui',
		email: 'Digite seu email',
		message: 'Escreva sua menssagem',
		btnText: 'Enviar Menssagem via Whatsapp',
	},
};

export const footerData = {
	about: {
		title: 'Arthur Tattoo',
		subtitle: 'Tatuagens autorais com estilo e personalidade.',
		address: {
			icon: <FaMapMarkerAlt />,
			name: '1630 Elm Drive, New York City',
		},
		phone: {
			icon: <FaPhoneAlt />,
			number: '+49 34 36573355',
		},
		email: {
			icon: <FaEnvelope />,
			address: 'contact@yourcompany.com',
		},
	},
	links: {
		title: 'Links Úteis',
		items: [
			{ href: '#about', name: 'Sobre mim' },
			{ href: '/', name: 'Galeria' },
			{ href: '/#interview', name: 'No Estúdio' },
			{ href: '#contact', name: 'Entre em Contato' },
		],
	},
	program: {
		title: 'Working Time',
		items: [
			{ name: 'Mon - Tue / Appointment' },
			{ name: 'Wed - Fri / 10:00 - 9:00pm' },
			{ name: 'Sat / 10:00 - 6:00pm' },
			{ name: 'Sun / no work on this day' },
		],
	},
	newsletter: {
		title: 'Newsletter',
		subtitle:
			'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
		form: {
			placeholder: 'Your email address',
			icon: <FiSend />,
		},
	},
};
