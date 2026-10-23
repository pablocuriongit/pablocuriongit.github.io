window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["requisitos"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📋</span>
        <span>Análisis de Requisitos del Sistema</span>
    </div>
    <p>Esta sección define <strong>qué debe hacer</strong> la suite, con <strong>qué calidad</strong> y <strong>cómo lo comprobaremos</strong>. Hay ejemplos resueltos y filas vacías que <strong>deberás completar</strong>.</p>
</div>

<h3>4.1. Análisis Funcional: Método de Verbos de Acción</h3>
<p>Se usa el <strong>método de verbos de acción</strong>, una plantilla que obliga a redactar cada requisito así:</p>
<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Plantilla de redacción</span>
    </div>
    <p><strong>El sistema debe</strong> + <strong>verbo de acción</strong> + <strong>objeto</strong> + <strong>condición medible</strong></p>
    <pre class="text-xs overflow-x-auto">Ejemplo: El sistema debe validar el formato del nombre de usuario
según la plantilla apellidos_inicial antes de crear la cuenta.</pre>
    <ul class="list-disc pl-6 space-y-1 mt-3">
        <li><strong>Verbo:</strong> crear, validar, exportar, verificar, notificar, registrar.</li>
        <li><strong>Objeto:</strong> qué se toma (una cuenta, un fichero, una copia).</li>
        <li><strong>Condición:</strong> una cifra, un formato o un umbral comprobable.</li>
    </ul>
</div>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Errores comunes al redactar requisitos</span>
    </div>
    <ul class="list-disc pl-6 space-y-1">
        <li><strong>Requisitos ambiguos sin cuantificar:</strong> «el backup debe ser rápido» no se puede comprobar; di «debe durar menos de 60 minutos».</li>
        <li>Verbos vagos: «debe intentar funcionar bien». Usa verbos observables.</li>
        <li>Mezclar requisito con solución («hay que usar rsync» es diseño) u olvidar el fallo.</li>
    </ul>
</div>

<h4>Tabla de Requisitos Funcionales (RF-01 a RF-08)</h4>
<p>Cuatro filas están resueltas como ejemplo. Completa <strong>RF-05 a RF-08</strong> con los módulos M4 y M5.</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Código</th>
            <th class="border border-slate-200 p-3 text-left">Redacción del requisito</th>
            <th class="border border-slate-200 p-3 text-left">Prioridad</th>
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">RF-01</td><td class="border border-slate-200 p-3">El sistema debe validar el formato del nombre de usuario según la plantilla apellidos_inicial, rechazando el alta si no cumple el patrón.</td><td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span></td><td class="border border-slate-200 p-3">M1</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-02</td><td class="border border-slate-200 p-3">El sistema debe crear, modificar y dar de baja cuentas en Active Directory de forma masiva desde un CSV y en su unidad de organización.</td><td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span></td><td class="border border-slate-200 p-3">M1</td></tr>
        <tr><td class="border border-slate-200 p-3">RF-03</td><td class="border border-slate-200 p-3">El sistema debe ejecutar copias diarias de carpetas y base de datos MySQL, verificarlas con checksum y notificarlas por correo.</td><td class="border border-slate-200 p-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">CRÍTICA</span></td><td class="border border-slate-200 p-3">M2</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-04</td><td class="border border-slate-200 p-3">El sistema debe inventariar hardware y software de los 90 equipos y generar informes en CSV y HTML.</td><td class="border border-slate-200 p-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">ALTA</span></td><td class="border border-slate-200 p-3">M3</td></tr>
        <tr><td class="border border-slate-200 p-3">RF-05</td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-06</td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">RF-07</td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-08</td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
    </tbody>
</table>

<h4>Mapeo Módulo ↔ Requisitos</h4>
<p>Cada requisito debe tener módulo que lo cubra y ningún módulo puede quedar sin requisitos.</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Requisitos</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">M1 · Usuarios AD</td><td class="border border-slate-200 p-3">RF-01, RF-02</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">M2 · Copias</td><td class="border border-slate-200 p-3">RF-03</td></tr>
        <tr><td class="border border-slate-200 p-3">M3 · Inventario</td><td class="border border-slate-200 p-3">RF-04</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">M4 · Higiene de cuentas</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">M5 · Planificación</td><td class="border border-slate-200 p-3"></td></tr>
    </tbody>
</table>

<hr class="my-8">

<h3>4.2. Requisitos No Funcionales</h3>
<p>Describen <strong>con qué calidad</strong> trabaja la suite. Completa las filas vacías con una comprobación objetiva: una prueba, un conteo o una medición.</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Categoría</th>
            <th class="border border-slate-200 p-3 text-left">Requisito no funcional</th>
            <th class="border border-slate-200 p-3 text-left">Criterio de verificación</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Rendimiento</td><td class="border border-slate-200 p-3">Una alta de usuario en Active Directory debe completarse en menos de 1 minuto.</td><td class="border border-slate-200 p-3">Cronometrar 10 altas seguidas y calcular la media.</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Rendimiento</td><td class="border border-slate-200 p-3">El proceso completo de copia de seguridad debe durar menos de 60 minutos.</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">Seguridad</td><td class="border border-slate-200 p-3">RGPD y LOPDGDD: los datos personales no deben aparecer en claro en logs ni informes.</td><td class="border border-slate-200 p-3">Buscar NIF o contraseñas dentro de los logs generados.</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Seguridad</td><td class="border border-slate-200 p-3">Mínimo privilegio: los scripts se ejecutan con una cuenta de servicio, nunca con Administrator.</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">Seguridad</td><td class="border border-slate-200 p-3">Contraseñas de 12 caracteres como mínimo, con mayúsculas, minúsculas, dígito y símbolo.</td><td class="border border-slate-200 p-3">Analizar 20 contraseñas con un verificador de complejidad.</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Usabilidad</td><td class="border border-slate-200 p-3">Todo script debe mostrar salida por consola clara y ayuda con el parámetro --help.</td><td class="border border-slate-200 p-3"></td></tr>
                <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Compatibilidad</td><td class="border border-slate-200 p-3">Windows Server 2022 con PowerShell 5.1 o superior y, si es posible, PowerShell 7.</td><td class="border border-slate-200 p-3"></td></tr>
                <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Fiabilidad</td><td class="border border-slate-200 p-3">Reintentar las operaciones fallidas hasta 3 veces y terminar con código de salida 0 (éxito), 1 (error) o 2 (uso incorrecto).</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">Fiabilidad</td><td class="border border-slate-200 p-3">Cada ejecución debe dejar registro en un log con fecha, usuario, módulo y resultado.</td><td class="border border-slate-200 p-3">Revisar el log tras 10 ejecuciones seguidas.</td></tr>
    </tbody>
</table>

<hr class="my-8">

<h3>4.3. Requisitos Técnicos y de Entorno</h3>
<p>Qué necesitas <strong>disponer antes de programar</strong>: todo el entorno es virtual y de laboratorio.</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">Elemento</th>
            <th class="border border-slate-200 p-3 text-left">Especificación requerida</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Hardware</td><td class="border border-slate-200 p-3">Máquina anfitriona</td><td class="border border-slate-200 p-3">CPU con virtualización (VT-x/AMD-V), 16 GB de RAM y 250 GB libres</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Hardware</td><td class="border border-slate-200 p-3">Máquinas virtuales</td><td class="border border-slate-200 p-3">1 MV Windows Server 2022, 1 MV Windows 10/11 y 1 MV Debian 12 en red aislada 192.168.56.0/24</td></tr>
        <tr><td class="border border-slate-200 p-3">Software</td><td class="border border-slate-200 p-3">Motor de scripts</td><td class="border border-slate-200 p-3">PowerShell 5.1 y 7, Bash (GNU), Python 3.11 con pip</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Software</td><td class="border border-slate-200 p-3">Auxiliares</td><td class="border border-slate-200 p-3">VS Code, Git, rsync, mysqldump, cliente MySQL y pytest</td></tr>
        <tr><td class="border border-slate-200 p-3">Entorno</td><td class="border border-slate-200 p-3">Active Directory de prueba</td><td class="border border-slate-200 p-3">Dominio mediconnect.lab: 30 cuentas, 3 unidades de organización y 2 grupos</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Entorno</td><td class="border border-slate-200 p-3">Base de datos de prueba</td><td class="border border-slate-200 p-3">MySQL 8 con la base de datos de citas y un volcado de ejemplo</td></tr>
    </tbody>
</table>

<h3>4.4. Criterios de Aceptación y Métricas</h3>
<p>Las métricas se <strong>miden y se comparan con un objetivo</strong> (OE SMART de 1.4). Rellena «Estado» con tu valor real.</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Métrica</th>
            <th class="border border-slate-200 p-3 text-left">Fórmula</th>
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
            <th class="border border-slate-200 p-3 text-left">Estado</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">Tiempo medio de alta</td><td class="border border-slate-200 p-3">10 altas ÷ 10</td><td class="border border-slate-200 p-3">Menos de 1 minuto (OE-01)</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">Copias verificadas</td><td class="border border-slate-200 p-3">Checksum OK ÷ programadas × 100</td><td class="border border-slate-200 p-3">100% y aviso en 15 min (OE-02)</td><td class="border border-slate-200 p-3"></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Precisión del inventario</td><td class="border border-slate-200 p-3">Campos correctos ÷ totales × 100</td><td class="border border-slate-200 p-3">98% sobre 90 equipos (OE-03)</td><td class="border border-slate-200 p-3"></td></tr>
        <tr><td class="border border-slate-200 p-3">Cuentas huérfanas</td><td class="border border-slate-200 p-3">Dadas de baja ÷ 18 × 100</td><td class="border border-slate-200 p-3">100% de las 18 (OE-04)</td><td class="border border-slate-200 p-3"></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">Ejecuciones con log</td><td class="border border-slate-200 p-3">Con registro ÷ totales × 100</td><td class="border border-slate-200 p-3">100% en 5 módulos (OE-06)</td><td class="border border-slate-200 p-3"></td></tr>
    </tbody>
</table>

<h3>4.5. Matriz de Trazabilidad</h3>
<p>Conecta requisito, módulo, prueba y sección: <strong>«¿dónde está implementado y probado este requisito?»</strong></p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Requisito</th>
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Prueba</th>
            <th class="border border-slate-200 p-3 text-left">Sección</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">RF-01</td><td class="border border-slate-200 p-3">M1 · Usuarios AD</td><td class="border border-slate-200 p-3">Prueba del patrón de nombre</td><td class="border border-slate-200 p-3">6.1 · M1</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">RF-03</td><td class="border border-slate-200 p-3">M2 · Copias</td><td class="border border-slate-200 p-3">Checksum y fallo simulado</td><td class="border border-slate-200 p-3">6.2 · M2</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td><td class="border border-slate-200 p-3"></td></tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Actividad para el Alumnado</span>
    </div>
    <ol class="list-decimal list-inside space-y-2">
        <li>Redactar <strong>RF-05 a RF-08</strong> con la plantilla de verbos y justificar su prioridad.</li>
        <li>Completar los criterios de verificación vacíos de 4.2 con pruebas observables.</li>
        <li>Rellenar la columna «Estado» de 4.4 con tus primeras mediciones.</li>
        <li>Completar la matriz con 8 filas y añadir un requisito no funcional propio.</li>
    </ol>
</div>
<div class="callout callout-success">
    <div class="callout-title">
        <span>🏁</span>
        <span>Resultado esperado</span>
    </div>
    <p>Un <strong>catálogo de requisitos cerrado, cuantificado y trazable</strong>: el contrato que te permitirá decidir en la sección 6 si tu suite está terminada.</p>
</div>
`;
