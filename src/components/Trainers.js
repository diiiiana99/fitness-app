import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import Modal from './Modal';
import { eventsData } from '../utils/data';

import styled from 'styled-components';


const Trainers = () => {
	const animation = useAnimation();
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
			});
		}
	}, [inView, animation]);

	const handleClick = (index) => {
		setShowModal(true);
		setSelectedImage(index);
	};

	return (
		<>
			<Section>
				<Container>
                    <EventHeading
						initial={{ opacity: 0, scale: 0.3 }}
						transition={{ duration: 0.4 }}
						animate={animation}
					>
						Find More Classes
					</EventHeading>
                    <MasonryGrid ref={ref}>
						{eventsData.map((item, index) => (
							<EventImageWrapper
								animate={animation}
								initial={{
									opacity: 0,
									scale: 0.3,
								}}
								transition={{ duration: 0.8 }}
								className={item.class}
								key={index}
								onClick={() => handleClick(index)}
							>
								<Image src={item.img}></Image>
							</EventImageWrapper>
						))}
					</MasonryGrid>
				</Container>
			</Section>
			<Modal show={showModal} onHide={() => setShowModal(false)}>
				<ContentHeading inverse>Title</ContentHeading>
				<ImgWrapper>
					<Img src={eventsData[selectedImage].img} alt="image" />
				</ImgWrapper>
				<Subtitle mt inverse>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis
					corrupti officia commodi distinctio nesciunt ex quas quibusdam ipsam
					perspiciatis hic debitis eveniet porro, culpa autem ducimus atque numquam quos.
				</Subtitle>

				<ContentButton inverse>Get Started</ContentButton>
			</Modal>
		</>
	);
};

export default Trainers;


 const MasonryGrid = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 250px;
	grid-auto-flow: dense;
	margin-top: 4rem;
	@media screen and (max-width: 550px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		> a > img {
			max-height: 300px;
			object-position: center;
		}
	}
`;
 const EventImageWrapper = styled(motion.div)`
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&.wide {
		grid-column: span 2;
	}
	&.tall {
		grid-row: span 2;
	}
	&.big {
		grid-column: span 2;
		grid-row: span 2;
	}
	&:before {
		background: rgb(0, 0, 0, 0.7);
		content: 'Find more';
		position: absolute;
		width: 100%;
		z-index: 1;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 100%;
		transform: translateX(-100%);
		bottom: 0;
		color: white;
	}
	&:hover:before {
		transform: translateX(0);
		transition: transform 0.3s ease;
	}
	&:hover {
		> img {
			filter: blur(8px);
		}
	}
`;
const EventHeading = styled(motion.h2)`
	font-size: clamp(3.5rem, 10vw, 10rem);
	margin-bottom: 2rem;
	color: #1a1f3d;
	width: 100%;
	-webkit-letter-spacing: 4px;
	-moz-letter-spacing: 4px;
	-ms-letter-spacing: 4px;
	letter-spacing: 4px;
	text-align: center;
	text-transform: capitalize;
`;

 const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
	object-position: bottom;
	display: inline-block;
	position: relative;
	opacity: 0.7;
`;
const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: ${({ inverse }) => (inverse ? 'black' : 'white')};
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid #aa0000;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:before {
		background: #aa0000;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 0%;
		height: 100%;
	}
	&:hover:before {
		width: 200%;
	}
	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}
`;

 const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 700px;
	justify-content: center;
	position: relative;
	background-color: #aa0000;
	padding: 4px 0;
	max-height: 40%;
`;

const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-top: ${({ mt }) => (mt ? '1.3rem' : '0')};
	margin-bottom: 35px;
	line-height: 24px;
	color: ${({ inverse }) => (inverse ? '#6a6a6a' : 'white')};
	font-size: clamp(0.8rem, 2vw, 1rem);
`;


const ContentHeading = styled(motion.h2)`
	margin: 1rem 0 0.5rem;
	font-size: clamp(1.3rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 600;
	color: ${({ inverse }) => (inverse ? 'black' : 'white')};
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	/* height: 400px; */
	max-height: 700px;
	z-index: 1;
`;
const Container = styled.div`
	width: 100%;
	max-width: 1330px;
	margin: 0 auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;
const Section = styled.div`
	color: white;
	padding: 160px;
	background: ;
`;