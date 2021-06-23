const express = require("express");
const router = express.Router();
const cheerio = require('cheerio');
const axios = require('axios');

router.get("/", (req, res) => {
    axios.get("https://www.espn.com/nba/stats")
    .then((response) => {
        let leaders = getLeagueLeaders(response.data);
        res.send(leaders);
    })
    .catch((error) => {
        if(error.response) {
            console.log(error.response);
            res.send({errors: error.response});
        } else if (error.request) {
            console.log(error.request);
            res.send({errors: error.request});
        } else {
            console.log(error);
            res.send({errors: error.message});
        }
    });
});

function getLeagueLeaders(html) {
    let $ = cheerio.load(html);
    let $pointsTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[0];
    let $assistsTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[1];
    let $3PMTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[2];
    let $reboundsTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[3];
    let $blocksTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[4];
    let $stealsTable = $('div.Table__ScrollerWrapper tbody.Table__TBODY').toArray()[5];
    let leaders = {
        PPG: getStatLeaders($pointsTable),
        APG: getStatLeaders($assistsTable),
        THREEPM: getStatLeaders($3PMTable),
        RPG: getStatLeaders($reboundsTable),
        BPG: getStatLeaders($blocksTable),
        SPG: getStatLeaders($stealsTable) 
    };
    console.log(leaders);
    return leaders;
}

function getStatLeaders(table) {
    let leaders = [];
    let playerRows = table.children;
    for (let i = 0; i < playerRows.length - 1; i++) {
        let player = {
            rank: playerRows[i].children[0].children[0].children[0].children[0].data,
            player: playerRows[i].children[0].children[0].children[1].children[1].data,
            team: playerRows[i].children[0].children[0].children[2].children[0].data,
            value: playerRows[i].children[1].children[0].data
        };
        leaders.push(player);
    }
    return leaders;
}

module.exports = router;