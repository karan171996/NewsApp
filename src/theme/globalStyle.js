import styled from 'styled-components';
import media from './media';
export const Relative = styled.div`
 position:relative;
`;


export const Flex =styled.div`
display:flex;
${media.phone`
flex-direction: column;
height: 100%;
`}
${media.tablet`
flex-direction: column;
height: 100%;
`}
`;