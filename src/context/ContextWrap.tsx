import { createContext, useContext, useState } from "react";
import { FilterTagType } from "../components/FilterTag/FilterTag";

const data = {
    bookmarks: [
        'Favorites',
        'Wisdom'
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
interface ContextType {
    bookmarks: string[],
    addBookmark: (name: string) => void,
    updateBookmark: (name: string, index: number) => void,
    deleteBookmark: (index: number) => void,
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
        return {
            filter: f,
            active: false
        }
    })

    const [bookmarks, setBookmarks] = useState(data.bookmarks);
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
        setBookmarks(ov => [...ov, name])
    }

    const updateBookmark = (name: string, index: number) => {
        setBookmarks(ov => {
            return ov.map((v, i) => (i === index) ? name : v)
        })
    }

    const deleteBookmark = (index: number) => {
        setBookmarks(ov => {
            return ov.filter((v, i) => i !== index)
        })
    }

    return (
        <Context.Provider
            value={{
                bookmarks,
                addBookmark,
                updateBookmark,
                deleteBookmark,
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