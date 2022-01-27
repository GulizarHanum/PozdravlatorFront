import axios from "axios";
import {toast} from "react-toastify";

/**
 * Отправить запрос на добавление ДР
 * @param data данные запроса
 * @returns {Promise<void>} промис
 */
export async function addBirthday(data) {
    await axios.post("/", data)
        .then(() => toast.success("Данные успешно сохранены"))
        .catch(error => toast.error('Не удалось отправить данные! ' + error.response.data));
}

/**
 * Отправить запрос на редактирование ДР
 * @param data данные запроса
 * @returns {Promise<void>} промис
 */
export async function editBirthday(data) {
    await axios.put("/", data)
        .then(() => toast.success("Данные успешно сохранены"))
        .catch(error => toast.error('Не удалось отправить данные! ' + error.response.data));
}

/**
 * Отправить запрос на удаление ДР
 * @param id айди записи о ДР
 * @returns {Promise<void>} промис
 */
export async function deleteBirthday(id) {
    await axios.delete("/", {
        params: {id}
    })
        .then(() => toast.success("Запись успешно удалена"))
        .catch(error => toast.error('Не удалось удалить запись! ' + error.response.data));
}

/**
 * Отправить запрос на получения записи о ДР по айди
 * @param callbackSetItems коллбэк для записи в состояния компонента
 * @param id айди записи
 * @returns {Promise<void>} промис
 */
export async function getBirthday(callbackSetItems, id) {
    axios.get(`/${id}`)
        .then(({data}) => callbackSetItems(data))
        .catch(() => toast.error('Не удалось загрузить данные!'));
}

/**
 * Отправить запрос на получения всех ДР
 * @param callbackSetItems коллбэк для записи в состояния компонента
 * @returns {Promise<void>} промис
 */
export async function getAllBirthdays(callbackSetItems) {
    axios.get("/list")
        .then(({data}) => callbackSetItems(data))
        .catch(() => toast.error('Не удалось загрузить данные!'));
}

/**
 * Отправить запрос на получения всех предстоящих ДР
 * @param callbackSetItems коллбэк для записи в состояния компонента
 * @returns {Promise<void>} промис
 */
export async function getUpcomingBirthdays(callbackSetItems) {
    axios.get("/upcoming")
        .then(({data}) => callbackSetItems(data))
        .catch(() => toast.error('Не удалось загрузить данные!'));
}