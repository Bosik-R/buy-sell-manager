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

export const EditModal = styled(CloseModal)`
	top: 60px;
	border-color: ${({edit}) => (edit ? '#00a800' : '#ff0000')};
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

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Col = styled.div`
	padding: 5px 10px;
	margin: 5px 10px;
`;

export const Title = styled.span`
	padding: 0 5px 0 0;
	margin: 0;
`;

export const Input = styled.input`
	padding: 5px 10px;
	border: 1px solid;
	border-color: ${({edit}) => (edit ? '#00a800' : 'transparent')};
  transition: border-color 0.5s ease;
  
  &:focus {
    border-color: transparent transparent #ff0080 transparent;
    outline-style: none;
  }
`;
