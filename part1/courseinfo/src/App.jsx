const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.amount}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {/*  using these other prop names for clarity, so I can learn what refers to what*/}
      <Part title={props.part1} amount={props.exercises1} />
      <Part title={props.part2} amount={props.exercises2} />
      <Part title={props.part3} amount={props.exercises3} />
    </div>
  );
};

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      {/* The left course matches the props.course that Header uses. The "course" on the right comes from the value defined in that variable here in App. */}
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
