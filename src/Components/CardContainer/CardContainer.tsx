import Card from '../Card/Card';
import styles from  './CardContainer.module.css'


import { ICards } from '../../models/ICard';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {themeSlice} from '../../redux/reducers/themeSlice';


interface props {
    array: Array<ICards>
}

const CardContainer = ({array}: props) => {
    const {theme} = useAppSelector(state => state.themeReducer)
    const {toggleTheme} = themeSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className='container'>
                <div className={styles.card_container}>
                    {array.map(card => 
                        <Card key={card.id} image={card.image} title={card.title} subtitle={card.subtitle}/>
                    )}
            </div>
        </div>
        </div>
    );
};

export default CardContainer;