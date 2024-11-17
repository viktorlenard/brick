
/* 
    Source: https://stackoverflow.com/questions/164979/regex-for-matching-uk-postcodes
    The extent of validating it was nonexistent.
*/
export const validateUkPostcode = (postcode: string): boolean => {
    const pattern = /^(([A-Z]{1,2}\d[A-Z\d]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?\d[A-Z]{2}|BFPO ?\d{1,4}|(KY\d|MSR|VG|AI)[ -]?\d{4}|[A-Z]{2} ?\d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/;
    return pattern.test(postcode);
}