import MarkdownRender from 'components/MarkdownRender';
import { getIssuesDetail } from '../api/requests';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const IssuesDetail = () => {
  const location = useLocation();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    (async () => {
      const detailData = await getIssuesDetail(location.state);
      setDetail(detailData);
    })();
  });

  const createDate = detail.created_at?.split('T')[0];

  return (
    <DetailContent>
      <Header />

      <TopContent>
        <UserImage src={detail?.user?.avatar_url} />

        <RightContent>
          <RightTop>
            <Number>#{detail.number}</Number>
            <Conmment>코멘트: {detail.comments}</Conmment>
            <Title>{detail.title}</Title>
          </RightTop>

          <RightBottom>
            <span>작성자: {detail?.user?.login}</span>
            <span>작성일: {createDate}</span>
          </RightBottom>
        </RightContent>
      </TopContent>

      <MarkdownRender body={detail.body} />
    </DetailContent>
  );
};

export default IssuesDetail;

const DetailContent = styled.div``;

const TopContent = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 15px;
  border-bottom: 1px solid #6e6e6e;
`;

const UserImage = styled.img`
  width: 15%;
  margin: auto;
`;

const RightContent = styled.div`
  width: 75%;
`;

const RightTop = styled.div`
  margin-bottom: 5px;
`;

const RightBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Number = styled.span`
  font-weight: 500;
`;

const Title = styled.p`
  width: 100%;
  margin: 5px 0;
`;

const Conmment = styled.span`
  display: inline-block;
  text-align: right;
  width: 30%;
`;
