import MarkdownRender from 'components/MarkdownRender';
import { getIssuesDetail } from '../api/requests';
import Header from '../components/Header';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

const IssuesDetail = () => {
  const location = useLocation();
  const [detail, setDetail] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const detailData = await getIssuesDetail(location.state);
        setDetail(detailData);
      } catch (error) {
        alert(error);
      } finally {
        setLoad(false);
      }
    })();
  }, []);

  const createDate = detail.created_at?.split('T')[0];

  if (!load) {
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
  } else {
    return <>{load && <Loading />}</>;
  }
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
  margin: auto 0;
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

const Loading = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 64px;
  height: 64px;
  margin-top: -32px;
  margin-left: -32px;
  border-radius: 50%;
  border: 8px solid transparent;
  border-top-color: #2e2e2e;
  border-bottom-color: #585858;
  animation: spinner 0.8s ease infinite;

  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
