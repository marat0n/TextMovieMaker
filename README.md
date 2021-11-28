# USAGE

### `Movie` object description
For creating animation you need instantiate new `Movie` object with require parameters: <br />
`movieID`: it is id of HTML-element that contains your animation; <br />
`frameDuration`: it is duration of every frame (wow); <br />
`framesList`: it is list of instatiations of `Frame` object.

### `Frame` object description:
You need use this class for creating your animation frames.
Parameters: <br />
`content`: yes, it is just content; <br />
`classList`: it is list of HTML-classes that the element with `movieID` receives during this frame.

# EXAMPLES
You can check demo-files in project directory. Or look at this example:
```html
<script>
    function Play() {
        let m = new Movie(
            "movie",
            1000,
            [
                new Frame("😎👌", ""),
                new Frame("😘🕶️👌", ""),
                new Frame("THE END", "end")
            ]
        );

        m.movieLoop();
    }
</script>
```
