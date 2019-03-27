import styled from 'styled-components';
import media from '../../theme/media';

export const MainContainer = styled.div`
margin-top:30px;
margin-left:100px;
margin-right:100px;
${media.tablet`
margin-top:30px;
margin-left:150px;
margin-right:150px;
`}
${media.phone`
margin-top:30px;
margin-left:20px;
margin-right:20px;
`}
`;


export const NewsFeedContainer = styled.div`

`;

export const ImageContainer =styled.div`
width:100%;
`;

export const NewsImage =styled.img`
width:500px;
height:300px;
border-radius:30px;
${media.tablet`
max-width:100%
height:auto
`}
${media.phone`
max-width:100%
height:auto;
`}

`;
export const NewsContent =styled.div`
width:100%;
${media.tablet`

font-size:1vh;
`}
${media.phone`
font-size:1vh;
`}


`;
export const Button =styled.button`
border-radius:40px;
width:10%;
height:50px;
${media.tablet`

margin-bottom:10px;
width:100%;
font-size:1vh;
`}
${media.phone`

margin-bottom:10px;
width:100%;
font-size:1vh;
`}
`;