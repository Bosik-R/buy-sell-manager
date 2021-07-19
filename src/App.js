import React, { useState } from 'react';
import Card from './components/Card/Card';
import Modal from './components/Modal/Modal';
import * as S from './App.Elements';

const car = [
	{
		id: 'WETGHTTF454464596',
		name: 'Opel',
		model: 'Combo',
		plates: 'ESI76776',
		buyData: {
			date: '02.02.2021',
			from: 'Opel Dealer Sp.z o.o.',
			paid: true,
			payDate: '08.02.2021',
		},
		sellData: {
			date: '',
			to: 'Alnabala Car Comp',
			invoice: 'FV/10/02/2021',
		},
	},
	{
		id: 'WETGHTTF454461111',
		name: 'Opel',
		model: 'Corsa',
		plates: 'ESI76700',
		buyData: {
			date: '02.02.2021',
			from: 'Opel Dealer Sp.z o.o.',
			paid: true,
			payDate: '08.02.2021',
		},
		sellData: {
			date: '',
			to: 'Alnabala Car Comp',
			invoice: 'FV/10/02/2021',
		},
	},
];

const App = () => {
	const [open, setOpen] = useState(false);
	const [modalData, setModalData] = useState('');

	const setCar = (id) => {
		const filtered = car.filter((c) => c.id === id);
		setModalData(filtered[0]);
		setOpen(true);
	};

	return (
		<S.Container>
			{open ? <Modal car={modalData} setOpen={setOpen} /> : null}
			<S.CardsWrapper>
				{car.map((c) => (
					<Card key={c.id} car={c} setCar={setCar} />
				))}
			</S.CardsWrapper>
		</S.Container>
	);
};

export default App;
