/**
 * @return {number}
 */
export const ParseDatetime = ( datetime ) => {
    let dt = new Date(datetime);
    let options = { hour: 'numeric', month: 'numeric', day: 'numeric', minute: 'numeric' };
    return dt.toLocaleString('es-AR', options)
};
