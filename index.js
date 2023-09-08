const express = require("express");
const cors = require('cors'); 
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api",(req, res) => {
    var current_day=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const date=new Date();
    var day=date.getDay();
    res.statusCode=200;
    res.json({
        "slack_name":req.query.slack_name,
        "current_day":current_day[day-1],
        "utc_time":new Date(new Date().toUTCString()),
        "github_file_url":"https://github.com/dudu-sha/HNGx_getendpoint/blob/master/index.js",
        "github_repo_url":"https://github.com/dudu-sha/HNGx_getendpoint.git",
        "track":req.query.track,
        "status_code":res.statusCode
    })
 
})
const port = 3000 || 9000;
app.listen(port, () => console.log(`Server started on port${port}`));