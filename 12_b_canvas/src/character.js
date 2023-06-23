export function character() {
    let arrKeydown = []
    let container = new createjs.Container();

    let data = {
        images: ["../assets/spritesheetCharacter.png"],
        frames: { width: 121, height: 146, regX: 62.5, regY: 75 },
        speed: 0.1,
        animations: {
            left: {
                frames: [0, 3],
                speed: 0.2
            },
            left: {
                frames: [4, 7],
                speed: 0.2
            },
            left: {
                frames: [8, 11],
                speed: 0.2
            },
            left: {
                frames: [12, 15],
                speed: 0.2
            },
        }
    };
    let spriteSheet = new createjs.SpriteSheet(data);
    let animation = new createjs.Sprite(spriteSheet, "left");

    container.addChild(animation)
    container.set({
        scaleX: 0.5,
        scaleY: 0.5,
    })

    function moveTargets(e) {
        let targetSpeed = 5;

        arrKeydown.forEach((key) => {
            if (key === 'ArrowUp') {
                container.y -= targetSpeed
            }
            if (key === 'ArrowLeft') {
                container.x -= targetSpeed
            }
            if (key === 'ArrowRight') {
                container.x += targetSpeed
            }
            if (key === 'ArrowDown') {
                container.y += targetSpeed
            }
        })

    }

    window.addEventListener('keydown', onKeydown)
    window.addEventListener('keyup', onKeyup)
    container.on('tick', moveTargets)

    function onKeyUp(e) {
        e.preventDefault();
        if (arrKeydown.includes(e.key)) {
            arrKeydown = arrKeydown.filter((item) => {
                return item !== e.key
            })
        }
    }

    function onKeydown(e) {
        e.preventDefault()
        arrKeydown.push(e.key);

    }

    return container;
}