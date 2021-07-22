import React, { useState } from 'react';
import { connect } from 'react-redux';
import Card from './components/Card/Card';
import {Modal} from './components/Modal/Modal';
import {getCars, addCar} from './redux/carsRedux';
import * as S from './App.Elements';


const Component = ({ cars, newCar }) => {
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState('');

	const setCar = (id) => {
		if(id){
			setModalData(id);
		}else{
			setModalData(null)
		}
		setOpen(true);
	};

	return (
		<S.Container>
			<S.AddCarBtn onClick={() => setCar(null)}>Dodaj nowe auto</S.AddCarBtn>
			{open ? <Modal id={modalData} setOpen={setOpen} /> : null}
			<S.CardsWrapper>
				{cars.map((car) => (
					<Card key={car.id} car={car} setCar={setCar} />
				))}
			</S.CardsWrapper>
		</S.Container>
	);
};

const mapStateToProps = (state) => ({
  cars: getCars(state),
});

const mapDispatchToProps = (dispatch) => ({
  newCar: (item) => dispatch(addCar(item)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {AppContainer as App};
