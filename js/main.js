// import {saludar as sal , saludar2 as sal2}  from "./components/funciones.js"
// import {datos}  from "./components/funciones.js"

// let a = 5;

// console.log("wenas");
// console.log(a);
// console.trace(a);

// console.log(sal);
// console.log(sal2);

// console.log(datos.saludar)

// console.log()

// let a = 0
// var b = 0
// const c = 0

// let d = `asd ${a} `;

// console.log(d)


{

    
    // {
        //     // Cálculo del promedio de tres números e indicar si el estudiante aprobó o reprobó
        
        //     let noteOne = Number(prompt("nota 1"))
        //     let noteTwo = Number(prompt("nota 2"))
//     let noteThree = Number(prompt("nota 3"))

//     let total = noteOne + noteTwo + noteThree

//     console.log( "La nota total es; " + total)

// }

// {
// //    Determinar si un número es par o impar usando prompt
//     let num = Number(prompt("ingrese un numero"))

//     if (num%2 == 0 ) {
//         console.log("es par")
//     } else {
    //         console.log("es impar")
//     }

//     console.log(` el numero es ${num} `)
// }

// {
    //     //Suma de los primeros n números naturales usando un ciclo for
//     let contador = 0;
//     let nNaturales = Number(prompt("ingrese un numero") );


//     for (let i = 1; i <= nNaturales ; i++) {
    
//         contador += i

//     }

//     console.log(contador)


// }

// {
    //     //Validar si un número es positivo, negativo o cero con while
//     let num = Number(prompt("numero: "))

//     while (num > 0) {
    //         console.log("positivo")
//         break
        

//     }

//     while (num < 0) {
//         console.log("negativo")
//         break

//     }

//     while (num  == 0) {
    //         console.log("es cero")
//         break

//     }


// }

// {
//     // Verificar si un número es primo con un ciclo 
//     let num = Number(prompt("Ingrese un número: "));

//     if (num <= 1) {
    //         console.log("El número no es primo");
    //     } else {
//         let isPrime = true;
        
//         for (let i = 2; i <= Math.sqrt(num); i++) {
    //             if (num % i === 0) {
        //                 isPrime = false;
        //                 break;
        //             }
        //         }
        
//         if (isPrime) {

//             console.log("El número es primo");

//         } else {
    
    //             console.log("El número no es primo");
//         }
//     }

// }

}

//DOOM- Document Object Model

// console.log(document.body.children[0]);

// let a = document.getElementsByTagName("h1")
// console.log(a)

// let b = document.getElementsByClassName("Sec")
// console.log(b[0])

// let c = document.getElementById("ex")
// console.log(c)

// const Sec = document.querySelectorAll("h1")
// console.log(Sec)

// const sec = document.querySelectorAll(
//     `.Sec article`
//     )
// console.log(sec[0])

// let a = document.querySelectorAll(".nav_menu ul li")

// // a.textContent = "Ahola"

// // a.innerHTML = "<span>hello</span> "

// // let texto = a.textContent;

// // a.style.color = "red"

// //a.classList.add("class")



// for (let i = 0; i < a.length; i++) {
//     if (i == 1 || i == 3) {
        
//         a[i].classList.add("selection"); 

//     }
    
// }


// console.log(a)

const myInformacion = document.querySelector("#myInformacion");

myInformacion.addEventListener("submit" , e=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    console.log(data)


});

