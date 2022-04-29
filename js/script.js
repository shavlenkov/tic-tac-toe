let i = 0;
let win = 0
let map = [[0, 1, 2], [3, 4, 5], [6, 8, 9]]


function clickOnBlock(btn) {

    let id = btn.getAttribute("id");

    let popup = document.getElementById("popup-black");

    let block = document.getElementById(id);
    let container = document.getElementById("container");

    let message = document.getElementById("message");

    let row = id.split("-")[0];
    let col = id.split("-")[1];

    if(block.innerHTML == "" && win != 1) {
        i++;

        if((i % 2) == 0) {
            message.innerText = ""

            let i = document.createElement("i");
            i.classList.add("fa-regular", "fa-circle")

            block.classList.add("lock")

            block.append(i)

            message.innerText = "Ход крестика";

            map[row][col] = "нолик";

            container.setAttribute("style", "background: linear-gradient(#ffb300, #ff4000)");


        } else {
            message.innerText = "";

            let i = document.createElement("i");
            i.classList.add("fa-solid", "fa-xmark");

            block.classList.add("lock")

            block.append(i);
            message.innerText = "Ход нолика";

            map[row][col] = "крестик";

            container.setAttribute("style", "background: linear-gradient(#57bcff, #3845ff)");

        }

    }

    if(i >= 4 && win != 1) {

        let winner = document.getElementById("winner");
        let btn_refresh = document.getElementById("refresh");

        btn_refresh.onclick = function() {
            window.location.reload();
        }

        if (map[0][0] == map[1][1] && map[1][1]  == map[2][2]) {
            winner.innerText = `Победил ${map[0][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[0][0] == map[0][1] && map[0][1] == map[0][2]) {
            winner.innerText = `Победил ${map[0][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[0][0] == map[1][0] && map[1][0] == map[2][0]) {
            winner.innerText = `Победил ${map[0][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[0][1] == map[1][1] && map[1][1] == map[2][1]) {
            winner.innerText = `Победил ${map[0][1]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[1][0] == map[1][1] && map[1][1] == map[1][2]) {
            winner.innerText = `Победил ${map[1][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[0][2] == map[1][2] && map[1][2] == map[2][2]) {
            winner.innerText = `Победил ${map[0][2]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[2][0] == map[2][1] && map[2][1] == map[2][2]) {
            winner.innerText = `Победил ${map[2][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(map[0][2] == map[1][1] && map[1][1] == map[2][0]) {
            winner.innerText = `Победил ${map[2][0]}`
            message.innerText = 'Победа'
            popup.setAttribute("style", "display:block")
            win++;
        } else if(i == 9) {
            winner.innerText = "Ничья"
            message.innerText = 'Ничья'
            popup.setAttribute("style", "display:block")
            win++;
        }

        if(winner.innerText.split(" ")[1] == "крестик") {
            container.setAttribute("style", "background: linear-gradient(#ffb300, #ff4000)");
        } else if(winner.innerText.split(" ")[1] == "нолик") {
            container.setAttribute("style", "background: linear-gradient(#57bcff, #3845ff)");
        }

    }



}