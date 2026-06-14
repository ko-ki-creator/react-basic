

export function MainContent({ progress = 0 }) {
    return (
        <main>
            <section>
                <h3>学習の進捗状況：{progress}%</h3>
                {progress === 100 && <p>おめでとうございます！全ての学習が完了しました。</p> }
                {progress >= 50 && progress < 100 && <p>後半戦です！気を抜かずに頑張りましょう。</p>}
                {progress < 50 && <p>これからですね！小さな積み重ねが大きな成果になりますよ。</p>}
            </section>
        </main>
    );
}