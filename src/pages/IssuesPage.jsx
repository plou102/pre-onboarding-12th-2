import React, { useEffect, useRef, useState } from 'react';
import { getIssues } from '../api/requests';
import { styled } from 'styled-components';
import Header from '../components/Header';
import IssuesList from '../components/IssuesList';

const IssuesPage = () => {
  const [listData, setListData] = useState([]);
  const obsRef = useRef(null);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const preventRef = useRef(true);
  const endRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const obsHandler = entries => {
    const target = entries[0];
    if (!endRef.current && target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    (async () => {
      setLoad(true);
      try {
        const data = await getIssues(page);

        for (let i = 0; i <= data.length; i++) {
          if ((i + 1) % 5 === 0) {
            const Ad = {
              ad: true,
            };
            data.splice(i, 0, Ad);
          }
        }
        setListData(prev => [...prev, ...data]);
        preventRef.current = true;
      } catch (error) {
        endRef.current = true;
      } finally {
        setLoad(false);
      }
    })();
  }, [page]);

  return (
    <IssuesPageContent>
      <Header />

      {load && <Loading />}

      <ListContent>
        {listData.map((list, i) => {
          return <IssuesList key={i} list={list} />;
        })}
      </ListContent>

      <div className="" ref={obsRef} />
    </IssuesPageContent>
  );
};

export default IssuesPage;

const IssuesPageContent = styled.div``;

const ListContent = styled.div``;

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
