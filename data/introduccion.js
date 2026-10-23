window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.introduccion = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>👋</span>
        <span>Introducción al Proyecto</span>
    </div>
    <p>
        En cualquier empresa tecnológica, el tiempo del equipo de sistemas es el recurso más escaso.
        Cuando las tareas repetitivas se hacen a mano, los errores aparecen y la seguridad se resquebraja.
        Este proyecto convierte esas tareas manuales en <strong>scripts automáticos, verificables y documentados</strong>.
    </p>
</div>

<h3>1.1. Contexto de la Empresa</h3>
<p>
    <strong>MediConnect Solutions S.L.</strong> es una empresa valenciana dedicada al desarrollo y
    mantenimiento de plataformas de <strong>telemedicina</strong> (videoconsultas, gestión de citas y
    historial clínico electrónico) para centros de salud privados de la Comunitat Valenciana.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Atributo</th>
            <th class="border border-slate-200 p-3 text-left">Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Sector</td>
            <td class="border border-slate-200 p-3">Salud digital / Telemedicina (SaaS)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Tamaño</td>
            <td class="border border-slate-200 p-3">65 empleados · 90 puestos de trabajo · 2 sedes (Torrent y València)</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Infraestructura</td>
            <td class="border border-slate-200 p-3">2 servidores Windows Server 2022 (Active Directory, DNS, DHCP), 2 servidores Debian 12 (intranet y copias), 90 equipos Windows 10/11, 12 cámaras IP</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Departamento de sistemas</td>
            <td class="border border-slate-200 p-3">2 profesionales: jefe de sistemas y técnico de soporte</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Marco normativo</td>
            <td class="border border-slate-200 p-3">RGPD y LOPDGDD por tratar datos de salud; ISO/IEC 27001 (en proceso de certificación)</td>
        </tr>
    </tbody>
</table>

<h3>1.2. Problemática Crítica</h3>
<p>
    El auditor interno y el jefe de sistemas han cuantificado los problemas que motivan este proyecto:
</p>
<ul class="space-y-2 my-4">
    <li><strong>⏱️ Tiempo perdido en tareas manuales:</strong> unas 25 altas/bajas de usuario al mes a 15-20 minutos por operación (unas 6 horas mensuales), más 10 horas mensuales de informes copiados a mano en hoja de cálculo.</li>
    <li><strong>🔐 Cuentas huérfanas:</strong> 18 cuentas de personas cesadas siguen activas en Active Directory: acceso no autorizado y riesgo sancionador RGPD.</li>
    <li><strong>💾 Copias sin verificar:</strong> 2 fallos de backup en 12 meses no detectados; la base de datos de citas estuvo 11 días sin copia válida. Pérdida estimada: <strong>6.800 €</strong> y 3 días de parón parcial.</li>
    <li><strong>📋 Inventario desactualizado:</strong> 12 equipos sin registrar y 40 licencias de software sin tramitar tras la auditoría; riesgo de multa estimado en <strong>9.000 €</strong>.</li>
    <li><strong>🔁 Incidencias repetitivas:</strong> el 40% de los tickets son siempre los mismos (contraseñas, impresoras, espacio en disco), resueltos siempre igual.</li>
</ul>

<div class="relative my-8">
    <img src="./images/backup.jpg" alt="Infraestructura de servidores y copias de seguridad" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: Sala de servidores donde se ejecutan las copias de seguridad.</p>
</div>

<h3>1.3. Propuesta Técnica</h3>
<p>
    Crear el <strong>MediConnect AutoAdmin Toolkit</strong>: una suite de scripts programados, versionada en
    Git y documentada, que automatiza las cinco tareas más repetitivas del departamento:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Tecnología</th>
            <th class="border border-slate-200 p-3 text-left">Automatiza</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">M1 · Usuarios AD</td>
            <td class="border border-slate-200 p-3">PowerShell + Active Directory</td>
            <td class="border border-slate-200 p-3">Altas, bajas y modificaciones masivas con validación</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">M2 · Copias</td>
            <td class="border border-slate-200 p-3">Bash + rsync + mysqldump</td>
            <td class="border border-slate-200 p-3">Backup diario, verificación, retención e informe</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">M3 · Inventario</td>
            <td class="border border-slate-200 p-3">Python + WMI / sysinfo</td>
            <td class="border border-slate-200 p-3">Inventario de hardware y software en CSV/HTML</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">M4 · Higiene de cuentas</td>
            <td class="border border-slate-200 p-3">Bash + PowerShell</td>
            <td class="border border-slate-200 p-3">Detección y propuesta de baja de cuentas inactivas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">M5 · Planificación</td>
            <td class="border border-slate-200 p-3">cron / Programador de tareas</td>
            <td class="border border-slate-200 p-3">Ejecución automática y alertas por correo</td>
        </tr>
    </tbody>
</table>

