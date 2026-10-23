window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["bibliografia"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📚</span>
        <span>Bibliografía y Referencias</span>
    </div>
    <p>
        Las fuentes siguientes son documentación técnica oficial, estándares y normativas que respaldan
        las decisiones del MediConnect AutoAdmin Toolkit. Están citadas en formato <strong>APA 7ª edición</strong>
        (organismo o autor, año, título en cursiva y URL de consulta). Recuerda siempre:
    </p>
    <ul class="list-disc pl-6 space-y-2 mt-3">
        <li>Cuando cites una fuente en el cuerpo de tu proyecto, indica el autor y el año entre paréntesis, por ejemplo: <em>(Microsoft, 2024)</em>.</li>
        <li>Accede a los enlaces desde el propio documento para verificar que siguen activos antes de la entrega.</li>
        <li>Las URLs apuntan a páginas oficiales del organismo o proyecto responsable: priorízalas siempre sobre blogs o videotutoriales de terceros.</li>
        <li><strong>Debes añadir al final de esta lista las fuentes que hayas consultado realmente</strong> durante tu implementación (man pages, entradas de foro, artículos, etc.), siguiendo el mismo formato.</li>
    </ul>
</div>

<h3>Fuentes Consultadas</h3>
<ol class="list-decimal pl-6 space-y-3 my-6">
    <li>
        <strong>Microsoft.</strong> (2024). <em>New-ADUser (Active Directory module for Windows PowerShell)</em>.
        <a href="https://learn.microsoft.com/en-us/powershell/module/activedirectory/new-aduser" class="text-blue-600 underline" target="_blank">learn.microsoft.com</a>.
        <p class="text-sm text-slate-600 mt-1">Referencia oficial de todos los parámetros de creación de usuarios (Name, SamAccountName, Path, ChangePasswordAtLogon, AccountPassword). Es la columna vertebral del módulo M1: cada parámetro de tu script alta-usuario.ps1 debe justificarse con esta página.</p>
    </li>
    <li>
        <strong>Microsoft.</strong> (2024). <em>Active Directory PowerShell module: cmdlet reference (Get-ADUser, Set-ADUser, Disable-ADAccount, Move-ADObject)</em>.
        <a href="https://learn.microsoft.com/en-us/powershell/module/activedirectory/" class="text-blue-600 underline" target="_blank">learn.microsoft.com</a>.
        <p class="text-sm text-slate-600 mt-1">Índice completo del módulo de Active Directory. Necesaria para el M1 (consultas y modificaciones) y para el M4, donde Get-ADUser con los filtros de LastLogonDate permite detectar las cuentas inactivas más de 60 días.</p>
    </li>
    <li>
        <strong>Microsoft.</strong> (2024). <em>ScheduledTasks module for Windows PowerShell (New-ScheduledTask, Register-ScheduledTask)</em>.
        <a href="https://learn.microsoft.com/en-us/powershell/module/scheduledtasks/" class="text-blue-600 underline" target="_blank">learn.microsoft.com</a>.
        <p class="text-sm text-slate-600 mt-1">Documentación del módulo con el que se crean por código las tareas del Programador de tareas. Permite al módulo M5 registrar las tareas de Windows sin depender de la interfaz gráfica y dejando constancia automatizable.</p>
    </li>
    <li>
        <strong>Microsoft.</strong> (2024). <em>about_Execution_Policies</em>.
        <a href="https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies" class="text-blue-600 underline" target="_blank">learn.microsoft.com</a>.
        <p class="text-sm text-slate-600 mt-1">Explica las políticas de ejecución de PowerShell (Restricted, RemoteSigned, AllSigned). Fundamental para decidir cómo firmar o restringir los scripts del toolkit sin desactivar la seguridad del servidor, tal y como exige el criterio de mínimo privilegio del proyecto.</p>
    </li>
    <li>
        <strong>Free Software Foundation.</strong> (2024). <em>GNU Bash Reference Manual</em>.
        <a href="https://www.gnu.org/software/bash/manual/" class="text-blue-600 underline" target="_blank">gnu.org</a>.
        <p class="text-sm text-slate-600 mt-1">Manual de referencia del intérprete Bash: expansiones, variables especiales, códigos de salida, estructuras de control y funciones. Es la fuente normativa para el estilo de los scripts de los módulos M2 y M4 en el servidor Debian.</p>
    </li>
    <li>
        <strong>Samba Team.</strong> (2024). <em>rsync: a fast, versatile, remote and local file-copying tool</em>.
        <a href="https://rsync.samba.org/" class="text-blue-600 underline" target="_blank">rsync.samba.org</a>.
        <p class="text-sm text-slate-600 mt-1">Página oficial y manual de rsync. Indispensable para elegir correctamente las opciones -a, -v, -n, --delete o --checksum del módulo M2 y para entender el algoritmo de transferencia incremental que evita recompiar ficheros idénticos.</p>
    </li>
    <li>
        <strong>Oracle.</strong> (2024). <em>mysqldump — A Database Backup Program (MySQL 8.0 Reference Manual)</em>.
        <a href="https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html" class="text-blue-600 underline" target="_blank">dev.mysql.com</a>.
        <p class="text-sm text-slate-600 mt-1">Documentación del programa con el que se exporta la base de datos de citas de MediConnect. Recoge opciones como --single-transaction, --routines y --result-file, necesarias para un volcado coherente y restaurable.</p>
    </li>
    <li>
        <strong>Linux man-pages project.</strong> (2024). <em>crontab(5) — tables for automating per-user jobs</em>.
        <a href="https://man7.org/linux/man-pages/man5/crontab.5.html" class="text-blue-600 underline" target="_blank">man7.org</a>.
        <p class="text-sm text-slate-600 mt-1">Descripción oficial del formato de las cinco columnas de cron (minuto, hora, día de mes, mes, día de semana) y de las variables de entorno. Permite diseñar las entradas de programación del M5 con precisión milimétrica.</p>
    </li>
    <li>
        <strong>Python Software Foundation.</strong> (2024). <em>Python 3.11 Documentation — Tutorial and Library Reference</em>.
        <a href="https://docs.python.org/3.11/" class="text-blue-600 underline" target="_blank">docs.python.org</a>.
        <p class="text-sm text-slate-600 mt-1">Documentación oficial del lenguaje usado en el módulo M3. El tutorial y la referencia de la biblioteca estándar (módulos csv, subprocess, argparse y datetime) cubren casi todas las necesidades del inventario sin librerías externas.</p>
    </li>
    <li>
        <strong>Rodola, G.</strong> (2024). <em>psutil: cross-platform library for process and system monitoring</em>.
        <a href="https://psutil.readthedocs.io/" class="text-blue-600 underline" target="_blank">psutil.readthedocs.io</a>.
        <p class="text-sm text-slate-600 mt-1">Documentación de la librería de Python que recoge CPU, memoria, discos y red de forma multiplataforma. Es la base de la recogida de hardware del módulo M3 y permite unificar código para Windows y Linux.</p>
    </li>
    <li>
        <strong>Rose, S., Wexler, S. y Cherf, C.</strong> (2020). <em>NIST Special Publication 800-63B: Digital Identity Guidelines — Authentication and Lifecycle Management</em>. National Institute of Standards and Technology.
        <a href="https://pages.nist.gov/800-63-3/sp800-63b.html" class="text-blue-600 underline" target="_blank">pages.nist.gov</a>.
        <p class="text-sm text-slate-600 mt-1">Guía de autenticación del NIST con recomendaciones vigentes sobre longitud, complejidad y gestión del ciclo de vida de las contraseñas. Define cómo debe generarse la contraseña inicial en el M1 y cuándo forzar el cambio en el primer inicio de sesión.</p>
    </li>
    <li>
        <strong>International Organization for Standardization.</strong> (2022). <em>ISO/IEC 27001:2022 — Information security, cybersecurity and privacy protection — Requirements</em>.
        <a href="https://www.iso.org/standard/27001" class="text-blue-600 underline" target="_blank">iso.org</a>.
        <p class="text-sm text-slate-600 mt-1">Estándar del sistema de gestión de seguridad que MediConnect está certificando. Los controles sobre gestión de accesos (A.5.15) y registro de actividades (A.8.15) justifican la exigencia de logs trazables en todos los módulos del toolkit.</p>
    </li>
    <li>
        <strong>Agencia Española de Protección de Datos.</strong> (2018). <em>Guía del Reglamento General de Protección de Datos para responsables de tratamiento</em>.
        <a href="https://www.aepd.es/guias/guia-rgpd-para-responsables-de-tratamiento.pdf" class="text-blue-600 underline" target="_blank">aepd.es</a>.
        <p class="text-sm text-slate-600 mt-1">Guía oficial en español de la autoridad de control. Explica los principios de minimización y limitación del plazo de conservación que aplican cuando el M4 desactiva cuentas y el M2 archiva informes con nombres de empleados.</p>
    </li>
    <li>
        <strong>Axelos / PeopleCert.</strong> (2019). <em>ITIL 4 Foundation: ITIL 4 Edition</em>. The Stationery Office (TSO).
        <a href="https://www.axelos.com/" class="text-blue-600 underline" target="_blank">axelos.com</a>.
        <p class="text-sm text-slate-600 mt-1">Marco de gestión de servicios IT adoptado como metodología de referencia del proyecto. Los conceptos de gestión de eventos e incidencias dan sentido de negocio a las alertas por correo y a los códigos de salida de los scripts.</p>
    </li>
    <li>
        <strong>Chacon, S. y Straub, B.</strong> (2014). <em>Pro Git</em> (2ª ed.). Apress.
        <a href="https://git-scm.com/book/en/v2" class="text-blue-600 underline" target="_blank">git-scm.com</a>.
        <p class="text-sm text-slate-600 mt-1">Libro oficial de Git, disponible gratuitamente en línea. Guía el uso del repositorio del toolkit: ramas, etiquetas de versión, mensajes de commit claros y buenas prácticas para no filtrar ficheros sensibles con .gitignore.</p>
    </li>
    <li>
        <strong>Klensin, J.</strong> (2008). <em>RFC 5321: Simple Mail Transfer Protocol</em>. Internet Engineering Task Force.
        <a href="https://datatracker.ietf.org/doc/html/rfc5321" class="text-blue-600 underline" target="_blank">datatracker.ietf.org</a>.
        <p class="text-sm text-slate-600 mt-1">Especificación del protocolo SMTP que transporta las alertas del módulo M5. Comprender el diálogo cliente-servidor (HELO, MAIL FROM, RCPT TO, DATA) ayuda a diagnosticar los fallos de envío de correo en el laboratorio.</p>
    </li>
</ol>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📝</span>
        <span>Tu Trabajo Pendiente en esta Sección</span>
    </div>
    <p>
        Esta lista es el punto de partida, no el final. Añade <strong>al menos 3 fuentes adicionales que
        hayas consultado de verdad</strong> durante tu implementación (por ejemplo, la man page de gzip,
        la documentación de la librería que uses para el correo, una guía de Debian o una pregunta de
        Stack Overflow que te resolvió un error). Cítalas en el mismo formato APA y ordénalas
        cronológicamente al final de la lista. Una bibliografía real demuestra que sabes investigar con
        criterio profesional.
    </p>
</div>
`;
