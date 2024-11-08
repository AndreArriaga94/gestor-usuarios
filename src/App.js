import { useState } from 'react'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'
import UserForm from './components/UserForm'

function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario  
    ]) 
  }
  
  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{padding:20}}>
            <UserForm submit={submit}></UserForm> 
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(x=> 
              <li key={x.email}>{`${x.name} ${x.lastName}: ${x.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;