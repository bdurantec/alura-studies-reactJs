import { tempoParaSegundos } from '../../commom/utils/date';
import Botao from '../Botao';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';

export default function Cronometro(){
    console.log('Conversao: ', tempoParaSegundos('01:01:01'));
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>
                Escolha um card e inicie o cronômetro!
            </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto='Começar'>
            </Botao>
        </div>
    )
}