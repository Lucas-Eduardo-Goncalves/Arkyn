The `@arkyn/shared` package provides reusable utilities such as formatting functions, generators, services, and validations. It is designed to be used across different parts of a project, offering common and practical solutions to streamline development.

---

## Installation

Install the package using npm:

```bash
npm install @arkyn/shared
```

---

## Features

### Formatting

- **`formatDate(date: Date): string`**  
  Formats a date into a readable string.

- **`formatJsonObject(obj: object): string`**  
  Converts a JSON object into a formatted string.

- **`formatJsonString(json: string): object`**  
  Converts a JSON string into an object.

- **`formatToCep(value: string): string`**  
  Formats a string into the CEP format (`XXXXX-XXX`).

- **`formatToCnpj(value: string): string`**  
  Formats a string into the CNPJ format (`XX.XXX.XXX/XXXX-XX`).

- **`formatToCpf(value: string): string`**  
  Formats a string into the CPF format (`XXX.XXX.XXX-XX`).

- **`formatToCpfCnpj(value: string): string`**  
  Formats a string into either CPF or CNPJ format, depending on its length.

- **`formatToCurrency(value: number): string`**  
  Converts a number into a currency format.

- **`formatToEllipsis(value: string, maxLength: number): string`**  
  Truncates a string and appends an ellipsis if it exceeds the maximum length.

- **`formatToHiddenDigits(value: string): string`**  
  Masks part of a string by replacing it with asterisks.

- **`formatToPhone(value: string): string`**  
  Formats a string into a phone number format.

---

### Generators

- **`generateColorByString(value: string): string`**  
  Generates a hexadecimal color based on a string.

- **`generateId(): string`**  
  Generates a unique identifier.

- **`generateSlug(value: string): string`**  
  Converts a string into a URL-friendly slug.

---

### Services

- **`calculateCardInstallment(total: number, installments: number): number[]`**  
  Calculates the installment values for a given total.

- **`ensureQuotes(rawValue: string): string`**  
  Ensures that a given rawValue string is enclosed in quotes.

- **`maskSensitiveData(data: string): string`**  
  Masks sensitive data in a string.

- **`removeNonNumeric(value: string): string`**  
  Removes all non-numeric characters from a string.

- **`truncateLargeFields(obj: object, maxLength: number): object`**  
  Truncates large fields in an object to a specified maximum length.

---

### Validations

- **`validateCep(value: string): boolean`**  
  Validates whether a string is a valid CEP.

- **`validateCnpj(value: string): boolean`**  
  Validates whether a string is a valid CNPJ.

- **`validateCpf(value: string): boolean`**  
  Validates whether a string is a valid CPF.

- **`validateDate(value: string): boolean`**  
  Validates whether a string is a valid date.

- **`validatePhone(value: string): boolean`**  
  Validates whether a string is a valid phone number.

- **`validateRg(value: string): boolean`**  
  Validates whether a string is a valid ID (RG).

---

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

---

## License

This project is licensed under the Apache 2.0 License. See the `LICENSE` file for more details.
