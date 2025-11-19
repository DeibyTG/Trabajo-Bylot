export function f_verMapa() {

  const bodyid=document.body.id;

  if(bodyid==='contacto'){

    document.querySelector('.formulario-direccion').addEventListener('submit',(e)=>{
      e.preventDefault();
    });
    
    var map = L.map('map',{
      center:[39.078609, -0.514154],
      zoom:14
    });

    let activador=document.getElementById('ubicacionAutomatica');
    let ubicacionManual=document.getElementById('ubicacionManual');


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: 'Bylot Company'
      }).addTo(map);

    L.marker([39.078609, -0.514154]).addTo(map)
        .bindPopup('Oficina Bylot <br>Plaza Lom<br>46270 , Villanueva de castellon')
        .openPopup();

    activador.addEventListener('click',()=>{
      navigator.geolocation.getCurrentPosition(function(position){
        const lat=position.coords.latitude;
        const lng=position.coords.longitude;
        L.Routing.control({
          language:'es',
          waypoints: [
              L.latLng(39.078609, -0.514154),
              L.latLng(lat, lng),
          ]
        }).addTo(map);
      }) 
    });

    ubicacionManual.addEventListener('click',()=>{

      const activarDisplay=document.querySelector('.display-ruta-manual');
      activarDisplay.classList.toggle('activado');
    })

    const trigerUbicacion=document.getElementById('calcularUbicacionAuto')

    trigerUbicacion.addEventListener('click',()=>{

      const direccion=document.getElementById('buscarDireccion').value;

      const url=`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(direccion)}&format=json&limit=3&addressdetails=1`;

      fetch(url)
        .then(res=>res.json())
        .then(data=>{
          
          if(data.length>0){
            const lugar =data[0];
            const latitude=parseFloat(lugar.lat);
            const longitude=parseFloat(lugar.lon);

            L.Routing.control({
              language:'es',
              draggableWaypoints:false,
              reverseWaypoints:false,
              waypoints:[
              L.latLng(39.078609, -0.514154),
              L.latLng(latitude, longitude),
              ]
            }).addTo(map);

            map.setView([latitude, longitude], 7);
          }else{
            alert("direccion incorrecta")
          }
        })
    })
  }
}





