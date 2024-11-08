import useFormulario from '../hooks/useFormulario'
import Input from './Input'
import Button from './Button'

const UserForm = ({submit}) => {
    const [formulario, handleChange, reset] = useFormulario({
        name: '',
        lastName: '',
        email: '',
      })
    const handleSubmit = (e) =>{
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return(
        <form onSubmit={handleSubmit}>
            <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange} placeHolder="Nombre"/>
            <Input label="Apellido" name="lastName" value={formulario.lastName} onChange={handleChange} placeHolder="Apellido"/>
            <Input label="Correo" name="email" value={formulario.email} onChange={handleChange} placeHolder="Correo"/>
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm