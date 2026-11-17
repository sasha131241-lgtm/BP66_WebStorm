function LibraryStats({books}) {
    const totalBooks = books.length;
    const availableBooks = books.filter((book) =>
        book.copies > 0).length;

    return (
        <section className="stats-section">
            <h2> Статистика библиотек</h2>
            <p> Всего книг в каталоге:{totalBooks}</p>
            <p> Доступные для выдачи:{availableBooks}</p>
        </section>
    );
}

export default LibraryStats;