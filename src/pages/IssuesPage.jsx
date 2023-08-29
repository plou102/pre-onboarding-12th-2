import React, { useEffect } from 'react';
import { getIssues } from '../api/requests';
import { styled } from 'styled-components';
import Header from '../components/Header';

const IssuesPage = () => {
  useEffect(() => {
    (async () => {
      const data = await getIssues();
      console.log(data);
    })();
  }, []);

  return (
    <IssuesPageContent>
      <Header></Header>
    </IssuesPageContent>
  );
};

export default IssuesPage;

const IssuesPageContent = styled.div``;
