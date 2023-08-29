import React, { useEffect } from 'react';
// import { getIssues } from '../api/requests';
import { styled } from 'styled-components';
import Header from '../components/Header';

const IssuesPage = () => {
  useEffect(() => {
    (async () => {
      // const data = await getIssues();
    })();
  }, []);

  return (
    <IssuesPageContent>
      <Header />
    </IssuesPageContent>
  );
};

export default IssuesPage;

const IssuesPageContent = styled.div``;
