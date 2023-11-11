const keySongs = [
    {
        key: 1,
        song: '1',
        down: false
    },
    {
        key: 2,
        song: '2',
        down: false
    },
    {
        key: 3,
        song: '3',
        down: false
    },
    {
        key: 4,
        song: '4',
        down: false
    },
    {
        key: 5,
        song: '5',
        down: false
    },
    {
        key: 6,
        song: '6',
        down: false
    },
    {
        key: 7,
        song: '7',
        down: false
    },
    {
        key: 8,
        song: '8',
        down: false
    },
    {
        key: 9,
        song: '9',
        down: false
    }
]

function tocaSom(audioElement) {
    audioElement.currentTime = 0
    audioElement.play()
}

keySongs.forEach(song => {
    let keyElement = document.querySelector(`.tecla_${song.song}`)

    song.keyElement = keyElement
    song.audioElement = document.getElementById(`som_tecla_${song.song}`)

    keyElement.addEventListener('click', () => {
        tocaSom(song.audioElement)
    })   

})

document.onkeydown = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {

        keySong.keyElement.classList.add('ativa')

        if(!keySong.down) {
            tocaSom(keySong.audioElement)
        }
    
        keySong.down = true

    }

}

document.onkeyup = (event) => {
    const key = event.key
    const keySong =  keySongs.find(keySong => keySong.key == key)
    
    if(keySong) {
    
        keySong.keyElement.classList.remove('ativa')
        keySong.down = false

    }

}
