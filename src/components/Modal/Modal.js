import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getCar, addCar} from '../../redux/carsRedux';
import * as S from './Modal.Elements';

const blank = {
	id: '',
	name: '',
	model: '',
	plates: '',
	buyData: {
		date: '',
		from: '',
		paid: false,
		payDate: ''
	},
	sellData: {
		sold: false,
		date: '',
		to:'',
		invoice: ''
	},
	insurence: {
		name: '',
		expire: '',
		short: false 
	}
}

const Component = ({ car, setOpen, newCar }) => {
	console.log(car);

	const [data, setData] = useState(null);
	const [edit, setEdit] = useState(false);
	const [newEntry, setNewEntry] = useState(false);

	const handleEdit = () => {
		if(newEntry){
			 setEdit(true)
			 newCar(data)
			 setOpen(false)
		}else{
			setEdit(!edit)
		}
	}

	useEffect(() => {
		if (car) {
			setData(car);
		}else{
			setEdit(true);
			setData(blank);
			setNewEntry(true);
		}
	}, [car])

	if(!data){
		return null
	}else {
	return (
		<S.ModalBg>
			<S.Modal>
				<S.CloseModal onClick={() => setOpen(false)}>close</S.CloseModal>
				<S.EditModal edit={edit} onClick={() => handleEdit()}>
					{edit ? 'save' : 'edit'}
				</S.EditModal>
				{edit ? null : <S.Disable />}
				<S.Row>
					<S.Col>
						<S.Title>Marka:</S.Title>
						<S.Input
							onChange={(e) => setData({ ...data, name: e.target.value })}
							value={data.name}
							edit={edit}
						/>
					</S.Col>
					<S.Col>
						<S.Title>Model:</S.Title>
						<S.Input
							onChange={(e) => setData({ ...data, model: e.target.value })}
							value={data.model}
							edit={edit}
						/>
					</S.Col>
					<S.Col>
						<S.Title>VIN:</S.Title>
						<S.Input
							onChange={(e) => setData({ ...data, id: e.target.value })}
							value={data.id}
							edit={edit}
							minLength='17'
							required
						/>
					</S.Col>
					<S.Col>
						<S.Title>Nr rej.</S.Title>
						<S.Input
							onChange={(e) => setData({ ...data, plates: e.target.value })}
							value={data.plates}
							edit={edit}
						/>
					</S.Col>
				</S.Row>
			</S.Modal>
		</S.ModalBg>
	);
			}
};

const mapStateToProps = (state, props) => ({
		car: getCar(state, props.id)
});


const mapDispatchToProps = (dispatch) => ({
  newCar: (item) => dispatch(addCar(item)),
});

const ModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);


export {ModalContainer as Modal};
