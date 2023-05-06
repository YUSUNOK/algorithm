function solution(phone_number) {
    const number = phone_number.substring(phone_number.length - 4);
    return '*'.repeat(phone_number.length - 4) + number;
}