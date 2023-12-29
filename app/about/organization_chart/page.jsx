"use client";
import React from "react";
import Image from "next/image";
import orgChart from "@/assets/about/organization_chart/org.svg";
import styled from "styled-components";

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 70vh;
  padding: 32px;
  margin-bottom: 32px;
 
  border-radius: 8px;
  object-fit: contain;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    padding: 30px;
    max-height: 70vh;
  }

`;


const Line = styled.div`
  height: 5px;
  width: 100%;
  background-color: #f97a00;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #181b57;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 12px;

  @media (max-width: 950px) {
    padding: 24px 0 0 0;
  }
`;

const Header = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 0px;
  justify-content: center;
  align-items: center;
`;
const Page = () => {
  return (
    <div>
    <Wrapper>
        <Header>
          <Title>Organization Chart</Title>
          <Line />
        </Header>
        </Wrapper>
      <StyledImage src={orgChart} alt="organization chart" />
      
    </div>
    
  );
};

export default Page;