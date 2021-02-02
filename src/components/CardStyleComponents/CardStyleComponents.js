import styled, { keyframes } from 'styled-components';

const Container = styled.div`
max-width: 1140px;
padding: 0 15px;
margin: 0 auto;
`

const ContainerTitle = styled.h3`
color: black;
`

const Card = styled.div`
width: 22rem;
height: 28rem;
background: black;
border-radius: .25rem;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
border: 5px solid;
padding: 10px;
`

const CardInfo = styled.div`
padding: 10px;
`

const CardImg = styled.img`
width: 25px;
height: 25px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`

const CardTitle = styled.div`
position: absolute;
left: 50%;
transform: translate(-50%, -100%);
position: middle;
color: white;
font-size: 18px;
font-family: sans-serif;
margin: 24px auto;
`

export { Container, ContainerTitle, Card, CardInfo, CardImg, CardTitle }