<h3>1.4. Objetivos SMART</h3>
<ul class="space-y-2 my-4">
    <li><span class="text-blue-600 font-bold">OE-01:</span> Programar y validar el módulo de usuarios AD para que una alta de usuario pase de 18 minutos a menos de 1 minuto, con el 100% de los campos obligatorios validados.</li>
    <li><span class="text-blue-600 font-bold">OE-02:</span> Implementar copias diarias automáticas con verificación de integridad y aviso por correo en menos de 15 minutos desde la finalización del proceso.</li>
    <li><span class="text-blue-600 font-bold">OE-03:</span> Generar el inventario completo de los 90 equipos en un solo clic, en formato CSV y HTML, con una precisión mínima del 98%.</li>
    <li><span class="text-blue-600 font-bold">OE-04:</span> Detectar automáticamente las cuentas con más de 60 días de inactividad y eliminar las 18 cuentas huérfanas del escenario.</li>
    <li><span class="text-blue-600 font-bold">OE-05:</span> Documentar la suite con README, diccionario de logs y guía de operación que permita a cualquier técnico ejecutarla sin formación adicional.</li>
    <li><span class="text-blue-600 font-bold">OE-06:</span> Planificar la ejecución de todos los módulos en cron/Programador de tareas con registro trazable de cada ejecución.</li>
</ul>

<h3>1.5. Alcance del Proyecto</h3>
<div class="grid md:grid-cols-2 gap-4 my-6">
    <div class="callout callout-success">
        <div class="callout-title">
            <span>✅</span>
            <span>Dentro del alcance</span>
        </div>
        <ul class="list-disc pl-5 space-y-1">
            <li>Los 5 módulos de scripts del toolkit.</li>
            <li>Entorno de pruebas: 2 MV Windows Server y 1 MV Debian del laboratorio.</li>
            <li>Documentación, logs y planificación de tareas.</li>
            <li>Pruebas funcionales y de seguridad de cada script.</li>
        </ul>
    </div>
    <div class="callout callout-error">
        <div class="callout-title">
            <span>🚫</span>
            <span>Fuera del alcance</span>
        </div>
        <ul class="list-disc pl-5 space-y-1">
            <li>Despliegue en producción de la empresa (escenario de clase).</li>
            <li>Desarrollo de la plataforma de telemedicina.</li>
            <li>Virtualización o rediseño de la red física.</li>
            <li>Contratación de herramientas comerciales de CMDB.</li>
        </ul>
    </div>
</div>

<h3>1.6. Estructura del Documento</h3>
<ul class="space-y-2 my-4">
    <li><strong>Sección 2 - Estado del Arte:</strong> soluciones de automatización y administración existentes.</li>
    <li><strong>Sección 3 - Estudio de Viabilidad:</strong> viabilidad técnica, económica y organizativa.</li>
    <li><strong>Sección 4 - Análisis de Requisitos:</strong> requisitos funcionales y no funcionales.</li>
    <li><strong>Sección 5 - Diseño:</strong> arquitectura de la suite, flujo de datos y estándares de código.</li>
    <li><strong>Sección 6 - Implementación:</strong> guía de programación y pruebas de cada módulo.</li>
    <li><strong>Sección 7 - Administración:</strong> operación, logs, backups del propio toolkit y seguridad.</li>
    <li><strong>Sección 8 - Herramientas de Apoyo:</strong> plantillas, checklists y rúbricas de evaluación.</li>
    <li><strong>Sección 9 - Conclusiones:</strong> valoración y líneas futuras.</li>
    <li><strong>Bibliografía y Anexos:</strong> fuentes consultadas y capturas de la implementación.</li>
</ul>

<h3>1.7. Relación con el Currículo de SMR</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Módulo</th>
            <th class="border border-slate-200 p-3 text-left">Contenidos Aplicados</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Administración de Sistemas Operativos en Red</td>
            <td class="border border-slate-200 p-3">Active Directory, usuarios y grupos, tareas programadas, permisos NTFS</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Servicios en Red e Internet</td>
            <td class="border border-slate-200 p-3">SMTP para alertas, rsync/SSH, servidor de correo interno</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Seguridad Informática</td>
            <td class="border border-slate-200 p-3">Políticas de contraseñas, RGPD, cifrado de copias, trazabilidad de logs</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Bases de Datos</td>
            <td class="border border-slate-200 p-3">Exportación con mysqldump, consultas SQL para informes de inventario</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Lenguajes de Programación</td>
            <td class="border border-slate-200 p-3">Bash, PowerShell y Python: variables, bucles, condicionales, funciones, manejo de errores</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Redes Locales</td>
            <td class="border border-slate-200 p-3">Direcciones IP, inventario de red, alcance de los equipos monitorizados</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Empresa e Iniciativa Emprendedora</td>
            <td class="border border-slate-200 p-3">Cálculo de ahorro de horas, análisis coste-beneficio, comunicación al cliente interno</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🎯</span>
        <span>Competencias Profesionales</span>
    </div>
    <p>
        Este proyecto desarrolla competencias directamente transferibles al mercado laboral: automatización
        de tareas administrativas con scripts, administración de Active Directory y Linux, seguridad de
        copias de seguridad y documentación técnica de herramientas internas.
    </p>
</div>
`;
