import './App.css'
import Header from './components/header'
import Card from './components/CardCategory'

function App() {

  return (
    <main className="main">
        <Header></Header>
        
        <section className="cardsArea">
        <Card title="Criadas" desc="Nenhuma tarefa" category="created" className="card"></Card>
        <Card title="Pendentes" desc="Nenhuma tarefa" category="pendent"></Card>
        <Card title="Canceladas" desc="Nenhuma tarefa" category="canceled"></Card>
        </section>
    </main>

  )
}

export default App
