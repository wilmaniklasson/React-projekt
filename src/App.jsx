
import './App.css'
import CreateCard from './card'
import './card.css'

function App() {
  
  return (
    <>
    <header>
      <h1>Bibblan</h1>
    </header>
    <main>
      <p className='Ptagg'>Våraböcker</p>
    
    <section>
      <CreateCard titel={"Sagan om ringen"} Author={"J.R.R. Tolkien"} />
      <CreateCard titel={"Jane Eyre"} Author={"Charlotte Brontë"} />
      <CreateCard  titel={"1984"} Author={"George Orwell"} />
      <CreateCard titel={"To Kill a Mockingbird"} Author={"Harper Lee"} />
      <CreateCard titel={"Pride and Prejudice"} Author={"Jane Austen" } />
      
    </section>
    </main>

    </>
  )
}

export default App
