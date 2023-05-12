// Speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> License Suspended

checkSpeed(130)

function checkSpeed(speed) {
    const speedLimit = 70;
    const KmPerPoint = 5;

    if(speed < speedLimit + KmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / KmPerPoint);
    if(points >= 12)
        console.log('License suspended');
    else
        console.log('Points ' + points);
}