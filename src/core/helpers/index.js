import moment from 'moment'
/**
 * Check if current window inner width is for phone screen size
 * @param
 * @returns Boolean
 */
export function isPhoneScreen() {
    return window.innerWidth < 768
}

export function formatDateSlash(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
}

export function formatDateDash(value) {
    if (value) {
        return moment(String(value)).format('YYYY-MM-DD')
    }
}