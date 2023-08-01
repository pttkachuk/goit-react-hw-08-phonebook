import styled from 'styled-components';

export const StyledRegTitle = styled.h1`
text-align: center;
`;

export const StyledRegDiv = styled.div`
border: none;
border-radius: 5px;
background-color: #f2f2f2;
max-width: 400px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
padding: 20px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const StyledRegForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const StyledRegSpan = styled.span`
font-size: 20px;
font-weight: 500;
text-align: center;
margin-bottom: 5px;
`;

export const StyledRegLabel = styled.label`
display: flex;
  flex-direction: column;
`;

export const StyledRegInput = styled.input`
max-width: 100%;
  min-width: 300px;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const StyledRegBtn = styled.button`
padding: 10px 20px;
border: none;
border-radius: 5px;
cursor: pointer;
color: white;
font-weight: 500;
background-color: #1560bd;
transition: transform 250ms cubic-bezier(0.56, 0.57, 0.76, 0.76);

&:hover{
    background-color: #7B68EE;
    transform: scale(1.1);
}
`;