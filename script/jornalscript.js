// Dados dos jornais
const newspapers = [
    { id: 1, img: "newspaper_31.jpg", title: "Edição 1", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 2, img: "newspaper_31.jpg", title: "Edição 2", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est." , link: "https://minimundo.com.br/jornal/edicao-31/"},
    { id: 3, img: "newspaper_31.jpg", title: "Edição 3", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 4, img: "newspaper_31.jpg", title: "Edição 4", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 5, img: "newspaper_31.jpg", title: "Edição 5", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 6, img: "newspaper_31.jpg", title: "Edição 6", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 7, img: "newspaper_31.jpg", title: "Edição 7", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" },
    { id: 8, img: "newspaper_31.jpg", title: "Edição 8", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque enim nec efficitur pellentesque. Aliquam ultricies porttitor magna, et sagittis est gravida at. Nam sagittis ligula ipsum, at vulputate sem bibendum vel. Curabitur sed purus diam. Curabitur eleifend quam sit amet metus porta eleifend. Proin suscipit pellentesque purus non rutrum. Nullam hendrerit orci eu viverra consequat. Duis libero ligula, consequat vitae lacus et, sodales convallis est.", link: "https://minimundo.com.br/jornal/edicao-31/" }
];

const grid = document.getElementById("newspaperGrid");
const panel = document.getElementById("editionPanel");


function openPanel(paper, clickedItem) {
    document.getElementById("panelImg").src = "./assets/" + paper.img;
    document.getElementById("panelTitle").textContent = paper.title;
    document.getElementById("panelDesc").textContent = paper.desc;

    panel.classList.remove("hidden");

    const allItems = [...document.querySelectorAll(".newspaper-item")];
    const index = allItems.indexOf(clickedItem);
    const columns = 4;

    const rowEndIndex = index - (index % columns) + (columns - 1);

    const target = allItems[Math.min(rowEndIndex, allItems.length - 1)];

    target.insertAdjacentElement("afterend", panel);
}

newspapers.forEach((paper, index) => {
    const div = document.createElement("div");
    div.className = "newspaper-item";

    const readButton = document.querySelector(".linkpath");
    readButton.href = paper.link;
    

    div.innerHTML = `<img src="./assets/${paper.img}" alt="${paper.title}">`;
    div.addEventListener("click", () => openPanel(paper, div));

    grid.appendChild(div);
});