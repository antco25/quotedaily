import { createContext, useContext, useState } from "react";
import { FilterTagType } from "../components/FilterTag/FilterTag";
import { Bookmark, CurrentQuote, Quote, SavedQuote } from "./dataTypes";

const data = {
    bookmarks: [
        { id: 'b1', name: 'Favorites' },
        { id: 'b2', name: 'Wisdom' }
    ],
    savedQuotes: [
        { id: 's1', bookmarkId: 'b1', quoteId: 'lTm3ZNHDrh7' },
        { id: 's2', bookmarkId: 'b1', quoteId: 'MNoB9t3dfeS' },
        { id: 's3', bookmarkId: 'b1', quoteId: 'S78ad3jDcyA' }
    ],
    filters: [
        'wisdom',
        'courage',
        'inspiration'
    ] as FilterTagType[]
}

interface ContextWrapProps {
    children: React.ReactNode;
}

//TODO: Remove setFilters
//TODO: Remove bookmarkModalEdit
//TODO: Generate unique ID
interface ContextType {
    bookmarks: Bookmark[],
    addBookmark: (name: string) => void,
    updateBookmark: (name: string, index: number) => void,
    deleteBookmark: (index: number) => void,
    savedQuotes: SavedQuote[],
    addSavedQuote: (bookmarkId: string, quoteId: string) => SavedQuote,
    updateSavedQuote: (savedQuote: SavedQuote) => SavedQuote,
    deleteSavedQuote: (id: string) => void,
    currentQuote?: CurrentQuote,
    setCurrentQuote: React.Dispatch<React.SetStateAction<CurrentQuote | undefined>>,
    filters: { filter: FilterTagType, active: boolean }[],
    setFilters: React.Dispatch<React.SetStateAction<{ filter: FilterTagType, active: boolean }[]>>,
    bookmarkModalVisible: boolean,
    setBookmarkModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkFormModalVisible: boolean,
    setBookmarkFormModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkModalEdit: boolean,
    setBookmarkModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkFormModalEdit: { edit: boolean, index: number },
    setBookmarkFormModalEdit: React.Dispatch<React.SetStateAction<{ edit: boolean, index: number }>>,
    bookmarkMenuModalVisible: boolean,
    setBookmarkMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
}

const Context = createContext({} as ContextType);

export const ContextWrap: React.FC<ContextWrapProps> = ({ children }) => {
    const _filters = data.filters.map(f => {
        return { filter: f, active: false }
    })

    const [bookmarks, setBookmarks] = useState<Bookmark[]>(data.bookmarks);
    const [savedQuotes, setSavedQuotes] = useState<SavedQuote[]>(data.savedQuotes);
    const [currentQuote, setCurrentQuote] = useState<CurrentQuote | undefined>();
    const [filters, setFilters] = useState(_filters);
    const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);
    const [bookmarkFormModalVisible, setBookmarkFormModalVisible] = useState(false);
    const [bookmarkMenuModalVisible, setBookmarkMenuModalVisible] = useState(false);
    const [bookmarkModalEdit, setBookmarkModalEdit] = useState(false);
    const [bookmarkFormModalEdit, setBookmarkFormModalEdit] = useState({ edit: false, index: -1 });

    const closeModal = () => {
        setBookmarkModalVisible(false);
        setBookmarkFormModalVisible(false);
    }

    const addBookmark = (name: string) => {
        const newId = 'b' + Math.floor(Math.random() * 1000);
        setBookmarks(ov => [...ov, { id: newId, name: name }])
    }

    const updateBookmark = (name: string, index: number) => {
        setBookmarks(ov => {
            return ov.map((v, i) => (i === index) ? { ...v, name: name } : v)
        })
    }

    const deleteBookmark = (index: number) => {
        const bookmarkId = bookmarks[index].id;

        setBookmarks(ov => {
            return ov.filter((_, i) => i !== index)
        })

        setSavedQuotes(ov => {
            return ov.filter(v => v.bookmarkId !== bookmarkId);
        })
    }

    const addSavedQuote = (bookmarkId: string, quoteId: string) => {
        const newId = 's' + Math.floor(Math.random() * 1000);
        const savedQuote = { id: newId, bookmarkId: bookmarkId, quoteId: quoteId };
        setSavedQuotes(ov => [...ov, savedQuote]);
        return savedQuote;
    }

    const updateSavedQuote = (savedQuote: SavedQuote) => {
        setSavedQuotes(ov => {
            return ov.map(v => (v.id !== savedQuote.id) ? v : savedQuote)
        })

        return savedQuote;
    }

    const deleteSavedQuote = (id: string) => {
        setSavedQuotes(ov => {
            return ov.filter(v => v.id !== id);
        })
    }

    return (
        <Context.Provider
            value={{
                bookmarks,
                addBookmark,
                updateBookmark,
                deleteBookmark,
                savedQuotes,
                addSavedQuote,
                updateSavedQuote,
                deleteSavedQuote,
                currentQuote,
                setCurrentQuote,
                filters,
                setFilters,
                bookmarkModalVisible,
                setBookmarkModalVisible,
                bookmarkFormModalVisible,
                setBookmarkFormModalVisible,
                bookmarkModalEdit,
                setBookmarkModalEdit,
                bookmarkFormModalEdit,
                setBookmarkFormModalEdit,
                bookmarkMenuModalVisible,
                setBookmarkMenuModalVisible,
                closeModal
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);