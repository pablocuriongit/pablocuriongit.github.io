window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["anexos"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📎</span>
        <span>Anexos del Proyecto</span>
    </div>
    <p>
        Documentación operativa complementaria: estructura del repositorio, plantillas, formatos de datos,
        registro de pruebas y espacio para tus capturas. Complétalos a medida que avanzas.
    </p>
</div>

<h3>Anexo A · Estructura de Carpetas del Toolkit</h3>
<p>
    Estructura recomendada del repositorio; si tu equipo decide otra, documéntalo en el README.
</p>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-xs text-green-400">mediconnect-autotoolkit/
├── README.md
├── LICENSE
├── .gitignore
├── scripts/
│   ├── m1-usuarios-ad/
│   │   ├── alta-usuario.ps1
│   │   ├── baja-usuario.ps1
│   │   └── modificar-usuarios.ps1
│   ├── m2-copias/
│   │   ├── backup-diario.sh
│   │   ├── verificar-backup.sh
│   │   └── enviar-informe.sh
│   ├── m3-inventario/
│   │   ├── inventario.py
│   │   └── plantilla-informe.html
│   ├── m4-higiene-cuentas/
│   │   ├── detectar-inactivas.ps1
│   │   └── detectar-inactivas-linux.sh
│   └── m5-planificacion/
│       ├── tareas.xml
│       └── crontab.txt
├── datos/
│   ├── usuarios-ejemplo.csv
│   └── inventario-ejemplo.csv
├── logs/
│   └── diccionario-logs.md
├── docs/
│   ├── guia-operacion.md
│   └── informes-backup/
└── anexos/
    ├── capturas/
    └── registro-pruebas.csv</pre>
</div>

<h3>Anexo B · Plantilla de Cabecera de Script</h3>
<p>Cada script debe abrirse con un bloque de metadatos como este:</p>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-xs text-green-400"># ============================================================
# Nombre del script : backup-diario.sh
# Módulo            : M2 · Copias de seguridad
# Autor/a           : Nombre Apellidos (grupo X · 2º SMR)
# Fecha de creación : dd/mm/aaaa
# Versión           : 1.0.0
# Descripción       : Copia incremental con rsync, volcado MySQL,
#                     verificación e informe por correo.
# Uso               : ./backup-diario.sh [origen] [destino]
# Entradas          : /var/www/mediconnect · credenciales en
#                     variables de entorno (nunca en el código)
# Salidas           : /srv/backup/incremental/ ·
#                     /var/log/autotoolkit/backup.log
# Requisitos        : rsync, mysql-client, gzip, mailx
# Códigos de salida : 0=OK · 1=permisos · 2=rsync · 3=dump ·
#                     4=verificación fallida
# Planificación     : cron · 0 2 * * *
# ============================================================</pre>
</div>

<h3>Anexo C · Formato del CSV de Inventario</h3>
<p>El M3 debe exportar exactamente esta cabecera CSV:</p>
<div class="bg-slate-900 rounded-lg p-6 my-6 overflow-x-auto">
    <pre class="text-xs text-green-400">hostname,ip,so,version_so,procesador,ram_gb,discos_gb,mac,ubicacion,fecha_inventario
SRV-DEBIAN-01,10.20.0.11,Debian,12.7,Intel Xeon E-2224,16,480,00:15:5d:aa:01:11,Sala servidores Torrent,15/10/2026
PUESTO-037,10.20.1.37,Windows,11 Pro 23H2,Intel Core i5-12400,16,512,3c:52:82:10:0e:37,Consulta 3 València,15/10/2026</pre>
</div>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Columna</th>
            <th class="border border-slate-200 p-3 text-left">Descripción</th>
            <th class="border border-slate-200 p-3 text-left">Ejemplo</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">hostname / ip</td>
            <td class="border border-slate-200 p-3">Nombre técnico del equipo y dirección IPv4</td>
            <td class="border border-slate-200 p-3">PUESTO-037 · 10.20.1.37</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">so / version_so</td>
            <td class="border border-slate-200 p-3">Sistema operativo y versión o release</td>
            <td class="border border-slate-200 p-3">Windows · 11 Pro 23H2</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">procesador</td>
            <td class="border border-slate-200 p-3">Modelo de CPU (Win32_Processor o lscpu)</td>
            <td class="border border-slate-200 p-3">Intel Core i5-12400</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">ram_gb / discos_gb</td>
            <td class="border border-slate-200 p-3">Memoria y capacidad total de discos en GB</td>
            <td class="border border-slate-200 p-3">16 · 512</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">mac</td>
            <td class="border border-slate-200 p-3">Dirección MAC de la interfaz principal</td>
            <td class="border border-slate-200 p-3">3c:52:82:10:0e:37</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">ubicacion / fecha_inventario</td>
            <td class="border border-slate-200 p-3">Sede o consulta física y fecha de recogida (dd/mm/aaaa)</td>
            <td class="border border-slate-200 p-3">Consulta 3 València · 15/10/2026</td>
        </tr>
    </tbody>
</table>

<h3>Anexo D · Registro de Pruebas</h3>
<p>
    Una fila por prueba (mínimo recomendado: 9, con dos casos negativos). Las tres primeras son ejemplo.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">ID</th>
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Entrada</th>
            <th class="border border-slate-200 p-3 text-left">Esperado</th>
            <th class="border border-slate-200 p-3 text-left">Obtenido</th>
            <th class="border border-slate-200 p-3 text-left">OK / KO</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">PR-01</td>
            <td class="border border-slate-200 p-3">M1</td>
            <td class="border border-slate-200 p-3">alta-usuario.ps1 con 3 usuarios válidos</td>
            <td class="border border-slate-200 p-3">3 cuentas creadas y 3 líneas INFO en log</td>
            <td class="border border-slate-200 p-3">Igual que lo esperado</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">OK</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">PR-02</td>
            <td class="border border-slate-200 p-3">M2</td>
            <td class="border border-slate-200 p-3">backup-diario.sh con destino sin permisos</td>
            <td class="border border-slate-200 p-3">Aborta con código 1 y log ERROR</td>
            <td class="border border-slate-200 p-3">Código 1, log ERROR, correo de fallo</td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">OK</span></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">PR-03</td>
            <td class="border border-slate-200 p-3">M3</td>
            <td class="border border-slate-200 p-3">inventario.py sin acceso a WMI</td>
            <td class="border border-slate-200 p-3">Avisa y continúa con el resto</td>
            <td class="border border-slate-200 p-3">CSV parcial sin columna procesador</td>
            <td class="border border-slate-200 p-3"><span class="text-red-600 font-bold">KO</span></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>Anexo E · Capturas de la Implementación</h3>
<p>
    Sustituye cada marcador por una captura real de tu laboratorio, con nombre claro y pie de figura
    numerado: sin capturas, el tribunal no puede verificar que la suite funciona.
</p>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🖼️</span>
        <span>Figura A.1 · Módulo M1 (Usuarios AD)</span>
    </div>
    <p>
        [INSERTAR CAPTURA: ejecución de alta-usuario.ps1 con la consola de resultados y las cuentas
        nuevas en su OU en Active Directory]
    </p>
    <p class="text-sm text-slate-600 mt-2"><em>Pie: Figura A.1. Ejecución del M1 y verificación de las cuentas creadas.</em></p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🖼️</span>
        <span>Figura A.2 · Módulo M2 (Copias)</span>
    </div>
    <p>
        [INSERTAR CAPTURA: salida de backup-diario.sh con la verificación de integridad y el correo
        del informe recibido]
    </p>
    <p class="text-sm text-slate-600 mt-2"><em>Pie: Figura A.2. Backup diario, verificación e informe por correo.</em></p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🖼️</span>
        <span>Figura A.3 · Módulo M3 (Inventario)</span>
    </div>
    <p>
        [INSERTAR CAPTURA: informe HTML de inventario.py abierto en el navegador con tres equipos listados]
    </p>
    <p class="text-sm text-slate-600 mt-2"><em>Pie: Figura A.3. Informe HTML del inventario generado por el M3.</em></p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🖼️</span>
        <span>Figura A.4 · Módulos M4 y M5 (Higiene y Planificación)</span>
    </div>
    <p>
        [INSERTAR CAPTURA: listado de cuentas inactivas del M4 junto al Programador de tareas (o
        crontab -l) con las tareas del toolkit]
    </p>
    <p class="text-sm text-slate-600 mt-2"><em>Pie: Figura A.4. Cuentas inactivas detectadas y tareas programadas.</em></p>
</div>

<h3>Anexo F · Guía de Entrega</h3>
<p>Revisa esta lista antes de entregar:</p>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Repositorio Git:</strong> los cinco módulos, datos de ejemplo, diccionario de logs e historial de commits; sin credenciales. Enlace remoto o carpeta comprimida con .git incluida.</li>
    <li><strong>Documento del proyecto:</strong> memoria completa en PDF con conclusiones redactadas y bibliografía ampliada. Nombre: Apellidos_Nombre_AutoAdminToolkit.pdf</li>
    <li><strong>Capturas:</strong> figuras del Anexo E insertadas en el PDF y originales en anexos/capturas/ (PNG o JPG).</li>
    <li><strong>Registro de pruebas:</strong> Anexo D completo con al menos 9 pruebas, más copia en registro-pruebas.csv.</li>
    <li><strong>Evidencias de ejecución:</strong> un informe de backup real y una salida de inventario del laboratorio en docs/informes-backup/ y datos/.</li>
    <li><strong>Plataforma del centro:</strong> entrega registrada en el aula virtual dentro del plazo, con el enlace al repositorio visible para el profesorado.</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🏁</span>
        <span>Última Comprobación</span>
    </div>
    <p>
        Descarga el PDF en otro dispositivo y ábrelo: comprueba que las capturas se ven, que los enlaces
        funcionan y que ninguna tabla se ha partido. Un proyecto bien presentado comunica que el trabajo
        interno también está bien hecho.
    </p>
</div>
`;
