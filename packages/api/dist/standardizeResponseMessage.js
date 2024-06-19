function standardizeResponseMessage(d, f) {
    if (d?.message && typeof d?.message === "string")
        return d.message;
    if (f?.statusText && typeof f?.statusText === "string")
        return f.statusText;
    return "Message not provided by the api";
}
export { standardizeResponseMessage };
