import React, {useEffect, useState} from "react";
import {Grid} from "@material-ui/core";
import {BirthdaysTable} from "../../common/table/BirthdaysTable";
import {BirthdaysTableHeaderGrid} from "../../common/table/BirthdaysTableHeaderGrid";
import {getUpcomingBirthdays} from "../../../api/birthdayApi";

/**
 * Страница "Ближайшие ДР"
 */
const UpcomingBirthdaysView = () => {
    const [items, setItems] = useState();
    const [needToRender, setNeedToRender] = useState(false);

    //подгружаем данные с сервера
    useEffect(async () => {
        await getUpcomingBirthdays(setItems);
    }, [needToRender]);

    return (
        <div>
            <Grid container spacing={2}>
                <BirthdaysTableHeaderGrid headerText={"Предстоящие дни рождения"}/>
                <Grid item xs={12}>
                    <BirthdaysTable items={items} needToRender={needToRender} setNeedToRender={setNeedToRender}/>
                </Grid>
            </Grid>
        </div>
    )

}

export default UpcomingBirthdaysView;