import React from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {useNavigate} from "react-router-dom";
import {NoDataPlaceholder} from "../NoDataPlaceholder";
import {StatusEnum} from "../../utils";
import {format} from 'date-fns';
import {deleteBirthday} from "../../../api/birthdayApi";
import {DeleteOutlined, Edit} from "@material-ui/icons";
import useStyles from "../../styles/layout-styles";
import avatar from "../../../assets/images/ава.jpeg"

/**
 * Компонента-таблица для вывода списка ДР
 */
export const BirthdaysTable = ({items, needToRender, setNeedToRender}) => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleEdit = ({id}) => navigate(`/update/${id}`, {replace: true});

    const handleDelete = ({id}) => {
        deleteBirthday(id).then(() => setNeedToRender(!needToRender));
    };

    let content;

    if (items && items.length) {
        content = (
            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.name}>
                        <TableCell align="center">
                            {item.photo ? <img className={classes.photo} src={item.photo} alt="photo"/> :
                            <img src={avatar} width="150"/>}
                        </TableCell>
                        <TableCell align="center">
                            {item.name}
                        </TableCell>
                        <TableCell align="center">
                            {format(new Date(item.date), "dd.MM.yyyy")}
                        </TableCell>
                        <TableCell align="center">{StatusEnum[item.role]}</TableCell>
                        <TableCell align="center">
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                onClick={() => handleEdit(item)}
                                startIcon={<Edit/>}>
                                Редактировать
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                disableElevation
                                onClick={() => handleDelete(item)}
                                startIcon={<DeleteOutlined/>}>
                                Удалить
                            </Button>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody>);
    } else {
        content = (
            <TableBody>
                <TableRow>
                    <NoDataPlaceholder colSpan={5}/>
                </TableRow>
            </TableBody>
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Фото</TableCell>
                        <TableCell align="center">ФИО</TableCell>
                        <TableCell align="center">Дата рождения</TableCell>
                        <TableCell align="center">Статус</TableCell>
                        <TableCell align="right"/>
                    </TableRow>
                </TableHead>
                {content}
            </Table>
        </TableContainer>
    );
}