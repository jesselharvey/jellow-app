import { createSlice } from '@reduxjs/toolkit'

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    columns: [],
    cards: [],
  },
  reducers: {
    addColumn: (state, action) => {
      state.columns = state.columns.push(action.payload)
    },
    removeColumn: (state, action) => {
      state.columns = state.columns.filter(column => {
        column.id !== action.payload.id
      })
    },
    addCard: (state, action) => {
      state.cards = state.cards.push(action.payload)
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter(card => {
        card.id !== action.payload.id
      })
    },
    //move card?
    
  }
})