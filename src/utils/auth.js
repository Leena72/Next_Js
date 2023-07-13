export function authenticate(proposalNo, DOB) {
    if (proposalNo === "123456" && DOB === '123456') {
        localStorage.setItem('proposalNo', JSON.stringify({ proposalNo }));
        return true;
    }
    return false;
}