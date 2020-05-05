// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function toggleDrum(drumArrayString, index) {
    if (!drumArrayString) {
        return
    }

    if (index > 15 || index < 0) {
        return;
    }

    switch (drumArrayString) {
        case 'kicks':
            kicks[index] = !kicks[index];
            break;
        case 'snares':
            snares[index] = !snares[index];
            break;
        case 'hiHats':
            hiHats[index] = !hiHats[index];
            break;
        case 'rideCymbals':
            rideCymbals[index] = !rideCymbals[index];
            break;
    }

}

//helper
function clearDrumValues(drumArray) {
    for (var elementIndex = 0; elementIndex < drumArray.length; elementIndex++) {
        drumArray[elementIndex] = false;
    }
}

function clear(drumArrayString) {
    if (!drumArrayString) {
        return
    }

    switch (drumArrayString) {
        case 'kicks':
            clearDrumValues(kicks);
            break;
        case 'snares':
            clearDrumValues(snares);
            break;
        case 'hiHats':
            clearDrumValues(hiHats);
            break;
        case 'rideCymbals':
            clearDrumValues(rideCymbals);
            break;
        default:
            return;
    }
}

//helper
function invertDrumValues(drumArray) {
    for (var elementIndex = 0; elementIndex < drumArray.length; elementIndex++) {
        drumArray[elementIndex] = !drumArray[elementIndex];
    }
}

function invert(drumArrayString) {
    if (!drumArrayString) {
        return
    }

    switch (drumArrayString) {
        case 'kicks':
            invertDrumValues(kicks);
            break;
        case 'snares':
            invertDrumValues(snares);
            break;
        case 'hiHats':
            invertDrumValues(hiHats);
            break;
        case 'rideCymbals':
            invertDrumValues(rideCymbals);
            break;
        default:
            return;
    }
}

function getNeighborPads(x, y, size) {
    const result = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
        return result;
    }
    result.push([x - 1, y], [x, y - 1], [x + 1, y], [x, y + 1]);

    return result.filter((neighbor) => {
        return neighbor.every((val) => {
            return val >= 0 && val < size;
        });
    });
}

