import { createContext, useContext, useState } from "react";

interface ContextWrapProps {
    children: React.ReactNode;
}

interface ContextType {
    bookmarkModalVisible: boolean,
    setBookmarkModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkFormModalVisible: boolean,
    setBookmarkFormModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkModalEdit: boolean,
    setBookmarkModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkFormModalEdit: boolean,
    setBookmarkFormModalEdit: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkMenuModalVisible: boolean,
    setBookmarkMenuModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    closeModal: () => void,
}

const Context = createContext({} as ContextType);

export const ContextWrap: React.FC<ContextWrapProps> = ({ children }) => {
    const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);
    const [bookmarkFormModalVisible, setBookmarkFormModalVisible] = useState(false);
    const [bookmarkMenuModalVisible, setBookmarkMenuModalVisible] = useState(false);
    const [bookmarkModalEdit, setBookmarkModalEdit] = useState(false);
    const [bookmarkFormModalEdit, setBookmarkFormModalEdit] = useState(false);

    const closeModal = () => {
        setBookmarkModalVisible(false);
        setBookmarkFormModalVisible(false);
    }

    return (
        <Context.Provider
            value={{
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