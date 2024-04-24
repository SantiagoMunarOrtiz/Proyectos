// Singleton para el reproductor de música
const MusicPlayer = (function() {
    let instance;

    function createInstance() {
        // Métodos y propiedades privados
        let isPlaying = false;
        let currentSong = null;

        return {
            // Métodos públicos
            play: function(song) {
                if (!isPlaying) {
                    currentSong = song;
                    isPlaying = true;
                    console.log("Reproduciendo: " + song);
                } else {
                    console.log("Ya se está reproduciendo una canción.");
                }
            },
            pause: function() {
                if (isPlaying) {
                    isPlaying = false;
                    console.log("Pausa.");
                } else {
                    console.log("No hay ninguna canción reproduciéndose.");
                }
            },
            stop: function() {
                if (isPlaying) {
                    isPlaying = false;
                    currentSong = null;
                    console.log("Reproductor detenido.");
                } else {
                    console.log("No hay ninguna canción reproduciéndose.");
                }
            },
            getCurrentSong: function() {
                return currentSong;
            },
            isPlaying: function() {
                return isPlaying;
            }
        };
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Uso del Singleton
const player1 = MusicPlayer.getInstance();
const player2 = MusicPlayer.getInstance();

console.log(player1 === player2); // Devuelve true, solo hay una instancia del reproductor

player1.play("Canción 1");
player2.play("Canción 2"); // No reproducirá, ya que hay una canción reproduciéndose en player1
player1.pause();
player2.stop();
