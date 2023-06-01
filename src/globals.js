import $ from 'jquery';
import inputFile from './components/input-file/scripts';
import select from './components/select/scripts';
import range from './components/range/scripts';

const initGlobals = (namespace) => {
    global[namespace] = {
        $,
        inputFile,
        select,
        range,
    }
};

export default initGlobals;