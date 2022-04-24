var methodOverride = require('method-override')
const bodyparser = require("body-parser");
const empty = require('is-empty');
const {spawn} = require('child_process');
const express = require('express');
const nodemon = require('nodemon');
const { path } = require('express/lib/application');
const app = express()
const fs = require('fs');


app.set('view-engine', 'ejs');
app.use(express.static("public"));
app.use(bodyparser.json({limit: '50mb'}));
app.use(bodyparser.urlencoded({
    limit: '500mb',
    extended: true,
    parameterLimit: 1000000
  }));
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))


app.use(express.static(__dirname));
app.listen(4000, function () {
    console.log("Server started at PORT :4000");
})

var songObj;
var output = [];

app.get('/', (req, res) => {
    res.redirect('/neutral');
  })
app.get('/happy',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'happy']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Happy',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/sad',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'sad']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Sad',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/angry',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'angry']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Angry',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/disgust',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'disgust']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Disgust',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/surprise',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'surprise']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Surprise',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/fear',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'fear']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Fear',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.get('/neutral',function(req,res) {
    const childPython = spawn('python', ['direct.py', 'neutral']);

    childPython.stdout.on('data', (data) => {
        let song;
        song += data;
        //console.log(song);
        //console.log(typeof(song));      //String
        //song = song.substring(9);
        var songList = JSON.parse(JSON.stringify(song)); 
        //console.log(songList.length);
        //console.log(typeof(songList));  //string     
        //console.log(songList.substring(9));
        songObj = JSON.parse(songList.substring(9));
        //songObj = JSON.parse(JSON.stringify(song));
        // delete songObj.happy;
        // delete songObj.sad;
        // delete songObj.angry;
        // delete songObj.disgust;
        // delete songObj.surprise;
        // delete songObj.fear;
        // delete songObj.neutral;
        //console.log(songObj['Name']);
        //console.log(typeof(songObj['Name']));
        var row1 = Object.keys(songObj['Name']).map((key) => [Number(key), songObj['Name'][key]]);
        var row2 = Object.keys(songObj['Link']).map((key) => [Number(key), songObj['Link'][key]]);
        var row3 = Object.keys(songObj['Link2']).map((key) => [Number(key), songObj['Link2'][key]]);
        var row = [];
        row.push(row1);
        row.push(row2);
        row.push(row3);
        //console.log(row);
        //console.log(row[0].length);
        output = []
        for (let i = 0; i < row[0].length; i++) {
            var temp = []
            temp.push(row[0][i][0].toString());
            temp.push(row[0][i][1].toString());
            temp.push(row[1][i][1].toString());
            temp.push(row[2][i][1].toString());
            output.push(temp);
          }
        //console.log(output);
        //console.log(typeof(output[0][1]));
        //console.log(typeof(Object.keys(row)));

        // //console.log(`stdout: ${data}`);
        res.render('face.ejs', { message:'Neutral',message2:'hello2',data:output})
        })

    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
    
});
app.post('/image', (req, res) => {
    const email = req.body;
    //console.log(email);
    let base64String = req.body.foo; 
    let base64Image = base64String.split(';base64,').pop();
    fs.writeFile('image.png', base64Image, {encoding: 'base64'}, function(err) {
    //console.log('File created');
    });
    let song;
    const childPython = spawn('python', ['detect.py']);
    childPython.stdout.on('data', (data) => {
        
        song += data;
        song = song.substring(9,song.length-2);
        //console.log(song);
        // for(let i = 0;i<song.length;i++){
        //     console.log(i + song[i]);
        // }
        // console.log(song);
        // console.log(song.length);
        // console.log(typeof(song));

        song = '/'+song.toString();
        // console.log(song);
        // console.log(typeof(song));
        res.redirect(song);
    })
    childPython.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    })

    childPython.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    })
    
});

