

// import fs/promise module

import fs from "fs/promises"

// import path module

import path from "path"

// import normal fs module

import fan from "fs"


const basepath = "e:/java script practic set/back_end_developer/nodejs_project1"

async function file_stacture() {


    let file = await fs.readdir(basepath); // fs.readdir show all file and folder of your given path

    console.log(file);// output:[


    //     'app.pdf',
    //     'bomm.png',
    //     'image.jpg',
    //     'index.js',
    //     'music.mp3',
    //     'package.json',
    //     'rana.txt'
    //   ]



    for (const item of file) {

        let extansan = path.extname(item); // extname give any file extansan

        console.log(extansan);  // output:.pdf
        // .png
        // .jpg
        // .js
        // .mp3
        // .json
        // .txt


        if (extansan !== ".js" && extansan !== ".json" && extansan) {


            let diractory = path.join(basepath, extansan.substring(1)) // path.jon jonin two path 

            console.log(diractory);  // output:.pdf
            // e:\java script practic set\back_end_developer\nodejs_project1\pdf
            // .png
            // e:\java script practic set\back_end_developer\nodejs_project1\png
            // .jpg
            // e:\java script practic set\back_end_developer\nodejs_project1\jpg
            // .js
            // .mp3
            // e:\java script practic set\back_end_developer\nodejs_project1\mp3
            // .json
            // .txt
            // e:\java script practic set\back_end_developer\nodejs_project1\txt



        // noteslogic: jodi diractory path ta exgiest kora thahala purono path ta ex: "e:/java 
        
        // script practic set/back_end_developer/nodejs_project1/kushal.txt" update hoia "e:/java script 
        
        // practic set/back_end_developer/nodejs_project1/txt/kushal.txt" aei path a update hoia 
        
        // jaba and jodi  diractory path ta exgist na kora tahola diractory path ta toiri hoba and 
        
        // agar file path ta update hoia notun path aconvart hoba    



            if (fan.existsSync(diractory)) { // fan.existssync chak kora j file and path ta exgist kora kina


                fs.rename(path.join(basepath, item), path.join(diractory, item)) // fs.rename duto paramiter nay old path and new path and old path ta k new path a convart kora 

            }

            else {

                fs.mkdir(diractory) // fs.mkdir dba path ta k toiri kora 

                fs.rename(fs.rename(path.join(basepath, item), path.join(diractory, item)))
            }


        }







    }




}

file_stacture();
