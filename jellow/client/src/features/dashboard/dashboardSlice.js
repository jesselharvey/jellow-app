import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    // boards: [{id: 1, name: 'trello1'}, {id: 2, name: 'trello2'}, {id: 3, name: 'trello3'}],
    columns: [{id: 1, title: 'backlog'}, {id: 2, title: 'todo'}, {id: 3, title: 'doing'}],
    cards: [
      {id: 1, content: 'card1', column_id: 1},
      {id: 2, content: 'card2', column_id: 1},
      {id: 3, content: 'ssdada', column_id: 1},
      {id: 4, content: 'card21', column_id: 1},
      {id: 5, content: 'card132', column_id: 2},
      {id: 6, content: 'card123', column_id: 2},
      {id: 7, content: 'card1sss', column_id: 2},
      {id: 8, content: 'card1234', column_id: 3},
      {id: 9, content: 'card144444', column_id: 3}
    ],
  },
  reducers: {
    // addBoard: (state, action) => {
    //   state.boards = state.boards.push(action.payload)
    // },
    // removeBoard: (state, action) => {
    //   state.boards = state.boards.filter(board => {
    //     return board.id !== action.payload.id
    //   })
    // },
    addColumn: (state, action) => {
      state.columns = state.columns.push(action.payload)
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(column => {
        return column.id !== action.payload.id
      })
    },
    addCard: (state, action) => {
      state.cards = state.cards.push(action.payload)
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => {
        return card.id !== action.payload.id
      })
    }
    //move card?
  },
})


export const { addColumn, removeColumn, addCard, removeCard } = dashboardSlice.actions

// export const addBoardFunc = (board) => (dispatch) => {
//   dispatch(addBoard(board))
// }

// export const removeBoardFunc = (board) => (dispatch) => {
//   dispatch(removeBoard(board))
// }

export const addColumnFunc = (column) => (dispatch) => {
  dispatch(addColumn(column))
}

export const removeColumnFunc = (column) => (dispatch) => {
  dispatch(removeColumn(column))
}

export const addCardFunc = (card) => (dispatch) => {
  dispatch(addCard(card))
}

export const removeCardFunc = (card) => (dispatch) => {
  dispatch(removeCard(card))
}


export const selectColumns = state => state.dashboard.columns;

export const selectCards = state => state.dashboard.cards;


export default dashboardSlice.reducer