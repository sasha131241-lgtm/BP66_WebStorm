const root = ReactDOM.createRoot(document.getElementById('root'));

const Group = () => {
    const subTitle = "This is a subtitle";
    return (
        <div>
      <h1>Hello, Alex!</h1>
        <h2>{subTitle} - {Math.random()}</h2>
    </div>
    );
};

root.render(
    <>
        <Group />
        <Group />
        <Group />
    </>
);