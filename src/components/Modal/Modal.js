import React, { useState } from 'react';
import * as S from './Modal.Elements';

const Modal = ({ car, setOpen }) => {
	const [data, setData] = useState(car);
	const [edit, setEdit] = useState(false);
	console.log(data);

	return (
		<S.ModalBg>
			<S.Modal>
				<S.CloseModal onClick={() => setOpen(false)}>close</S.CloseModal>
				<S.EditModal edit={edit} onClick={() => setEdit(!edit)}>
					{edit ? 'save' : 'edit'}
				</S.EditModal>
				{edit ? null : <S.Disable />}
				<S.Title>Marka:</S.Title>
				<S.Input
					onChange={(e) => setData({ ...data, name: e.target.value })}
					value={data.name}
					edit={edit}
				/>

				{/* <S.Row>
					<S.Col>
						<S.Title>Marka:</S.Title>
						<S.Input>{car.name}</S.Input>
					</S.Col>
					<S.Col>
						<S.Title>Model:</S.Title>
						<S.Input>{car.model}</S.Input>
					</S.Col>
					<S.Col>
						<S.Title>VIN:</S.Title>
						<S.Input>{car.name}</S.Input>
					</S.Col>
				</S.Row>
				<S.Row>
					<S.Col>
						<S.Title>Nr rej.:</S.Title>
						<S.Input>{car.name}</S.Input>
					</S.Col>
					<S.Col>
						<S.Title>Zakup:</S.Title>
						<S.Input>{car.name}</S.Input>
					</S.Col>
					<S.Col>
						<S.Title>Sprzedaż:</S.Title>
						<S.Input>{car.name}</S.Input>
					</S.Col>
				</S.Row> */}
			</S.Modal>
		</S.ModalBg>
	);
};

export default Modal;
