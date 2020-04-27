const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressLayouts = require("express-ejs-layouts");
const Chart = require('chart.js');
const request = require('request-promise');
const cheerio = require('cheerio');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(expressLayouts);
app.set("view engine", "ejs");


app.get('*', (req, res) => {
async function main(){
const result = await request.get("https://countrymeters.info/en/list/List_of_countries_and_dependent_territories_of_the_World_by_population")
const $ = cheerio.load(result);
var i = 0;
const population = new Array(230);
$('#pagewrap > div.review > table > tbody > tr > td:nth-child(4)').each((index, element) => {
population[i] = $(element).text();
population[i]= population[i].replace(/,/g, "");
parseInt(population[i]);
i++;
});
var i = 0;
const country = new Array(230);
$('#pagewrap > div.review > table > tbody > tr > td.left > a').each((index, element) => {
country[i] = $(element).text();
i++;
});


res.status(200).render('try',{country : country , population : population});
}
main();


});



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
