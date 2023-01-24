import { createContext, useContext, useState } from "react";

interface ContextWrapProps {
    children: React.ReactNode;
}

interface ContextType {
    modalBGVisible: boolean,
    setModalBGVisible: React.Dispatch<React.SetStateAction<boolean>>,
    bookmarkModalVisible: boolean,
    setBookmarkModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const Context = createContext({} as ContextType);

export const ContextWrap: React.FC<ContextWrapProps> = ({ children }) => {
    const [modalBGVisible, setModalBGVisible] = useState(false);
    const [bookmarkModalVisible, setBookmarkModalVisible] = useState(false);

    return (
        <Context.Provider
            value={{
                modalBGVisible,
                setModalBGVisible,
                bookmarkModalVisible,
                setBookmarkModalVisible
            }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);