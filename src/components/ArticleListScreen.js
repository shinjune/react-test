import React, {Component, createElement} from 'react';
import {Table} from 'semantic-ui-react';
import NavBar from './NavBar';
import styled from 'styled-components';
import * as moment from 'moment';
import 'moment/locale/ko';

// const mockData = [
//   {
//     articleId: '-LB1',
//     author: 'LPS',
//     title: '왜 영어를 반드시 잘 해야하는지',
//     createdAt: '2018-01-01'
//   },
//   {
//     articleId: '-LB2',
//     author: 'LPS',
//     title: '왜 코딩교육이 필요한지',
//     createdAt: '2018-01-01'
//   }
// ]

const ArticleItemRow = styled(Table.Row)`
&:hover {
  cursor: pointer;
  background-color: skyblue;
}
`;
// &: 의사선택자


export default class ArticleListScreen extends Component {
  render() {
    // const {uid, onNickNameClick} = this.props;
    const {nickName,
      onNickNameClick,
      articleArr,
      onArticleClick} = this.props;
    return (
      <div>
        <NavBar nickName={nickName} onNickNameClick={onNickNameClick} />
        Bulletin Board List on S&P500
      <Table >
       <Table.Header>
        <Table.Row>
          <Table.Cell>작성자</Table.Cell>
          <Table.Cell>제목</Table.Cell>
          <Table.Cell>작성일</Table.Cell>
        </Table.Row>
       </Table.Header>
       <Table.Body>
         {
           Array.isArray(articleArr) && articleArr.length > 0
           ?articleArr.map(({articleId, title, author, createdAt}) => (
             <ArticleItemRow key={articleId} onClick={e => onArticleClick(articleId)}>
              <Table.Cell>{author}</Table.Cell>
              <Table.Cell>{title}</Table.Cell>
              <Table.Cell>{moment(createdAt).locale('ko').fromNow()}</Table.Cell>
             </ArticleItemRow>
           ))
           : '게시글이 없어'
         }
       </Table.Body>
      </Table>
      </div>
    )
  }
}
