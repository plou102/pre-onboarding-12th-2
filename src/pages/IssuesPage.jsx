import React, { useEffect, useState } from 'react';
import { getIssues } from '../api/requests';
import { styled } from 'styled-components';
import Header from '../components/Header';
import IssuesList from '../components/IssuesList';

const IssuesPage = () => {
  const [listData, setListData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getIssues();

      for (let i = 0; i < data.length; i++) {
        if ((i + 1) % 5 === 0 && i !== 0) {
          const Ad = {
            ad: true,
          };
          data.splice(i, 0, Ad);
        }
      }

      setListData(data);
    })();
  }, []);

  return (
    <IssuesPageContent>
      <Header />

      <ListContent>
        {listData.map((list, i) => {
          return <IssuesList key={i} list={list} />;
        })}
      </ListContent>
    </IssuesPageContent>
  );
};

export default IssuesPage;

const IssuesPageContent = styled.div``;

const ListContent = styled.div``;
