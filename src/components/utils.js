import {toast} from "react-toastify";

/**
 * Обработчик загрузки фото
 * @param e событие загрузки файла
 * @param setPhoto коллбэк для установки фото в состояние
 * @param setIsCorrectPhoto коллбэк для установки признака правильности загруженного файла
 */
export const onImageChange = (e, setPhoto, setIsCorrectPhoto) => {
    const fileTypes = ['jpg', 'jpeg', 'png'];
    if (e.target.files && e.target.files[0]) {
        const extension = e.target.files[0].name.split('.').pop().toLowerCase();
        const isSuccess = fileTypes.indexOf(extension) > -1;

        if (isSuccess) {
            let reader = new FileReader();
            reader.onload = function (e) {
                setPhoto(e.target.result);
                setIsCorrectPhoto(true);
            };
            reader.readAsDataURL(e.target.files[0]);
        } else {
            setIsCorrectPhoto(false);
            toast.error('Принимаются только фото с расширением .jpg .jpeg .png!');
        }
    }
}

export const StatusEnum = {
    ["FRIEND"]: "Друг",
    ["FAMILIAR"]: "Знакомый",
    ["COWORKER"]: "Коллега",
    ["FAMILY"]: "Родственник",
};

export const StatusSelectEnum = [
    {id: "FRIEND", text: "Друг"},
    {id: "FAMILIAR", text: "Знакомый"},
    {id: "COWORKER", text: "Коллега"},
    {id: "FAMILY", text: "Родственник"}
];

