module.exports = class CSVStateCensus {
    #state = "";
    #densityPerSqKm = 0;
    #areaInSqKm = 0;
    #population = 0;

    constructor(...params) {
      }

    setState(value) {
        console.log(value);
        this.#state = value;
    }

    getState() {
        return this.#state;
    }

    setDensityPerSqKm(value) {
        if (value < 0) value = 0;
        this.#densityPerSqKm = value;
    }

    getWaterAmount() {
        return this.#densityPerSqKm;
    }

    setAreaInSqKm(value) {
        if (value < 0) value = 0;
        this.#areaInSqKm = value;
    }

    getAreaInSqKm() {
        return this.#areaInSqKm;
    }

    setPopulation(value) {
        if (value < 0) value = 0;
        this.#population = value;
    }

    getPopulation() {
        return this.#population;
    }

    toString() {
        return "state = " + this.#state +
            ", densityPerSqKm = " + this.#densityPerSqKm +
            ", areaInSqKm = " + this.#areaInSqKm +
            ", population = " + this.#population;
    }

}

// export CSVStateCensus;