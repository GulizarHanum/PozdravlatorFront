import React, {useState} from 'react';
import {
    Button,
    FormControl,
    FormHelperText,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from "@material-ui/core";
import {Controller, useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {Panel} from '../../common/Panel';
import {onImageChange, StatusSelectEnum} from "../../utils";
import {addBirthday} from "../../../api/birthdayApi";
import {toast} from "react-toastify";

/**
 * Компонента-форма для добавления ДР
 */
export const AddForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, errors, control} = useForm();
    const [photo, setPhoto] = useState();
    const [isCorrectPhoto, setIsCorrectPhoto] = useState(true);

    //обработчик нажатия на кнопку "Добавить ДР"
    const onSubmit = handleSubmit(async ({name, date, role}) => {
        if (isCorrectPhoto) {
            await addBirthday({name, date, role, photo});
            navigate("/", {replace: true});
        } else {
            toast.error('Прикрепите фото с правильным расширением!');
        }
    });

    return (
        <form onSubmit={onSubmit}>
            <Panel>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div">
                            Новое ДР
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <FormControl style={{width: "100%"}} error={!!errors.name}>
                                <InputLabel htmlFor="name">ФИО</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    inputRef={register({required: true})}
                                />
                                {errors.name && (
                                    <FormHelperText id="name-error">
                                        ФИО не может быть пустым
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl style={{width: "100%"}} error={!!errors.date}>
                                <InputLabel htmlFor="date"
                                            shrink={true}>
                                    Дата</InputLabel>
                                <Input
                                    id="date"
                                    name="date"
                                    type="date"
                                    inputRef={register({required: true})}
                                />
                                {errors.date && (
                                    <FormHelperText id="date-error">
                                        Дата не может быть пустой
                                    </FormHelperText>
                                )}
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <FormControl style={{width: "100%"}} error={!!errors.role}>
                                <InputLabel htmlFor="role"
                                            shrink={true}>
                                    Статус</InputLabel>
                                <Controller
                                    as={
                                        <Select>
                                            {StatusSelectEnum.map((item) => (
                                                <MenuItem value={item.id}>{item.text}</MenuItem>
                                            ))}
                                        </Select>
                                    }
                                    control={control}
                                    name="role"
                                    defaultValue=""
                                    rules={{required: "Выберите статус"}}
                                />
                                <FormHelperText>
                                    {errors.role && errors.role.message}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>

                            <InputLabel htmlFor="photo"
                                        shrink={true}>
                                Фото</InputLabel>
                            <Input
                                id="photo"
                                name="photo"
                                type="file"
                                onChange={(e) => onImageChange(e, setPhoto, setIsCorrectPhoto)}
                            />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12}>
                        <Button type="submit" color="primary">Добавить ДР!</Button>
                    </Grid>
                </Grid>
            </Panel>
        </form>
    )
}