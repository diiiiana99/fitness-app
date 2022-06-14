import React, { useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Modal = ({ show, onHide, children }) => {
	const modalRef = useRef();

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			onHide();
		}
	};

	const backgroundVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	};

	const modalVariants = {
		initial: {
			opacity: 0,
			y: 200,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				type: 'spring',
				stiffness: 100,
			},
		},
		exit: {
			opacity: 0,
			y: -200,
		},
	};

	useEffect(() => {
		if (show) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
	}, [show]);

	return (
		<AnimatePresence>
			{show && (
				<Background
					variants={backgroundVariants}
					animate="animate"
					initial="initial"
					onClick={closeModal}
					ref={modalRef}
					exit={{
						opacity: 0,
					}}
				>
					<ModalWrapper
						variants={modalVariants}
						animate="animate"
						initial="initial"
						exit={{
							opacity: 0,
							y: '-100vh',
						}}
					>
						{children}
						<CloseModalButton aria-label="Close modal" onClick={onHide} />
					</ModalWrapper>
				</Background>
			)}
		</AnimatePresence>
	);
};

export default Modal;

 const Background = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	top: 0;
	left: 0;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 99;
`;
const ModalWrapper = styled(motion.div)`
	box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
	padding: 40px 30px;
	background: #fff;
	color: #000;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	border-radius: 10px;
	img {
		max-height: 40vh;
	}
`;

 const CloseModalButton = styled.div`
	cursor: pointer;
	position: absolute;
	top: 20px;
	right: 20px;
	width: 32px;
	height: 32px;
	padding: 0;
	z-index: 10;
`;