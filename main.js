

for (let i = 1; i <= 100; i++) {
    // console.log(i);

    // console.log(`Il numero ${i} ha resto: ${resto}`)

    if (i % 3 == 0 && i % 5 == 0) {

        const box = document.createElement("div");
        box.innerHTML = "fizzbuzz";
        box.classList.add("box");
        container.append(box);
        // aggiunge la classe dal css che da il colore
        box.classList.add("fizzbuzz");
        // console.log("fizzbuzz");
    } else if (i % 3 == 0) {

        const box = document.createElement("div");
        box.innerHTML = "buzz";
        box.classList.add("box");
        container.append(box);
        // aggiunge la classe dal css che da il colore
        box.classList.add("buzz");
        // console.log("buzz");
    } else if (i % 5 == 0) {

        const box = document.createElement("div");
        box.innerHTML = "fizz";
        box.classList.add("box");
        container.append(box);
        // aggiunge la classe dal css che da il colore
        box.classList.add("fizz");
        // console.log("fizz")
    } else {

        const box = document.createElement("div");
        box.innerHTML = "i";
        box.classList.add("box");
        container.append(box);
        // console.log(i);
    }
    
}

// const container = document.getElementById("container");

// const box = document.createElement("div");
// box.innerHTML = "numero";
// box.classList.add("box");
// container.append(box);

// problemi nel creare un ciclo e usare l'append