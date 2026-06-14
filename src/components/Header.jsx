

export function Header({ siteTitle = 'サイト名未設定' }) {
    // const siteTitle = 'Reactの基礎を学ぼう';

    return (
        <header>
            <nav>
                <h1>{siteTitle}</h1>
                <ul>
                    <li><a href="#">HOME</a></li>
                </ul>
            </nav>
        </header>
    );
}