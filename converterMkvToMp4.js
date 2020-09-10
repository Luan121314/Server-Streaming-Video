const ffmpeg = require('ffmpeg');

const input = './Videos/The_100.mkv'
const output = './Videos/the_100.mp4'

const ff = new ffmpeg(input,function(err, video){
    if(err){
        console.log(err);
        return
    }

    video.save(output, (err, files)=>{
        if(err){
            console.log('Erro ao salvar');
            console.log(err);
            return
        }

        console.log(files);
    })

    console.log('Sucess');
} )


