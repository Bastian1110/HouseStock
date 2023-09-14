/**
 * Formats a number as a currency string in Mexican Peso (MXN) format.
 * 
 * @param value - The number to be formatted as currency.
 * @returns A formatted currency string in Mexican Peso (MXN) format.
 * @throws {Error} If the value parameter is not a number.
 * 
 * @example
 * const amount = 1000;
 * const formattedAmount = formatCurrency(amount);
 * console.log(formattedAmount); // Output: $1,000.00
 */
export const formatCurrency = (value: any) => {
    if (typeof value !== 'number') {
        throw new Error('Invalid value. Expected a number.');
    }

    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(value);
}