import React from "react";
import styled from "styled-components";

const button = ({ label, onClick }) => {
  return (
    <Button data-testid="button" onClick={onClick}>
      {label}
    </Button>
  );
};

export default button;

const Button = styled.button`
  border: 1px solid gray;
  padding: 10px;
  background: inherit;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
