/**
 * Validates an ID number to ensure it meets specific requirements.
 *
 * @param {string} id - The ID number to be validated.
 * @return {string} An error message if the ID is invalid, otherwise an empty string.
 */
export function validateId(id: string): string {
    let error = ""
    const month = parseInt(id.slice(3, 5));
    const day = parseInt(id.slice(5, 7));
    const centuryDigit = parseInt(id[0]);
    const governorateCode = parseInt(id.slice(7, 9));
    if(id.trim().length !== 14) {
        error = "رقم البطاقة يجب ألا يقل أو يزيد عن 14 رقم"
    }
    else if(!/^[0-9]+$/.test(id.trim())) {
        error = "رقم البطاقة يجب أن يحتوي على ارقام فقط"
    }
    else if (centuryDigit !== 2 && centuryDigit !== 3) {
        error = "رقم قومي غير صالح: يجب أن يبدأ الرقم القومي بـ 2 أو 3";
    }


    else if (month < 1 || month > 12) {
        error = "رقم قومي غير صالح: يحتوي على شهر غير صحيح";
    }

    else if (day < 1 || day > 31) {
        error = "رقم قومي غير صالح: يحتوي على يوم غير صحيح";
    }
    else if(governorateCode < 1 || governorateCode > 88 || governorateCode === 20 || governorateCode === 30 || (governorateCode > 35 && governorateCode < 88)) {
        error = "رقم قومي غير صالح: يحتوي على رقم المحافظة غير صحيح";
    }

    return error
}