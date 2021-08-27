/**
 * ****************************************************************************
 * Purpose: The purpose of this program to analyse the indian states census.
 *
 * @author Dhiraj
 * @version 1.0
 * @since 26-08-2021
 * ****************************************************************************
 */

const csv = require('csv-parser');
const fs = require('fs');
const obj = require('./CSVcensus');

let censusDataArr = [];

// let censusData = new obj();

//read file from here.
try {
    fs.createReadStream('StateCensusData.csv')
        .pipe(csv())
        .on('data', (row) => {

            let censusData = {
                state: row.state,
                areaInSqKm:row.areaInSqKm,
                densityPerSqKm: row.densityPerSqKm,
                population: row.population
            }

            // censusData.setState(row.state);
            // censusData.setAreaInSqKm(row.areaInSqKm);
            // censusData.setDensityPerSqKm(row.densityPerSqKm);
            // censusData.setPopulation(row.population);

            censusDataArr.push(censusData);

        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            censusDataArr.map((index, item) => {
                console.log("mapped data : ", index);
            })
        })
} catch (error) {
    console.log(error);
}
