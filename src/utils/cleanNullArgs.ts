export const cleanNullArgs = (obj: {}) => {
    let nullArgs: {} = {};
    
    Object.keys(obj).forEach(key => {
        if(obj[key] !== null) {
            nullArgs[key] = obj[key];
        }
    });

    return nullArgs;
}