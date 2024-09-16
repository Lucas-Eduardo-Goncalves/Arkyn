import { formatToCNPJ } from "./formatToCNPJ";
import { formatToCPF } from "./formatToCPF";
function formatToCpfCnpj(value) {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length === 11) {
        return formatToCPF(cleaned);
    }
    else if (cleaned.length === 14) {
        return formatToCNPJ(cleaned);
    }
    return value;
}
export { formatToCpfCnpj };
