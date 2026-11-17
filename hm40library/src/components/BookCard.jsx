import Card  from "./Card.jsx";
import AvailabilityBadge from "./AvailablityBadge.jsx";

function BookCard({ book }) {
    return (
        <Card>
            <div className="book-card-header">
                <h3>{book.title}</h3>
                <AvailabilityBadge copies={book.copies} />
            </div>
            <p><strong>Автор:</strong> {book.author}</p>
            <p><strong>Год издания:</strong> {book.year}</p>
            <p><strong>Жанр:</strong> {book.genre}</p>
            <p><strong>Доступно экземпляров:</strong> {book.copies}</p>
            {book.year < 2000 && (
                <p className="classic-badge">Классическое издание</p>
            )}
        </Card>
    );
}

export default BookCard;