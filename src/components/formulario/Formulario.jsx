import { Button } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import { useCartContext } from "../../context/CartContext"

const Formulario = () => {
    const {cartList, totalPrice} = useCartContext()

    const valorInicial = {
        nombre: '',
        email: '',
        tel: '',
        address: '',
        localidad: '',
        observacion: ''
    }

    const [user, setUser] = useState(valorInicial)

    const captureInputs = (e) =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }
    const guardarDatos = async(e)=>{
        e.preventDefault();
        try {
            await addDoc(collection(db, 'orders'),{
                buyer: {...user},
                items: cartList.map(product => ({id: product.id, title: product.title, price: product.precio, quantity: product.quantity})),
                total: totalPrice(),
            })
        } catch (error) {
            console.log(error);
        }
    }

    return <div>
        <form onSubmit={guardarDatos}>
            <div>
                <label>Apellido y Nombre</label>
                <input type="text" name="nombre" onChange={captureInputs} value={user.nombre} />
            </div>
            <div>
                <label>Correo electronico</label>
                <input type="text" name="email" onChange={captureInputs} value={user.email} />
            </div>
            <div>
                <label>Numero de telefono</label>
                <input type="text" name="tel" onChange={captureInputs} value={user.tel} />
            </div>
            <div>
                <label>Direccion</label>
                <input type="text" name="address" onChange={captureInputs} value={user.address} />
            </div>
            <div>
                <label>Localidad</label>
                <input type="text" name="localidad" onChange={captureInputs} value={user.localidad} />
            </div>
            <div>
                <label>Observaciones</label>
                <input type="text" name="observacion" onChange={captureInputs} value={user.observacion} />
            </div>
            <button class="chakra-button css-ap4425">Realizar compra</button>
        </form>
    </div>
}

export default Formulario