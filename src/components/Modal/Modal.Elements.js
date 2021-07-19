import styled from 'styled-components';

export const ModalBg = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: grid;
	place-items: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 997;
`;

export const Modal = styled.div`
	position: relative;
	width: 1000px;
	height: 100px;
	padding: 20px;
	background-color: #ffffff;
`;

export const CloseModal = styled.h2`
	position: absolute;
	top: 15px;
	right: 15px;
	width: 80px;
	cursor: pointer;
	padding: 3px;
	margin: 0;
	z-index: 999;
	border: 1px solid black;
	border-radius: 5px;
	text-align: center;
`;

export const EditModal = styled.h2`
	position: absolute;
	text-align: center;
	top: 60px;
	right: 15px;
	width: 80px;
	cursor: pointer;
	padding: 3px;
	margin: 0;
	z-index: 999;
	border: 1px solid black;
	border-radius: 5px;
`;

export const Disable = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: transparent;
	z-index: 998;
`;

export const Title = styled.span`
	padding: 0 5px 0 0;
	margin: 0;
`;

export const Input = styled.input`
	padding: 5px 10px;
	border: ${({ edit }) => (edit ? '1px solid #008000' : 'none')};
`;
