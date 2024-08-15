import { atom } from 'jotai'

import { purchaseFrequencyRangeAtom } from 'src/store/purchase-frequency/atom'

export const setFromAtom = atom<null, string[], void>(null, (_, set, value) => {
  set(purchaseFrequencyRangeAtom, (range) => ({ ...range, from: value }))
})

export const setToAtom = atom<null, string[], void>(null, (_, set, value) => {
  set(purchaseFrequencyRangeAtom, (range) => ({ ...range, to: value }))
})
