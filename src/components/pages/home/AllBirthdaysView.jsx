import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {BirthdaysTable} from "../../common/table/BirthdaysTable";
import {BirthdaysTableHeaderGrid} from "../../common/table/BirthdaysTableHeaderGrid";
import {getAllBirthdays} from "../../../api/birthdayApi";

/**
 * Главная страница "Список ДР"
 */
const AllBirthdaysView = () => {
    const [items, setItems] = useState([]);
    const [needToRender, setNeedToRender] = useState(false);

    //подгружаем данные с сервера
    useEffect(async () => {
        await getAllBirthdays(setItems);
    }, [needToRender]);

    return (
        <div>
            <Grid container spacing={2}>
                <BirthdaysTableHeaderGrid headerText={"Дни рождения"}/>
                <Grid item xs={12}>
                    <BirthdaysTable items={items} needToRender={needToRender} setNeedToRender={setNeedToRender}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default AllBirthdaysView;