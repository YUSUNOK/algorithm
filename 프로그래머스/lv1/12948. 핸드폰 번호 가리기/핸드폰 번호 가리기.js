const solution = (phone_number) => {
    const value = phone_number.length - 4;
    return `${'*'.repeat(value)}${phone_number.slice(value)}`;
}