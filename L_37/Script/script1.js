// import "../css/app.css"

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const hello = <h1>Наш учебный центр</h1>;

const title =<div>
    <h1>Учебный центр</h1>
    <br/>
    <hr/>
    <img src="qqq.jpg" alt="FOTO"/>
    <p>Welcome</p>
</div>;

    const a = 10;
    const b = 20;
    const college = "Tel Ran";

    const adress ={
        city: "Tel Aviv",
        street: "HaYarkon",
        number: 100
    }

    const age = 18;

    const myStyle = {
        color: "green",
        fontSize: "30px"
    }

const fragment =<>
    <h1 style={{color: "red"}}>Учебный центр{college.toUpperCase()}</h1>
    <p  style={{color: "blue",fontSize:"50px"}}>Welcome, sum = {a+b} </p>
    <p>City: {adress.city}</p>
    <p>Street: {adress.street}</p>
    <p style={myStyle}>Age: {age}</p>
    <p>{age>=18 ? "Adult" : "Child"}</p>
</>
// <p>City {adress}</ // Error object выводиться по элементам
// <p> {If (age >= 18) "Adults"}</p> // Error5
root.render(fragment);


const studentName = "John Doe";
// const studentInfo = <h1>Hello, {studentName}!</h1>;
//  const studentInfo = <h1>Hello, {studentName}!</h1>; // Error1
//  const studentInfo = <h1>Hello, studentName!</h1>; // Error2
//
// root.render(studentInfo);
