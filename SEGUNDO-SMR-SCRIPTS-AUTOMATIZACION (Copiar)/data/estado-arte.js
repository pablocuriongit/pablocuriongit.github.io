window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["estado-arte"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🌐</span>
        <span>Estado del Arte: Automatización de la Administración de Sistemas</span>
    </div>
    <p>
        Antes de escribir la primera línea de código, es fundamental conocer el terreno: qué tareas
        manuales existen hoy en las empresas, con qué lenguajes se automatizan, cómo se programan sus
        ejecuciones y qué soluciones comerciales hay en el mercado. Esta sección es una
        <strong>guía de investigación</strong>: te ayudará a situar el MediConnect AutoAdmin Toolkit
        dentro del contexto profesional real.
    </p>
</div>

<h3>2.1. De la administración manual a la automatización</h3>
<p>
    En la mayoría de las pymes, el departamento de sistemas (a menudo formado por una o dos personas)
    realiza diariamente un conjunto de tareas repetitivas que consumen gran parte de la jornada:
    crear cuentas de usuario al llegar una persona nueva, desactivarlas cuando se va, lanzar copias
    de seguridad, revisar espacio en disco o recopilar datos de los equipos para informes. Cuando
    estas tareas se hacen <strong>a mano y una a una</strong>, el problema no es solo el tiempo
    invertido: es la <strong>falta de trazabilidad</strong>, la <strong>dependencia de la memoria
    del técnico</strong> y la <strong>probabilidad de error humano</strong> que crece con cada
    repetición.
</p>
<p>
    La <strong>automatización de la administración</strong> (systems administration automation)
    consiste en sustituir esas operaciones manuales por <strong>scripts o programas</strong> que se
    ejecutan solos, de forma programada o bajo demanda, siguiendo reglas definidas por el equipo
    técnico. El concepto profesional relacionado es <strong>Infrastructure as Code</strong>
    (infraestructura como código): la configuración del sistema se expresa en ficheros de texto
    versionables, reproducibles y auditables, en lugar de depender de clics y procedimientos
    orales.
</p>
<p>
    Fíjate en las tareas que hoy consume el equipo de MediConnect Solutions S.L. y en cómo cambia
    su naturaleza al automatizarlas:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Tarea</th>
            <th class="border border-slate-200 p-3 text-left">Enfoque manual (hoy)</th>
            <th class="border border-slate-200 p-3 text-left">Enfoque automatizado (propuesta)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Alta de usuario en AD</td>
            <td class="border border-slate-200 p-3">18 min por usuario, campos escritos a mano, errores de nomenclatura</td>
            <td class="border border-slate-200 p-3">Script PowerShell con validación: menos de 1 minuto y 0 errores de formato</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Copias de seguridad</td>
            <td class="border border-slate-200 p-3">El técnico las lanza y confía; 2 fallos no detectados en 12 meses</td>
            <td class="border border-slate-200 p-3">Script Bash con verificación de integridad e informe automático por correo</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Inventario de equipos</td>
            <td class="border border-slate-200 p-3">Hoja de cálculo actualizada a mano, 12 equipos sin registrar</td>
            <td class="border border-slate-200 p-3">Script Python que recorre la red y genera CSV/HTML al instante</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Limpieza de cuentas</td>
            <td class="border border-slate-200 p-3">Nadie la hace de forma sistemática: 18 cuentas huérfanas activas</td>
            <td class="border border-slate-200 p-3">Detección automática de inactividad y propuesta de baja revisable</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Informes mensuales</td>
            <td class="border border-slate-200 p-3">10 horas al mes copiando datos entre herramientas</td>
            <td class="border border-slate-200 p-3">Generación programada y entrega automática del informe</td>
        </tr>
    </tbody>
</table>
<p>
    Como ves, la automatización no solo ahorra tiempo: introduce <strong>estandarización</strong>
    (todos los usuarios se crean igual), <strong>trazabilidad</strong> (cada ejecución deja log),
    <strong>disponibilidad</strong> (las tareas críticas se ejecutan aunque el técnico esté de
    vacaciones) y <strong>escalabilidad</strong> (gestionar 5 o 500 equipos cuesta lo mismo).
</p>

<div class="relative my-8">
    <img src="./images/terminal.jpg" alt="Terminal de administración con scripts en ejecución" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 1: una terminal bien preparada es el taller del administrador de sistemas: ahí cobran vida los scripts de automatización.</p>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Pista de investigación</span>
    </div>
    <p>
        Investiga el concepto de <strong>toil</strong> que usa Google en su libro
        <em>Site Reliability Engineering</em>: se define como el trabajo manual, repetitivo,
        automatizable y sin valor añadido a largo plazo. ¿Qué porcentaje del trabajo del departamento
        de sistemas de MediConnect considerarías toil? Argumenta tu respuesta con datos de la
        introducción.
    </p>
</div>

<h3>2.2. Lenguajes de scripting: Bash, PowerShell y Python</h3>
<p>
    Un <strong>script</strong> es un programa pequeño, escrito en un lenguaje interpretado, que
    automatiza tareas del sistema operativo. Elegir bien el lenguaje es la primera decisión técnica
    del proyecto. En un entorno mixto como el de MediConnect (Windows Server y Debian), lo habitual
    es combinar varios lenguajes, cada uno donde mejor se comporta.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Bash</th>
            <th class="border border-slate-200 p-3 text-left">PowerShell</th>
            <th class="border border-slate-200 p-3 text-left">Python</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Entorno nativo</td>
            <td class="border border-slate-200 p-3">GNU/Linux y macOS (también WSL)</td>
            <td class="border border-slate-200 p-3">Windows (integrado desde Windows 7) y Linux (PowerShell Core)</td>
            <td class="border border-slate-200 p-3">Multiplataforma (Windows, Linux, macOS)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Tipo de uso</td>
            <td class="border border-slate-200 p-3">Administración de servidores, tuberías de herramientas, tareas de sistema</td>
            <td class="border border-slate-200 p-3">Administración de Windows, Active Directory, Office 365,Azure</td>
            <td class="border border-slate-200 p-3">Procesamiento de datos, informes, lógica compleja, scripting transversal</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Punto fuerte</td>
            <td class="border border-slate-200 p-3">Composición de comandos con tuberías, presente en todo servidor Linux</td>
            <td class="border border-slate-200 p-3">Objetos de Windows: cmdlets, módulos ActiveDirectory, CIM/WMI</td>
            <td class="border border-slate-200 p-3">Legibilidad, librerías (psutil, WMI), manejo de CSV/HTML/JSON</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Comunidad y documentación</td>
            <td class="border border-slate-200 p-3">Enorme (Stack Overflow, man pages, GNU docs)</td>
            <td class="border border-slate-200 p-3">Microsoft Learn oficial muy completa; comunidad creciente</td>
            <td class="border border-slate-200 p-3">La mayor comunidad de programación del mundo</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Curva de aprendizaje</td>
            <td class="border border-slate-200 p-3">Media (sintaxis criptica al principio, potente al dominarla)</td>
            <td class="border border-slate-200 p-3">Media (muy guiada si vienes de la consola de Windows)</td>
            <td class="border border-slate-200 p-3">Suave (sintaxis cercana al inglés, ideal para iniciar)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Uso en este proyecto</td>
            <td class="border border-slate-200 p-3">Módulo de copias de seguridad e higiene de cuentas en Debian</td>
            <td class="border border-slate-200 p-3">Módulo de usuarios AD e higiene de cuentas en Windows Server</td>
            <td class="border border-slate-200 p-3">Módulo de inventario y generación de informes</td>
        </tr>
    </tbody>
</table>
<div class="callout callout-info">
    <div class="callout-title">
        <span>🔎</span>
        <span>Pistas para justificar la elección</span>
    </div>
    <p>
        En tu informe, cada módulo del toolkit debe justificar su lenguaje con argumentos técnicos,
        no de gustos. Algunas pistas: ¿qué comandos nativos necesita cada tarea?
        (<code class="text-sm">Get-ADUser</code>, <code class="text-sm">rsync</code>,
        <code class="text-sm">mysqldump</code>, <code class="text-sm">w32tm</code>...), ¿qué
        estructura de datos conviene (texto plano, objetos, diccionarios), y quién mantendrá el
        código en el futuro?
    </p>
</div>

<div class="relative my-8">
    <img src="./images/codigo.jpg" alt="Código fuente de un script de administración en el editor" class="w-full rounded-2xl shadow-xl">
    <p class="text-sm text-slate-500 mt-2 text-center">Figura 2: el código de los scripts debe ser legible y documentado: futuro mantenimiento del toolkit.</p>
</div>

<h3>2.3. Programación de tareas: cron (Linux) y Programador de tareas (Windows)</h3>
<p>
    Un script excelente que nadie ejecuta no automatiza nada. La <strong>planificación</strong> es
    el corazón del módulo M5 del toolkit: los scripts deben dispararse solos a la hora y frecuencia
    adecuadas, sin intervención humana. Cada familia de sistemas operativos tiene su planificador
    nativo.
</p>

<h4>cron y crontab en Debian 12</h4>
<p>
    <strong>cron</strong> es el demonio de planificación de GNU/Linux; <strong>crontab</strong> es el
    fichero de usuario donde se declaran las tareas. Cada línea define una expresión cron de cinco
    campos (minuto, hora, día del mes, mes, día de la semana) seguida del comando a ejecutar. El
    fichero de configuración del sistema <code class="text-sm">/etc/crontab</code> y los directorios
    <code class="text-sm">/etc/cron.d</code>, <code class="text-sm">/etc/cron.daily</code> permiten
    además tareas globales del servidor.
</p>
<div class="callout callout-info my-6">
    <div class="callout-title">
        <span>🧩</span>
        <span>Ejemplos de expresiones cron para el proyecto</span>
    </div>
    <pre class="text-xs overflow-x-auto"># Copia diaria a las 02:00 de la madrugada
0 2 * * * /opt/autoadmin/backup/backup_diario.sh

# Higiene de cuentas los lunes a las 07:30
30 7 * * 1 /opt/autoadmin/cuentas/higiene_cuentas.sh

# Informe de inventario el día 1 de cada mes a las 06:00
0 6 1 * * /opt/autoadmin/inventario/generar_inventario.py</pre>
    <p class="mt-3">
        Fíjate en el patrón: siempre se redirige la salida a un fichero de log
        (<code class="text-sm">/var/log/autoadmin/...</code>) para poder auditar cada ejecución.
    </p>
</div>

<h4>Programador de tareas de Windows Server 2022</h4>
<p>
    En Windows, la herramienta equivalente es el <strong>Programador de tareas</strong>
    (Task Scheduler), integrado en la consola de administración. Permite crear tareas con
    <strong>disparadores</strong> (triggers): a una hora concreta, al iniciar el equipo, al
    registrarse un usuario, al recibir un evento del registro (por ejemplo, el fallo de un
    servicio), o de forma repetida cada N minutos. Las tareas se pueden ejecutar con credenciales
    de una cuenta de servicio privilegiada, lo que resulta esencial para que un script de Active
    Directory funcione sin que nadie esté conectado.
</p>
<div class="callout callout-success my-6">
    <div class="callout-title">
        <span>🧭</span>
        <span>Pista de investigación comparativa</span>
    </div>
    <p>
        Ambos planificadores comparten la idea de "programar un comando", pero difieren en detalles
        que el tribunal valorará: formato de la expresión cron vs interfaz gráfica y XML, gestión de
        reintentos ante fallo, notificación de resultados y uso de cuentas de servicio. Prepara una
        tabla comparativa breve con al menos cuatro diferencias y decantarte por cuál usarías en
        cada módulo del toolkit.
    </p>
</div>

<h3>2.4. Estándares y marcos de referencia</h3>
<p>
    Un proyecto profesional no se evalúa solo por su código, sino por cómo se alinea con los
    <strong>marcos de referencia</strong> del sector. Estos son los que debe cubrir MediConnect
    AutoAdmin Toolkit. Completa la última columna con tus propias ideas: es una de las partes que
    más puntúa el tribunal.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Estándar / Marco</th>
            <th class="border border-slate-200 p-3 text-left">Qué regula</th>
            <th class="border border-slate-200 p-3 text-left">Cómo aplicarlo en este proyecto (ejemplo)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">ITIL v4</td>
            <td class="border border-slate-200 p-3">Gestión de servicios IT: valor, prácticas de gestión de cambios, incidentes y activos</td>
            <td class="border border-slate-200 p-3">Cada script como "mini-servicio" documentado con su procedimiento de operación; cambios de código gestionados (versión + changelog)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">RGPD y LOPDGDD</td>
            <td class="border border-slate-200 p-3">Protección de datos personales (cuentas, nombres, departamentos, correos)</td>
            <td class="border border-slate-200 p-3">Baja de cuentas al cesar el contrato; minimización de datos en logs; registro de actividades de tratamiento actualizado</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">ISO/IEC 27001</td>
            <td class="border border-slate-200 p-3">Sistema de gestión de seguridad de la información (Anexo A: accesos, registro, copias)</td>
            <td class="border border-slate-200 p-3">Control de accesos a los scripts, logs firmados o protegidos, verificación de backups y cifrado del repositorio de copias</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Buenas prácticas de código: Git</td>
            <td class="border border-slate-200 p-3">Control de versiones, trazabilidad de cambios, colaboración</td>
            <td class="border border-slate-200 p-3">Repositorio Git con commits descriptivos, etiquetas de versión por release y ramas para pruebas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Buenas prácticas: README y documentación</td>
            <td class="border border-slate-200 p-3">Que cualquier técnico pueda ejecutar y mantener el código</td>
            <td class="border border-slate-200 p-3">README con instalación, uso, requisitos y ejemplos; comentarios en cabecera de cada script; guía de operación</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Buenas prácticas: logs</td>
            <td class="border border-slate-200 p-3">Trazabilidad y auditoría de ejecuciones</td>
            <td class="border border-slate-200 p-3">Formato de log estándar (fecha, nivel, módulo, mensaje), rotación y diccionario de códigos de error</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Buenas prácticas de código limpio</td>
            <td class="border border-slate-200 p-3">Legibilidad, nombres descriptivos, funciones cortas, manejo de errores</td>
            <td class="border border-slate-200 p-3">Estructura de directorios modular (un módulo por carpeta), variables con nombre claro, validación de entradas</td>
        </tr>
    </tbody>
</table>

<h3>2.5. Soluciones existentes en el mercado</h3>
<p>
    Antes de programar desde cero, un buen técnico debe preguntarse: <strong>¿no habrá hecho ya
    alguien esto?</strong> En el mercado existe un amplio abanico de herramientas de automatización
    e inventario, tanto comerciales como de código libre. Analízalas y justifica por qué el
    proyecto opta por desarrollar una suite propia de scripts.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Herramienta</th>
            <th class="border border-slate-200 p-3 text-left">Tipo</th>
            <th class="border border-slate-200 p-3 text-left">Para qué sirve</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Ansible</td>
            <td class="border border-slate-200 p-3">Código libre (Red Hat)</td>
            <td class="border border-slate-200 p-3">Automatización de configuración y despliegue agentless con playbooks YAML</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Lansweeper</td>
            <td class="border border-slate-200 p-3">Comercial (freemium)</td>
            <td class="border border-slate-200 p-3">Inventario y descubrimiento automático de activos de TI</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Microsoft Intune / Endpoint Manager</td>
            <td class="border border-slate-200 p-3">Comercial (suscripción)</td>
            <td class="border border-slate-200 p-3">Gestión de equipos y usuarios en entornos Microsoft 365</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Rundeck</td>
            <td class="border border-slate-200 p-3">Código libre / comercial</td>
            <td class="border border-slate-200 p-3">Plataforma de ejecución y programación de tareas de operaciones con interfaz web</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">PDQ Deploy</td>
            <td class="border border-slate-200 p-3">Comercial</td>
            <td class="border border-slate-200 p-3">Despliegue masivo de software y scripts a equipos Windows</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Buenas prácticas de código limpio</td>
            <td class="border border-slate-200 p-3">Legibilidad, nombres descriptivos, funciones cortas, manejo de errores</td>
            <td class="border border-slate-200 p-3">Estructura de directorios modular (un módulo por carpeta), variables con nombre claro, validación de entradas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">(otro estándar que investigues)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>
<p>
    Completa tu análisis personal con la siguiente plantilla. Para cada herramienta, puntúa
    ventajas e inconvenientes desde la óptica de MediConnect (2 técnicos, sin presupuesto de
    licencias, entorno mixto Windows/Linux):
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Herramienta</th>
            <th class="border border-slate-200 p-3 text-left">Ventajas para MediConnect</th>
            <th class="border border-slate-200 p-3 text-left">Inconvenientes / limitaciones</th>
            <th class="border border-slate-200 p-3 text-left">¿La usarías? ¿Por qué?</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Ansible</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Lansweeper</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Intune</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">(otra a investigar)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>
<div class="callout callout-warning my-6">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Justificación típica de "programar desde cero"</span>
    </div>
    <p>
        En proyectos de este tipo la decisión de crear la suite propia se apoya en argumentos como:
        coste cero de licencias, aprendizaje directo de los lenguajes del módulo de
        <em>Lenguajes de Programación</em>, ajuste perfecto a los procesos reales de la empresa,
        sin dependencia de un proveedor y mantenimiento bajo control interno. No obstantes, también
        debes reconocer honestamente los inconvenientes: mayor esfuerzo inicial, necesidad de
        documentación y formación del equipo. El tribunal espera una
        <strong>argumentación equilibrada</strong>, no un panegírico.
    </p>
</div>

<hr class="my-8">

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Con el estado del arte debes ser capaz de situar tu proyecto en el contexto profesional,
        defender la elección de los tres lenguajes, explicar cómo se programan las tareas en Linux y
        Windows y comparar tu solución con las del mercado. Todo ello será el sustento de las
        decisiones de diseño que desarrolles más adelante.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🏆</span>
        <span>Consejos para el tribunal</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Demuestra que has <strong>consultado fuentes reales</strong> (documentación oficial de Microsoft Learn, GNU Bash Reference Manual, man pages, webs de Ansible o Lansweeper) y cítalas en la bibliografía.</li>
        <li>En la tabla comparativa de lenguajes, usa <strong>ejemplos concretos de comandos</strong> que usarás en tu implementación, no generalidades.</li>
        <li>Al analizar soluciones del mercado, no te limites a describirlas: <strong>concluye</strong> con una decisión justificada en dos o tres frases.</li>
        <li>Vincula siempre los estándares (ITIL, RGPD, ISO 27001) a <strong>acciones observables</strong> en tus scripts: logs, validaciones, bajas de cuentas, cifrado.</li>
        <li>Evita copiar definiciones literales: el tribunal detecta el plagio; <strong>parafrasea y aplica</strong> cada concepto a MediConnect Solutions S.L.</li>
    </ul>
</div>
`;
