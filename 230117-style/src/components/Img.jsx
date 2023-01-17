import React from 'react';
import img from '../images/곰과병아리.jpg';

export default function Img() {
  return (
    <>
      <img src={img} alt="src 곰과병아리" />
      <img src="/images/곰과병아리.jpg" alt="public 곰과병아리" />
    </>
  );
}
