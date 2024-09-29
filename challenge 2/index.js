
function checkSpeed() {
    const speedInput = document.getElementById("speed").value;
    const speed = Number(speedInput);
    const speedLimit = 70;

    if (speed < speedLimit) {
        alert("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / 5);

        if (demeritPoints > 12) {
            alert("License suspended");
        } else {
            alert(`Points: ${demeritPoints}`);
        }
    }
}
