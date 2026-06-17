import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {

    // テーマの状態管理（初期値はライトモード）
    const [theme, setTheme] = useState("light");

    // 現在のモードを反転（ライドモード・ダークモード）
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // 子コンポーネントにテーマを提供
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}