
function App() {
  return (
    <>
      <Todo title='Go to Gym' description='GYM at 6AM' isDone={true} />
    </>
  )
}

interface TodoProp{
  title: string,
  description: string,
  isDone: boolean
}

function Todo(props: TodoProp){
  return <div>
    <p>{props.title}</p> <br />
    <p>{props.description}</p> <br />
    <p>{props.isDone}</p> <br />
  </div>
}

export default App
