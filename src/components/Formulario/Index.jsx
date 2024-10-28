import { useState } from "react"
import styles from './Index.module.css'


const Formulario = () => {
    let [altura,setAltura] = useState(0);
    let [peso,setPeso] = useState(0);

    const renderizaResultado = () => {
        const resultado = (peso / altura ** 2).toFixed(1);

        if (isNaN(resultado)) {
            return <p></p>;
        } else {
            return <p>{resultado}</p>;
        }
    }

    const renderizaClassificacao = () => {
        const resultado = peso / altura ** 2;

        if (resultado < 18.4){
            return <p>Abaixo do peso</p>
        } else if (resultado >= 18.5 && resultado <= 24.9) {
            return <p>Peso normal</p>
        } else if (resultado >= 25 && resultado <= 29.9) {
            return <p>Acima do peso</p>
        } else if (resultado >= 30 && resultado <= 34.9) {
            return <p>Obsesidade classe I</p>
        } else if (resultado >= 35 && resultado <= 39.9) {
            return <p>Obsesidade classe II</p>
        } else if (resultado >= 40) {
            return <p>Obsesidade classe III</p>
        } else {
            return <p></p>
        }
    }

    return (
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Calcule seu IMC</h1>
                <form>
                    <input className={styles.form} type="number" placeholder="Altura em metros" onChange={evento => setAltura(Number(evento.target.value))}/>
                    <input className={styles.form} type="number" placeholder="Peso em KG" onChange={evento => setPeso(Number(evento.target.value))}/> <br/>
                    <p className={styles.resultado}>Seu IMC é:<b>{renderizaResultado()}</b></p>
                    <p className={styles.resultado}>Sua classificação do IMC:<b>{renderizaClassificacao()}</b></p>
                    
                </form>
            </div>
        </>
    )
}

export default Formulario