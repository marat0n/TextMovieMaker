class Frame {
    content;
    classList;

    constructor(content, classList) {
        this.content = content;
        this.classList = classList;
    }
}

class Movie {
    movieElem;
    frameDuration;
    allFrames;
    activeFrame;
    activeFrameIndex = 0;
    
    constructor(movieID, frameDuration, framesList) {
        this.movieElem     = document.getElementById(movieID);
        this.frameDuration = frameDuration;
        this.allFrames     = framesList;
        this.activeFrame   = framesList[this.activeFrameIndex];
    }

    movieLoop () {
        setTimeout(() => {
            this.movieElem.classList = this.activeFrame.classList;
            this.movieElem.innerHTML = this.activeFrame.content;
    
            if (this.activeFrameIndex != this.allFrames.length-1) {
                this.activeFrameIndex++;
                this.activeFrame = this.allFrames[this.activeFrameIndex];
                this.movieLoop();
            }
        }, this.frameDuration * Math.min(this.activeFrameIndex, 1));
    }
}
