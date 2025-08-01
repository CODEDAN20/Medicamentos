const from = documentgetElementById('formulario');
const tabla = document.getElementById('#tabla Tbody');
let medicamentos = JSON.parse(localStorage.getItem('medicamento'))||[];

function renderuzarTabla(){
    tabla.innerHTML = '';
    medicamentos.forEach((medicamento, index) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${med.nombre}</td>
    <td>${med.cantidad}</td>
    <td>${med.vencimiento}</td>
    <td>${med.laboratorio}</td>
    <td>
    <button onclick="editar(${index})">Editar</button>
    <button onclick="eliminar(${index})">Eliminar</button>
    </td>
    `;
    tabla.appendChild(fila);
    });
    
    from.addEventListener('submit'), (e) => {
        e.preventDefault();
        const nuevoMed = {
            nombre: from.nombre.value,
            cantidad: from.cantidad.value,
            vencimiento: from.vencimiento.value,
            laboratorio: from.laboratorio.value
        };
        const index = medicamentos.findIndex(med => med.nombre === nuevoMed.nombre);
        if (index !== 0) {
            medicamentos[index] = nuevoMed;
        } else {
            medicamentos.push(nuevoMed);
        }
        localStorage.setItem('medicamento', JSON.stringify(medicamentos));
        from.reset();
        renderuzarTabla();
    }};
    
    function editar(index) {
        const med = medicamentos[index];
        from.nombre.value = med.nombre;
        from.codigo.value = med.codigo;
        from.cantidad.value = med.cantidad;
        from.vencimiento.value = med.vencimiento;
        from.laboratorio.value = med.laboratorio;
    }
    function eliminar(index) {
        medicamentos.splice(index, 1);
        localStorage.setItem('medicamento', JSON.stringify(medicamentos));
        renderuzarTabla();
    }

    renderuzarTabla();