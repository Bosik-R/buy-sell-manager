import React, {useState} from 'react';
import Card from './components/Card/Card';
import * as S from './App.Elements';

const car = {
  id: 'WETGHTTF454464596',
  name: 'Opel',
  model: 'Combo',
  plates: 'ESI76776',
  buyData: {
      date: '02.02.2021',
      from: 'Opel Dealer Sp.z o.o.',
      paid: true,
      payDate: '08.02.2021'
  },
  sellData : {
      date: '',
      to: 'Alnabala Car Comp',
      invoice: 'FV/10/02/2021'
  }
}


const App = () => {
  const [open, setOpen] = useState(flase);

  return (
    <S.Container>
      <S.CardsWrapper>
        
        <Card car={car} onClick={() => setOpen(true)}/>
        <Card car={car} onClick={() => setOpen(true)}/>
        <Card car={car} onClick={() => setOpen(true)}/>
      </S.CardsWrapper>
    </S.Container>
  );
}

export default App;
