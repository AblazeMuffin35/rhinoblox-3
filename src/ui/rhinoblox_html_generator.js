class RhinoBloxHtmlGenerator {
    static generate(javascript) {
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>RhinoBlox</title>
        </head>
        <body>
            <script src="https://q5js.org/q5.js"></script>

            <script type="module">
                import chroma from 'https://cdn.jsdelivr.net/npm/chroma-js@3.2.0/+esm';
                window.chroma = chroma;
            </script>

            <script>
                let rhinobloxVariables = {};
                let rhinobloxStart = async () => {};
                let rhinobloxUpdate = async () => {};

                Q5.WebGPU();

                function customImageGet(image, x, y) {
                    if (x < 0 || y < 0 || x > image.w || y > image.h) {
                        return chroma('transparent');
                    }

                    try {
                        let color = image.get(x, y);
                        return chroma({
                            r: color[0],
                            g: color[1],
                            b: color[2],
                            a: color[3] / 255
                        });
                    } catch (e) {
                        return chroma('transparent');
                    }
                }

                function customImageSet(image, x, y, pixelColor) {
                    if (x < 0 || y < 0 || x > image.w || y > image.h) {
                        return;
                    }

                    try {
                        image.set(x, y, color(pixelColor.toString()));
                        image.updatePixels();
                    } catch (e) { }
                }

                function customImageFilter(image, filter, value) {
                    try {
                        switch (filter) {
                        case 'blur':
                            image.filter('blur(' + value + 'px)');
                            break;
                        case 'posterize':
                            image.filter(POSTERIZE, value);
                            break;
                        case 'threshold':
                            image.filter(THRESHOLD, value);
                            break;
                        case 'invert':
                            image.filter('invert(' + value + ')');
                            break;
                        case 'hue-rotate':
                            image.filter('hue-rotate(' + value + 'deg)');
                            break;
                        case 'brightness':
                            image.filter('brightness(' + value + ')');
                            break;
                        case 'contrast':
                            image.filter('contrast(' + value + ')');
                            break;
                        case 'sepia':
                            image.filter('sepia(' + value + ')');
                            break;
                        case 'grayscale':
                            image.filter('grayscale(' + value + ')');
                            break;
                        case 'saturate':
                            image.filter('saturate(' + value + ')');
                            break;
                        case 'opacity':
                            image.loadPixels();
                            for (let i = 0; i < image.pixels.length; i += 4) {
                                image.pixels[i + 3] -= 255 - (value * 255);
                            }
                            image.updatePixels();
                            break;
                        default:
                            break;
                        }
                    } catch (e) { }
                }

                function setup() {
                    createCanvas(800, 600);
                    displayMode(MAXED, SMOOTH);
                    noSmooth();
                    background("white");
                    stroke("black");
                    strokeWeight(1);
                    frameRate(120);
                    rectMode(CORNERS);
                    ellipseMode(CORNERS);
                    imageMode(CORNERS);
                    textFont("sans-serif");
                    textSize(25);

                    ${javascript}

                    rhinobloxStart();
                    q5.draw = () => {
                        rhinobloxUpdate();
                    }
                }
            </script>
        </body>
        </html>
        `;

        return html;
    }
}

export { RhinoBloxHtmlGenerator };