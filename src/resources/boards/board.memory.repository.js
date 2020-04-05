const { find, findIndex, assign, remove } = require('lodash');

const Board = require('./board.model');

const boards = [
  {
    id: '1',
    title: 'board1',
    columns: [
      {
        id: 'column#1',
        title: 'column1',
        order: 0
      },
      {
        id: 'column#2',
        title: 'column2',
        order: 1
      },
      {
        id: 'column#3',
        title: 'column3',
        order: 2
      }
    ]
  },
  {
    id: '2',
    title: 'board2',
    columns: [
      {
        id: 'column#4',
        title: 'column4',
        order: 0
      },
      {
        id: 'column#5',
        title: 'column5',
        order: 1
      },
      {
        id: 'column#6',
        title: 'column6',
        order: 2
      }
    ]
  }
];

const getAll = async () => boards;

const createBoard = async boardData => {
  const newBoard = new Board(boardData);
  boards.push(newBoard);
  return newBoard;
};

const getBoard = async boardId => find(boards, { id: boardId });

const updateBoard = async (boardId, data) => {
  const boardInd = findIndex(boards, { id: boardId });
  boards[boardInd] = assign(boards[boardInd], data);
  return boards[boardInd];
};

const deleteBoard = async boardId => {
  remove(boards, { id: boardId });
};

module.exports = {
  getAll,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard
};
