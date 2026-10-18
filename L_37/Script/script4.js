const root = ReactDOM.createRoot(document.getElementById('root'));

const Student = ({name = "Vasya" , age}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>age: {age?? "unknown"}</p>
        </div>
    );
}
// <p>age: {age ? age:"unknown"}</p> // 2 вариант
root.render(
    <>
        <Student age ={20}/>
         <Student name ={"Nick"} age ={30}/>
         <Student name ={"John"}/>


    </>
);

// <Student age = 20/> // Error

