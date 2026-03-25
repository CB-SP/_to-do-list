import './App.css'
import Header from './components/header'
import Card from './components/CardCategory'

function App() {

  return (
    <main className="main">
      <Header></Header>
      
      <section className="cardsArea">
      <Card title="Criadas" desc="Nenhuma tarefa" category='created'></Card>

      </section>
    </main>

  )
}

export default App
