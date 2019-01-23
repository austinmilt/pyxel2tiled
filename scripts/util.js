export default class Arg {
    static isGiven(arg) {
        return (arg === undefined) || (arg === null);
    }

    static required(arg, name) {
        if (Arg.isGiven(arg)) {
            throw new Exception(`'${name}' is required.`);
        } else {
            return arg;
        }
    }

    static optional(arg, defaultValue) {
        return Arg.isGiven(arg) ? arg : defaultValue;
    }
}

export {Arg};