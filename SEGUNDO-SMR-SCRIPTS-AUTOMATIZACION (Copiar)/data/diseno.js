window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["diseno"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🎨</span>
        <span>Diseño de la Suite de Scripts</span>
    </div>
    <p>Antes de escribir código conviene decidir <strong>cómo se organiza la suite, cómo circulan los datos y cómo se prueban</strong>. Esta guía ofrece ejemplos que <strong>deberás adaptar y completar</strong>.</p>
</div>

<h3>5.1. Arquitectura de la Suite</h3>
<p>El MediConnect AutoAdmin Toolkit trabaja en <strong>cuatro capas</strong> para facilitar el mantenimiento:</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Capa</th>
            <th class="border border-slate-200 p-3 text-left">Qué contiene</th>
            <th class="border border-slate-200 p-3 text-left">Ejemplos</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-3">1 · Fuentes de datos</td><td class="border border-slate-200 p-3">Origen de datos</td><td class="border border-slate-200 p-3">Active Directory, CSV, MySQL</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">2 · Scripts</td><td class="border border-slate-200 p-3">Lógica</td><td class="border border-slate-200 p-3">M1 PowerShell, M2 Bash, M3 Python, M4 mixto, M5 cron</td></tr>
        <tr><td class="border border-slate-200 p-3">3 · Logs e informes</td><td class="border border-slate-200 p-3">Evidencia</td><td class="border border-slate-200 p-3">Logs, CSV e HTML</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-3">4 · Alertas</td><td class="border border-slate-200 p-3">Avisos</td><td class="border border-slate-200 p-3">Correos y códigos de salida</td></tr>
    </tbody>
</table>
<div class="grid md:grid-cols-2 gap-4 my-6">
    <div class="bg-white rounded-xl border border-slate-200 p-4"><strong>M1 · Usuarios AD</strong><p class="text-sm">PowerShell + CSV con validación.</p></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4"><strong>M2 · Copias</strong><p class="text-sm">Bash + rsync + mysqldump + checksum.</p></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4"><strong>M3 · Inventario</strong><p class="text-sm">Python genera CSV y HTML.</p></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4"><strong>M4 · Higiene</strong><p class="text-sm">Detecta cuentas inactivas más de 60 días.</p></div>
    <div class="bg-white rounded-xl border border-slate-200 p-4 md:col-span-2"><strong>M5 · Planificación</strong><p class="text-sm">cron / Programador de tareas y alertas.</p></div>
</div>
<div class="relative my-6">
    <img src="./images/terminal.jpg" alt="Terminal de ejecución de scripts" class="w-full rounded-2xl shadow-md">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: Ejecución de los scripts desde terminal.</p>
</div>
<div class="callout callout-warning">
    <div class="callout-title"><span>✏️</span><span>Tu diagrama de arquitectura</span></div>
    <p>Dibuja tu propio diagrama con las 4 capas y tus módulos. Usa Draw.io/diagrams.net, Mermaid o papel. Inclúyelo en la sección con su pie de figura.</p>
</div>

<hr class="my-6">

<h3>5.2. Estructura de Carpetas</h3>
<div class="callout callout-info">
    <div class="callout-title"><span>📁</span><span>Árbol propuesto</span></div>
    <pre class="text-xs overflow-x-auto">mediconnect-autoadmin-toolkit/
├── bin/        # Ejecutables
├── lib/        # Funciones comunes
├── config/     # Configuración
├── logs/       # Logs
├── reports/    # Informes
├── docs/       # Documentación
├── tests/      # Pruebas
├── .gitignore
└── README.md</pre>
</div>

<hr class="my-6">

<h3>5.3. Flujo de Datos de una Copia de Seguridad</h3>
<ol class="list-decimal pl-6 space-y-1">
    <li>Origen: datos y MySQL.</li>
    <li>Compresión y empaquetado con fecha.</li>
    <li>Transferencia a destino con rsync/SSH.</li>
    <li>Verificación con checksum.</li>
    <li>Retención 30/90/365 días.</li>
    <li>Registro en log.</li>
    <li>Aviso por correo.</li>
</ol>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-2 text-left">Estado</th>
            <th class="border border-slate-200 p-2 text-left">Código</th>
            <th class="border border-slate-200 p-2 text-left">Acción</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-2">COMPLETADO</td><td class="border border-slate-200 p-2">0</td><td class="border border-slate-200 p-2">Archivar log</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-2">FALLIDO</td><td class="border border-slate-200 p-2">1</td><td class="border border-slate-200 p-2">Reintentar</td></tr>
        <tr><td class="border border-slate-200 p-2">USO INCORRECTO</td><td class="border border-slate-200 p-2">2</td><td class="border border-slate-200 p-2">Corregir parámetros</td></tr>
    </tbody>
</table>

<hr class="my-6">

<h3>5.4. Estándares de Código y Nomenclatura</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-2 text-left">Regla</th>
            <th class="border border-slate-200 p-2 text-left">Correcto</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-2">Nombres de script</td><td class="border border-slate-200 p-2"><code class="text-sm">m2_backup_diario.sh</code></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-2">Constantes</td><td class="border border-slate-200 p-2"><code class="text-sm">DIAS_RETENCION=30</code></td></tr>
        <tr><td class="border border-slate-200 p-2">UTF-8</td><td class="border border-slate-200 p-2"><code class="text-sm">UTF-8 sin BOM</code></td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-2">Códigos salida</td><td class="border border-slate-200 p-2"><code class="text-sm">0 éxito, 1 error, 2 uso incorrecto</code></td></tr>
        <tr><td class="border border-slate-200 p-2">Ayuda</td><td class="border border-slate-200 p-2"><code class="text-sm">--help obligatorio</code></td></tr>
    </tbody>
</table>

<hr class="my-6">

<h3>5.5. Logs y Nomenclatura</h3>
<div class="callout callout-info">
    <pre class="text-xs overflow-x-auto">2026-10-20 03:15:42 | M2 | backup_diario | jefe_sistemas | OK | duracion=41m | tamano=12.4GB</pre>
</div>
<p>Nombre de usuario: <code class="text-sm">apellidos_en_minusculas_inicial</code> (ej. <code class="text-sm">garcia_l</code>).</p>

<hr class="my-6">

<h3>5.6. Pruebas Unitarias</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-2 text-left">Caso</th>
            <th class="border border-slate-200 p-2 text-left">Requisito</th>
            <th class="border border-slate-200 p-2 text-left">Resultado esperado</th>
        </tr>
    </thead>
    <tbody>
        <tr><td class="border border-slate-200 p-2">Nombre válido</td><td class="border border-slate-200 p-2">RF-01</td><td class="border border-slate-200 p-2">Alta permitida (0)</td></tr>
        <tr class="bg-slate-50"><td class="border border-slate-200 p-2">Nombre inválido</td><td class="border border-slate-200 p-2">RF-01</td><td class="border border-slate-200 p-2">Rechazo (1)</td></tr>
        <tr><td class="border border-slate-200 p-2">Permisos fallidos</td><td class="border border-slate-200 p-2">RF-03</td><td class="border border-slate-200 p-2">FALLIDO (1)</td></tr>
    </tbody>
</table>
<div class="relative my-6">
    <img src="./images/codigo.jpg" alt="Código de scripts" class="w-full rounded-2xl shadow-md">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 2: Código siguiendo los estándares.</p>
</div>
<div class="callout callout-warning">
    <div class="callout-title"><span>📝</span><span>Actividad para el Alumnado</span></div>
    <ol class="list-decimal list-inside space-y-1">
        <li>Dibuja tu diagrama de arquitectura propio.</li>
        <li>Define tu árbol de carpetas definitivo.</li>
        <li>Documenta tu flujo de backup con sus estados.</li>
        <li>Escribe 6 reglas de código en tu README.</li>
        <li>Completa tu plantilla CSV de inventario.</li>
        <li>Diseña al menos 6 casos de prueba.</li>
    </ol>
</div>
`;
