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
      console.log(data);
      setListData(data);
    })();
  }, []);

  return (
    <IssuesPageContent>
      <Header />

      <ListContent>
        {listData.map(list => {
          return <IssuesList key={list.id} list={list} />;
        })}
      </ListContent>
    </IssuesPageContent>
  );
};

export default IssuesPage;

const IssuesPageContent = styled.div``;

const ListContent = styled.div``;
