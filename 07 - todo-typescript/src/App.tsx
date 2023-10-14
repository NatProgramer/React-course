import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'
import useTodos from './Hooks/useTodos'

export default function App () {
  const { todos } = useTodos();

  return (
    <div className="todoapp">
      <Header />

      <Todos todos={todos} />

      <Footer />
    </div>
  )
}
