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

  return (
    <DetailContent>
      <Header />
      <p>{detail.comments}</p>
    </DetailContent>
  );
};

export default IssuesDetail;

const DetailContent = styled.div``;
