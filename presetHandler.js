// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, presetsArrayIndex, newPresetArray) => {
    let result = [];
    
    if (typeof presets[presetsArrayIndex] === 'undefined'){
        result[0] = 404;
    } else {
        result[0] = 200;
    }

    
    switch(requestType){
        case 'PUT':
            presets[presetsArrayIndex] = newPresetArray;
            result.push(newPresetArray);
            break;
        case 'GET':
            result.push(presets[presetsArrayIndex]);
            break;
        default:
            result[0] = 400;
            break;
    }

    return result;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
