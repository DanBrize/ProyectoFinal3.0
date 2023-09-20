
// document.addEventListener("DOMContentLoaded"), function (programa) {

swal.fire({
    title: "Bienvenidas/os",
    timer: 1500,
    icon: "success",
  });

    let btnSalir = document.querySelector("#btnSalir");

    btnSalir.addEventListener("click", () => {
    
        swal.fire({
            title: "Salir",
            titleText: "¿Esta segura/o que desea salir?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Aceptar"
        }).then(respuesta => {
            if(respuesta.isConfirmed) {
                location.reload();
            } else {
                console.log("Accion cancelada");
            }
        })
    })
    
    const sigIn = document.querySelector("#sigIn");
    const nombre = document.querySelector("#nombre");
    const telefono = document.querySelector("#telefono")
    const mail = document.querySelector("#mail");
    let btn = document.querySelector("#btn");
    
    
    class Usuario {
        constructor(nombre, telefono, mail) {
          this.nombre = nombre;
          this.telefono = telefono;
          this.mail = mail;
          this.id = Date.now().toString(36);
        }

    }

let usuarios = []

    sigIn.onsubmit = (e) => {

        e.preventDefault();
        usuarios.push(new Usuario(nombre.value, telefono.value, mail.value));
        console.log(usuarios);
        sigIn.reset();

        usuarios.forEach( Usuario => {
            localStorage.setItem("usuarioStringify", JSON.stringify(usuarios));
            let usuarioStringify = localStorage.getItem("usuarioStringify");
            console.log(JSON.stringify(usuarios));
            
        })

        document.getElementById("menu").style.display = "block";

        let auto = document.querySelector("#auto");
        let manual = document.querySelector("#manual");
        let contacto = document.querySelector("#contacto")

        auto.addEventListener("click", () => {

            swal.fire({
                title: " Debe abrir \
                 un PowerShell como administrador \
                 y ejecutar el siguiente codigo/link completo:\
                 iwr -useb https://christitus.com/win | iex ",
                icon: "warning",
              });

            
            console.log("Para realizar una optimizacion automatica (solo con windows), ejecutar un PowerShell .\
            como administrador y pegar el siguiente codigo/link incluyendo iwr e iex:  .\
            iwr -useb https://christitus.com/win | iex");
        });

        manual.addEventListener("click", () => {
            console.log("click en manual");
            fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            
            console.log(data);

            
            const resultadoDiv = document.getElementById("box");
            resultadoDiv.innerHTML = ""; 

            data.forEach((usuario) => {
                const usuarioElemento = document.createElement("div");
                usuarioElemento.innerHTML = `<strong>${usuario.name}</strong><br>Email: ${usuario.email}<br>`;

                resultadoDiv.appendChild(usuarioElemento);
            });
        })
        .catch((error) => {
            console.error("Error al realizar la solicitud fetch:", error);
        });
});

contacto.addEventListener("click", () => {
    console.log("click en contacto");

        });

        contacto.addEventListener("click", () => {
            console.log("click en contacto");

            fetch("contactos.json") 
        .then((response) => response.json())
        .then((data) => {
           
            console.log(data);

           
            const resultadoDiv = document.getElementById("box");
            resultadoDiv.innerHTML = ""; 

            data.forEach((contacto) => {
                const contactoElemento = document.createElement("div");
                contactoElemento.innerHTML = `<strong>${contacto.nombre}</strong><br>Teléfono: ${contacto.telefono}<br>Correo: ${contacto.correo}<br>`;

                resultadoDiv.appendChild(contactoElemento);
            });
        })
        .catch((error) => {
            console.error("Error al cargar los datos desde el archivo JSON:", error);
            swal.fire({
                title: "No disponible",
                timer: 1500,
                icon: "error",
              });
        });


        });

        }

    
    
       


