function AvailabilityBadge({ copies }) {
    const isAvailable = copies > 0;

    return (
        <span className={isAvailable ? "badge badge-available" : "badge badge-unavailable"}>
            {isAvailable ? "Доступна" : "Нет в наличии"}
        </span>
    );
}

export default AvailabilityBadge;