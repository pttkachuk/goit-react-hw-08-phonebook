import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
display: flex;
`;

export const Cont = styled.div`
padding-top: 10px;
padding-bottom: 10px;
margin-left: auto;
margin-right: auto;
`;

export const StyledLink = styled(Link)`
padding-left: 10px;
padding-right: 10px;
color: black;
font-size: 35px;
text-decoration: none;
transition: 0.3s;
&:hover{
color: #6CB4EE;
}
`