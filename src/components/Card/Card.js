import React, { useState } from 'react';
import * as S from './Card.Elements';

const Card = ({car}) => {
    
    return (
        <S.CardWrapper>
            <S.Row>
                <S.Col>
                    <S.Title>Marka:</S.Title>
                    <S.Content>{car.name}</S.Content>
                </S.Col>
                <S.Col>
                    <S.Title>Model:</S.Title>
                    <S.Content>{car.model}</S.Content>
                </S.Col>
                <S.Col>
                    <S.Title>VIN:</S.Title>
                    <S.Content>{car.id}</S.Content>
                </S.Col>
            </S.Row>
            <S.Row>
                <S.Col>
                    <S.Title>Nr rej.:</S.Title>
                    <S.Content>{car.plates}</S.Content>
                </S.Col>
                <S.Col>
                    <S.Title>Zakup:</S.Title>
                    <S.Content>{car.buyData.date}</S.Content>
                </S.Col>
                <S.Col>
                    <S.Title>Sprzedaż:</S.Title>
                    <S.Content>{car.sellData.date}</S.Content>
                </S.Col>
            </S.Row>

        </S.CardWrapper>
    )
}

export default Card;