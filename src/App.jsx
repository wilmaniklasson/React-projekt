
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
      <CreateCard titel={"Sagan om ringen"} Author={"J.R.R. Tolkien"} Låna={"Låna"}/>
      <CreateCard titel={"Jane Eyre"} Author={"Charlotte Brontë"} Låna={"Lånad"}/>
      <CreateCard  titel={"1984"} Author={"George Orwell"} Låna={"Låna"}/>
      <CreateCard titel={"To Kill a Mockingbird"} Author={"Harper Lee"} Låna={"Låna"}/>
      <CreateCard titel={"Pride and Prejudice"} Author={"Jane Austen" } Låna={"Låna"}/>
      
    </section>
    </main>

    </>
  )
}

export default App
