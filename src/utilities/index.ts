import { IdentityDetails } from "../interfaces";


/**
 * Extracts identity information from an Egyptian ID number.
 *
 * @param {string} idNumber - The Egyptian ID number to extract information from.
 * @return {IdentityDetails} An object containing the extracted identity details.
 */
export function extractInfoFromEgyptianID(idNumber: string): IdentityDetails {

    // Extract century, year, month, and day
    const centuryDigit = parseInt(idNumber[0]);
    const century = (centuryDigit === 2) ? 1900 : 2000;
    const year = century + parseInt(idNumber.slice(1, 3));
    const month = parseInt(idNumber.slice(3, 5));
    const day = parseInt(idNumber.slice(5, 7));

    const monthNames = [
        "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
        "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];
    const monthName = monthNames[month - 1]; // months are 0-indexed in arrays

    // Extract governorate code
    const governorateCode = parseInt(idNumber.slice(7, 9));

    // Extract serial number to determine gender
    const serialNumber = parseInt(idNumber.slice(9, 13));
    const gender = (serialNumber % 2 === 0) ? "أنثى" : "ذكر";

    // Mapping of governorate codes to names
    const governorates : Record<number, string> = {
        1: "القاهرة", 2: "الإسكندرية", 3: "بورسعيد", 4: "السويس", 11: "دمياط",
        12: "الدقهلية", 13: "الشرقية", 14: "القليوبية", 15: "كفر الشيخ",
        16: "الغربية", 17: "المنوفية", 18: "البحيرة", 19: "الإسماعيلية",
        21: "الجيزة", 22: "بني سويف", 23: "الفيوم", 24: "المنيا",
        25: "أسيوط", 26: "سوهاج", 27: "قنا", 28: "أسوان", 29: "الأقصر",
        31: "البحر الأحمر", 32: "الوادي الجديد", 33: "مطروح", 34: "شمال سيناء",
        35: "جنوب سيناء", 88: "خارج الجمهورية"
    };

    const governorate = governorates[governorateCode] || "Unknown";

    return {
        "DateOfBirth": `${day} ${monthName}، ${year}`,
        "Governorate": governorate,
        "Gender": gender
    };
}