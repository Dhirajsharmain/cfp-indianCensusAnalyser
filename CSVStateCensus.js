module.exports = class CSVStateCensus {

    // constructor(...params) {
    //   }

    set state(value) {
        console.log(value);
        this._state = value;
    }

    get state() {
        return this._state;
    }

    set densityPerSqKm(value) {
        if (value < 0) value = 0;
        this._densityPerSqKm = value;
    }

    get densityPerSqKm() {
        return this._densityPerSqKm;
    }

    set areaInSqKm(value) {
        if (value < 0) value = 0;
        this._areaInSqKm = value;
    }

    get areaInSqKm() {
        return this._areaInSqKm;
    }

    set population(value) {
        if (value < 0) value = 0;
        this._population = value;
    }

    get population() {
        return this._population;
    }

    toString() {
        return "state = " + this._state +
            ", densityPerSqKm = " + this._densityPerSqKm +
            ", areaInSqKm = " + this._areaInSqKm +
            ", population = " + this._population;
    }

}
