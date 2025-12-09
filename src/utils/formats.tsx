function capitalise(s: string) {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatKeyLabel(s: string) {
    return s.split(/(?=[A-Z])/).map(capitalise).join(" ");
}

export function formatValue(k: string, val: string) {
    let content;
    
    switch(k) {
        case "url": 
            content = <a href={val} target='_blank' className="text-teal-400 hover:text-teal-500">Link</a>
            break;

        case "expiryDate":
        case "dateApplied":
        case "lastUpdated":
        case "nextFollowUp":
            content = val.substring(0, 10);
            break;

        default:
            content = val
    }

    return content;

}