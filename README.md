[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/bibisixtynine/livecoding-webaudio-tonejs)


## Live coding music with WebAudio, WebMidi &amp; ToneJS

This is a musical live coding environment built for a talk at [DevFest Toulouse 2019](https://devfesttoulouse.fr/) and the source code used for the talk. The [talk was also recorded](https://www.youtube.com/watch?v=LShM4QzMOxY) (in French).

The goal of this talk is to walk the audience in 45 minutes through the concepts of [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) and [ToneJS](https://github.com/Tonejs/Tone.js) and go from a raw oscillator producing a sine wave to a complete song with drums, bass line, pad and lead melody and effects that can be tuned live with a MIDI controller.

Challenge accepted, it worked 🎶😊

The editor used is [Monaco editor](https://microsoft.github.io/monaco-editor/), the embeddable version of VS-Code's editor. So you have all the nice syntax verification and code completion features.

### How to use it?

You can head to https://swallez.github.io/livecoding-webaudio-tonejs/ and start live-coding/playing! Be patient though, the editor is a bit big and takes time to load.

To run locally, run `npm run build && npm run serve`: it builds to the `docs` directory and serves it on http://localhost:8080/

If you want to tweak the live-coding environment's code (not the music code, use the live-coding environment for that), run `npm run serve-dev`: it starts the live-reloading Webpack server on http://localhost:8080/

### I'm in a hurry! What does it sound like?

A [teaser for the talk](https://www.youtube.com/watch?v=dQ3fUMdueqs) and the [final track](https://www.youtube.com/watch?v=fBAHuxrnXj0) are on YouTube. If you understand French (or just want to follow the demo), [watch the talk](https://www.youtube.com/watch?v=LShM4QzMOxY).

### License

Apache Licence 2.0

By contributing to this repository you implicitly accept your contributions to be licensed under the Apache License 2.0
