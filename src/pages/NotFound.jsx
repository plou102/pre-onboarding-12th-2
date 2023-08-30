import React from 'react';
import { styled } from 'styled-components';
import gitImg from '../images/GitHub_Logo.svg';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContent>
      <BgImg src={gitImg} alt="github logo" />

      <TextContent>
        <BigText>404</BigText>
        <MidText>NOT FOUND</MidText>
        <SmallText>페이지를 찾을 수 없습니다.</SmallText>
      </TextContent>

      <GoListBtn onClick={() => navigate('/')}>목록으로 이동</GoListBtn>
    </NotFoundContent>
  );
};

export default NotFound;

const NotFoundContent = styled.div`
  width: 50%;
  height: 65vh;
  border-radius: 20px;
  border: 2px solid #2e2e2e;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 5px #6e6e6e;
  padding: 10px 15px 0;
`;

const BgImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
`;

const TextContent = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const BigText = styled.h1`
  font-size: 65px;
  letter-spacing: 5px;
  margin: 0;
  line-height: 40px;
`;

const MidText = styled.h2`
  margin: 0;
`;

const SmallText = styled.h3`
  letter-spacing: 3px;
`;

const GoListBtn = styled.button`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  width: 20%;
  height: 6%;
  background-color: transparent;
`;
