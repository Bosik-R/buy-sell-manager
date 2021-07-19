import styled from 'styled-components';

export const CardWrapper = styled.div`
    width: 660px;
    padding: 5px 10px;
    color: #000000;
    background-color: #ffffff;
    margin-bottom: 13px;
    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const Col = styled.div`
    display: flex;
    width: 220px;
    padding: 0 5px;
`;

export const Title = styled.span`
    padding: 0 5px 0 0;
    margin: 0;
`;

export const Content = styled.span`
padding: 0;
margin: 0;
font-weight: bolder;
`;