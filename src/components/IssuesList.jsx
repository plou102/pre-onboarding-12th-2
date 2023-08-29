import React from 'react';
import { styled } from 'styled-components';

const IssuesList = ({ list }) => {
  const createDate = list.created_at.split('T')[0];
  return (
    <ListContent>
      <TopContent>
        <Number>#{list.number}</Number>
        <Title>{list.title}</Title>
        <Conmment>코멘트: {list.comments}</Conmment>
      </TopContent>

      <BottomContent>
        <User>작성자: {list.user.login}</User>
        <CreateDate>작성일: {createDate}</CreateDate>
      </BottomContent>
    </ListContent>
  );
};

export default IssuesList;

const ListContent = styled.div`
  padding: 5px 0;
  margin-bottom: 10px;
  width: 100%;
  border-bottom: 1px solid #6e6e6e;
`;

const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const BottomContent = styled.div`
  display: flex;
  gap: 10px;
`;

const Number = styled.span`
  display: inline;
`;

const Title = styled.span`
  display: inline-block;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Conmment = styled.span`
  display: inline-block;
  text-align: right;
`;

const User = styled.span``;

const CreateDate = styled.span``;
