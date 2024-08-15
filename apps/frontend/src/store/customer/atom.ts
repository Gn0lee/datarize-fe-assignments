import { atom } from 'jotai'
import { SortingState } from '@tanstack/react-table'

export const searchNameAtom = atom('')
export const sortingStatesAtom = atom<SortingState>([])
