

export function Footer({ siteTitle = 'サイト名未設定', currentYear = new Date().getFullYear() }) {
    // const siteTitle = 'Reactの基礎を学ぼう';
    // const currentYear = new Date().getFullYear(); // 現在の年数を取得

    return (
        <footer>
            <p>&copy; {currentYear} {siteTitle}</p>
        </footer>
    );
}