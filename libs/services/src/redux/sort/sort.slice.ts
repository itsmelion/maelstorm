import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from '../store';

import { useAppDispatch, useAppSelector } from '../hooks';

interface SortConfig {
  sort: 'asc' | 'desc'
}

const initialState: SortConfig = {
  sort: 'asc',
}

const slice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    toggleSort: (state) => {
      state.sort = state.sort === 'asc' ? 'desc' : 'asc';
    },
  },
});


// Store Accessors and Mutators

/**
 * Sorting state
 * @returns value and toggle method.
 */
export const useSort = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state: RootState) => state.sort.sort);

  return {
    value,
    toggle: () => dispatch(slice.actions.toggleSort()),
  }
};


export const { reducer } = slice;
