import { create } from 'zustand';

interface SearchTerms {
  searchTerms: Map<number, string>;
  addSearchTerm: (term: string) => void;
}

const useSearchStore = create<SearchTerms>((set, get) => ({
  searchTerms: new Map(),
  addSearchTerm: (searchTerm: string) => {
    set((state) => {
      const isSame = Array.from(state.searchTerms.entries()).find(
        ([number, term]) => searchTerm.includes(term) || searchTerm.startsWith(term),
      );
      const isMoveKeys = state.searchTerms.size > 1 && !isSame;

      const clonedMap = new Map<number, string>();
      if (isMoveKeys) {
        state.searchTerms.forEach((val, key) => {
          if (key !== 3) {
            clonedMap.set(key + 1, val);
          }
        });
      }

      return {
        searchTerms: isMoveKeys
          ? clonedMap.set(1, searchTerm)
          : isSame
          ? new Map(state.searchTerms).set(state.searchTerms.size, searchTerm)
          : clonedMap.set(1, searchTerm),
      };
    });
  },
}));

export default useSearchStore;