
export const deleteNotice = (chart_id, notice_id) => {
    console.log("inside delete notice action")
    return {
        type: 'DELETE_NOTICE',
        notice_id
    }
}// // delete fetch call to delete from db


export const deleteWonder = (id) => {
    console.log("inside delete wonder action")

    return {
        type: 'DELETE_WONDER',
        id
    }
}// // delete fetch call to delete from db
