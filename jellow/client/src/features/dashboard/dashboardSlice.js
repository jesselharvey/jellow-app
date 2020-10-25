import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    users: [],
    // [
    // {id: 1, name: 'guy1', img: "https://images.alexonsager.net/pokemon/fused/135/135.134.png"},
    // {id: 2, name: 'guy2', img: "https://images.alexonsager.net/pokemon/fused/79/79.93.png"},
    // {id: 3, name: 'girl1', img: "https://images.alexonsager.net/pokemon/fused/68/68.48.png"}],
    // boards: [{id: 1, name: 'trello1'}, {id: 2, name: 'trello2'}, {id: 3, name: 'trello3'}],
    columns: [], //[{id: 1, title: 'backlog'}, {id: 2, title: 'todo'}, {id: 3, title: 'doing'}],
    cards: [],
    // [
      // {id: 1, content: 'card1', column_id: 1},
      // {id: 2, content: 'card2', column_id: 1},
      // {id: 3, content: 'ssdada', column_id: 1},
      // {id: 4, content: 'card21', column_id: 1},
      // {id: 11, content: 'card1', column_id: 1},
      // {id: 12, content: 'card2', column_id: 1},
      // {id: 13, content: 'ssdada', column_id: 1},
      // {id: 14, content: 'card21', column_id: 1},
      // {id: 5, content: 'card132', column_id: 1},
      // {id: 6, content: 'card113', column_id: 1},
      // {id: 7, content: 'card1sss', column_id: 1},
      // {id: 8, content: 'card1234', column_id: 1},
      // {id: 9, content: 'card144444', column_id: 1},
      // {id: 15, content: 'card132', column_id: 1},
      // {id: 16, content: 'card113', column_id: 1},
      // {id: 17, content: 'card1sss', column_id: 1},
      // {id: 18, content: 'card1234', column_id: 1},
      // {id: 19, content: 'card144444', column_id: 1}
    // ],
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
    asyncFetchColumns: (state, action) => {
      state.columns = action.payload
    },

    asyncFetchCards: (state, action) => {
      state.cards = action.payload
    },

    addColumnFunc: (state, action) => {
      state.columns.push(action.payload)
    },

    removeColumnFunc: (state, action) => {
      state.columns = state.columns.filter(column => {
        return column.id !== action.payload.id
      })
    },

    addCard: (state, action) => {
      state.cards.push(action.payload)
    },

    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => {
        return card.id !== action.payload.id
      })
    }
    //move card?
  },
})


export const { 
  addColumnFunc,
  removeColumnFunc, 
  addCard, 
  removeCard, 
  asyncFetchColumns,
  asyncFetchCards
  } = dashboardSlice.actions

// export const addBoardFunc = (board) => (dispatch) => {
//   dispatch(addBoard(board))
// }

// export const removeBoardFunc = (board) => (dispatch) => {
//   dispatch(removeBoard(board))
// }

// GET REQUESTS
export const fetchColumns = () => (dispatch) => {
  axios.get('/api/board/columns').then((resp) => {
    // console.log(resp.data)
    dispatch(asyncFetchColumns(resp.data))
  })
}

export const fetchCards = () => (dispatch) => {
  axios.get('/api/board/cards').then((resp) => {
    // console.log(resp.data)
    dispatch(asyncFetchCards(resp.data))
  })
}

// POST REQUESTS
export const addColumn = (text) => (dispatch) => {
  axios.post('/api/board/columns', {title: text, projects_id: 1}).then(resp => {
    console.log(resp)
    dispatch(addColumnFunc(resp.data))

  })
}

export const addCardFunc = (card) => (dispatch) => {
  dispatch(addCard(card))
}

// DELETE REQUESTS
export const removeColumn = (column) => (dispatch) => {
  axios.delete('/api/board/' + column.id).then((resp) => {
    console.log(resp)
    dispatch(removeColumnFunc(column))

  })
}

export const removeCardFunc = (card) => (dispatch) => {
  dispatch(removeCard(card))
}


export const selectColumns = state => state.dashboard.columns;

export const selectCards = state => state.dashboard.cards;

export const selectUsers = state => state.dashboard.users;

export default dashboardSlice.reducer