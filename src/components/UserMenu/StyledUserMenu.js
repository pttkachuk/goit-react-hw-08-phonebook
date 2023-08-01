import styled from 'styled-components';

export const UserMenuDiv = styled.div`
margin-right: auto;
margin-left: auto;
`;

export const UserName = styled.p`
margin: 0;
padding: 20px 0;
text-align: center;
`;

export const LogOutBtn = styled.button`
text-align: center;
border: none ;
border-radius: 5px;
padding: 8px 12px;
font-size: 14px;
font-weight: 500;
color: #FF0800;
background-color: transparent;
cursor: pointer;
transition: 0.3s;

&:hover{
    color: white;
    background-color:#FF0800 ;
}
`;

export const BtnDiv = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;