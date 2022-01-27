import React from 'react'
import {Button} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import {TimeIcon} from "@material-ui/pickers/_shared/icons/TimeIcon";
import {DateRangeIcon} from "@material-ui/pickers/_shared/icons/DateRangeIcon";

/**
 * Компонента с кнопками для заголовка приложения
 */
export const HeaderButtons = () => {
    const navigate = useNavigate();

    return (<div>
        <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => {
                navigate("/", {replace: true});
            }}
            startIcon={<DateRangeIcon/>}
        >
            Список ДР
        </Button>
        <Button
            variant="contained"
            color="secondary"
            disableElevation
            onClick={() => {
                navigate("/upcoming", {replace: true});
            }}
            startIcon={<TimeIcon/>}
        >
            Ближайшие ДР
        </Button>
    </div>)
}