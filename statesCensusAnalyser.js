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
const obj = require('./CSVStateCensus');

let censusDataArr = [];

let censusData = new obj();

//reading CSV file data.
try {
    fs.createReadStream('StateCensusData.csv')
        .pipe(csv())
        .on('data', (row) => {

            censusData.state = row.state;
            censusData.areaInSqKm = row.areaInSqKm;
            censusData.densityPerSqKm = row.densityPerSqKm;
            censusData.population = row.population;

            censusDataArr.push(censusData);

        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        
            censusDataArr.forEach(element => {
                console.log("Array data : ", element);
            });
        })
} catch (error) {
    console.log(error);
}
