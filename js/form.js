document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    const telefono = "+5491125870101";
  
    const cliente = document.querySelector("#cliente").value;
    const fecha = document.querySelector("#fecha").value;
    const hora = document.querySelector("#hora").value;
    const servicio = document.querySelector("#servicio").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *Musa Beauty Olivos*%0A
          *Reservas*%0A%0A
          *nombre y apellido*%0A
          ${cliente}%0A
          *fecha que quiero de la reserva*%0A
          ${fecha}%0A
          *hora que quiero de la reserva*%0A
          ${hora}%0A
          *servicio que se desea realizar*%0A
          ${servicio}`;
  
    if (cliente === "" || fecha === "" || hora === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });