window.sectionsContent = window.sectionsContent || {};
window.sectionsContent.viabilidad = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>📈</span>
        <span>Estudio de Viabilidad del MediConnect AutoAdmin Toolkit</span>
    </div>
    <p>
        Un proyecto técnico no se aprueba solo porque sea interesante: debe ser
        <strong>posible, asequible, organizable y legal</strong>. Este estudio analiza las cinco
        dimensiones de viabilidad del toolkit de scripts. Léelo como un coach lo revisaría antes de
        dar luz verde: cada dato numérico es una pista para que tú calcules el impacto de tu propio
        despliegue en el laboratorio.
    </p>
</div>

<h3>3.1. Viabilidad técnica</h3>
<p>
    La viabilidad técnica responde a una pregunta: <strong>¿disponemos de los recursos y las
    competencias para construir y operar lo propuesto?</strong> Para el MediConnect AutoAdmin
    Toolkit, los requisitos son modestos: no se necesita hardware nuevo, solo máquinas virtuales del
    laboratorio, software libre y las versiones adecuadas de los intérpretes.
</p>

<h4>Recursos necesarios por módulo</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Recurso</th>
            <th class="border border-slate-200 p-3 text-left">Especificación requerida</th>
            <th class="border border-slate-200 p-3 text-left">Disponible en el centro</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Máquina virtual Windows Server 2022</td>
            <td class="border border-slate-200 p-3">Active Directory Domain Services, 2 vCPU, 4 GB RAM, 80 GB disco</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Máquina virtual Debian 12</td>
            <td class="border border-slate-200 p-3">SSH, cron, rsync, cliente MySQL, 2 vCPU, 2 GB RAM</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">PowerShell 7+</td>
            <td class="border border-slate-200 p-3">Módulo ActiveDirectory instalado en el servidor; versión 7.4 o superior recomendada</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Python 3.11+</td>
            <td class="border border-slate-200 p-3">Librerías psutil y wmi (Windows) o python3-psutil (Debian)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">GNU Bash 5+</td>
            <td class="border border-slate-200 p-3">Presente por defecto en Debian 12; herramientas rsync, mysqldump, mailutils</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Red del laboratorio</td>
            <td class="border border-slate-200 p-3">Segmento aislado con DHCP o IPs estáticas, acceso entre MVs y a Internet para documentación</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Repositorio Git</td>
            <td class="border border-slate-200 p-3">Local (servidor Git del centro o carpeta compartida) o remoto (GitHub/GitLab educativo)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Cuenta de correo para alertas</td>
            <td class="border border-slate-200 p-3">SMTP de prueba del centro o servidor de correo interno del escenario</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>
<p>
    Rellena la columna <strong>Disponible en el centro</strong> con una marca (por ejemplo, un
    aspa o un check) y añade una nota si falta algún recurso y cómo piensas sustituirlo. Ese
    ejercicio demuestra al tribunal que has comprobado el entorno de primera mano.
</p>

<h4>Competencias técnicas requeridas</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Programación básica</strong> en los tres lenguajes: variables, condicionales, bucles, funciones y manejo de errores (módulo de <em>Lenguajes de Programación</em>).</li>
    <li><strong>Administración de Windows Server:</strong> Active Directory, usuarios y grupos, permisos, Programador de tareas (módulo de <em>Administración de Sistemas Operativos en Red</em>).</li>
    <li><strong>Administración de Linux:</strong> permisos, cron, servicios, red y SSH (mismos módulos de administración).</li>
    <li><strong>Bases de datos:</strong> exportación con <code class="text-sm">mysqldump</code> y consultas sencillas para informes (módulo de <em>Bases de Datos</em>).</li>
    <li><strong>Seguridad:</strong> políticas de contraseñas, protección de datos y trazabilidad (módulo de <em>Seguridad Informática</em>).</li>
</ul>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Conclusión de viabilidad técnica</span>
    </div>
    <p>
        El proyecto es <strong>técnicamente viable</strong>: todas las tecnologías involucradas son
        libres, multiusuario y ampliamente documentadas, y los recursos del laboratorio del centro
        son suficientes. No se requiere comprar hardware ni licencias. La principal exigencia es la
        <strong>formación previa</strong> del alumnado en los módulos citados, que se supone
        cursados en primero y en el presente curso.
    </p>
</div>

<h3>3.2. Viabilidad económica</h3>
<p>
    El argumento económico del toolkit es sencillo de entender pero poderoso: el coste de
    <strong>no automatizar</strong> ya se está pagando cada mes en horas perdidas y en riesgos
    materializados. Vamos a cuantificarlo con los datos del escenario MediConnect.
</p>

<h4>Coste de la situación actual (sin toolkit)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Concepto</th>
            <th class="border border-slate-200 p-3 text-left">Datos del escenario</th>
            <th class="border border-slate-200 p-3 text-left">Cálculo</th>
            <th class="border border-slate-200 p-3 text-left">Impacto mensual (ejemplo)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Altas y bajas manuales</td>
            <td class="border border-slate-200 p-3">25 operaciones al mes × 18 min por operación</td>
            <td class="border border-slate-200 p-3">25 × 18 min = 450 min ≈ 7,5 h/mes</td>
            <td class="border border-slate-200 p-3">7,5 h × coste hora del técnico</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Informes manuales</td>
            <td class="border border-slate-200 p-3">Copia de datos en hoja de cálculo</td>
            <td class="border border-slate-200 p-3">10 h/mes</td>
            <td class="border border-slate-200 p-3">10 h × coste hora del técnico</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Fallos de backup no detectados</td>
            <td class="border border-slate-200 p-3">2 fallos en 12 meses; base de datos 11 días sin copia</td>
            <td class="border border-slate-200 p-3">Pérdida estimada: 6.800 €</td>
            <td class="border border-slate-200 p-3">6.800 € ÷ 12 ≈ 567 €/mes de riesgo esperado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Riesgo de licencias sin tramitar</td>
            <td class="border border-slate-200 p-3">40 licencias sin registrar tras auditoría</td>
            <td class="border border-slate-200 p-3">Riesgo de multa estimado: 9.000 €</td>
            <td class="border border-slate-200 p-3">9.000 € ÷ 12 = 750 €/mes de riesgo esperado</td>
        </tr>
    </tbody>
</table>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>🧮</span>
        <span>Tu turno: calcula el coste real</span>
    </div>
    <p>
        Consulta con el profesorado el <strong>coste hora orientativo de un técnico de sistemas
        (categoría profesional)</strong> y completa una tabla propia tipo coste-beneficio con estas
        columnas: Concepto / Cantidad / Coste unitario / Coste total mensual / Coste anual. Compara
        el total de la situación actual con el coste del toolkit. Recuerda: en licencias, el coste
        es <strong>0 €</strong> porque todo el software es libre (Bash, PowerShell, Python, rsync,
        cron).
    </p>
</div>

<h4>Tabla coste-beneficio (plantilla para tu despliegue)</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Concepto</th>
            <th class="border border-slate-200 p-3 text-left">Coste sin proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Coste con proyecto</th>
            <th class="border border-slate-200 p-3 text-left">Ahorro anual (tu cálculo)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Licencias de software</td>
            <td class="border border-slate-200 p-3">0 € (software libre existente)</td>
            <td class="border border-slate-200 p-3">0 € (suite propia, GPL/Libre)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Hardware adicional</td>
            <td class="border border-slate-200 p-3">0 € (MVs existentes)</td>
            <td class="border border-slate-200 p-3">0 € (mismas MVs)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Horas de altas y bajas</td>
            <td class="border border-slate-200 p-3">7,5 h/mes (dato escenario)</td>
            <td class="border border-slate-200 p-3">Menos de 1 h/mes (objetivo OE-01)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Horas de informes</td>
            <td class="border border-slate-200 p-3">10 h/mes (dato escenario)</td>
            <td class="border border-slate-200 p-3">Generación automática (menos de 1 h de revisión)</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Riesgo de pérdida por fallo de backup</td>
            <td class="border border-slate-200 p-3">567 €/mes de riesgo esperado</td>
            <td class="border border-slate-200 p-3">Verificación diaria: riesgo residual mínimo</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Riesgo sancionador RGPD / licencias</td>
            <td class="border border-slate-200 p-3">16.800 € de exposición total (6.800 + 9.000)</td>
            <td class="border border-slate-200 p-3">Cuentas al día e inventario trazable</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Formación del equipo</td>
            <td class="border border-slate-200 p-3">0 € (autoformación con documentación libre)</td>
            <td class="border border-slate-200 p-3">Tiempo de aprendizaje inicial asumido</td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="border-t-2 border-slate-300">
            <td class="border border-slate-200 p-3 font-bold">TOTAL ANUAL</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3 font-bold text-green-600"></td>
        </tr>
    </tbody>
</table>
<p>
    Elabora además una breve <strong>comparativa con una solución comercial</strong> (por ejemplo,
    una suite de inventario y automatización con licencia de suscripción por equipo) y calcula su
    coste a cinco años frente a tu suite propia. Anota las fuentes de precios que consultes.
</p>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💰</span>
        <span>Conclusión de viabilidad económica</span>
    </div>
    <p>
        Con coste cero en licencias y hardware, el retorno del proyecto se obtiene casi
        íntegramente por la <strong>recuperación de horas de trabajo</strong> y la
        <strong>reducción del riesgo</strong>. Presenta tus cifras con honestidad: los tribunales
        valoran más un cálculo pequeño pero bien argumentado que un ahorro inflado sin base.
    </p>
</div>

<h3>3.3. Viabilidad organizativa y de proceso</h3>
<p>
    La parte más delicada de cualquier automatización no es el código: son las <strong>personas</strong>.
    El departamento de sistemas de MediConnect tiene solo dos profesionales (un jefe de sistemas y un
    técnico de soporte). El toolkit cambia su forma de trabajar: de ejecutar tareas a supervisar
    ejecuciones automáticas y gestionar excepciones.
</p>

<h4>Impacto en el trabajo del equipo</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Rol</th>
            <th class="border border-slate-200 p-3 text-left">Trabajo antes del toolkit</th>
            <th class="border border-slate-200 p-3 text-left">Trabajo después del toolkit</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Jefe de sistemas</td>
            <td class="border border-slate-200 p-3">Aprueba altas/bajas, revisa informes montados a mano, decide sobre bajas de cuentas</td>
            <td class="border border-slate-200 p-3">Supervisa informes automáticos, valida propuestas de baja de cuentas, audita logs</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Técnico de soporte</td>
            <td class="border border-slate-200 p-3">Ejecuta altas, lanza backups, copia datos a hojas de cálculo</td>
            <td class="border border-slate-200 p-3">Atiende tickets de mayor valor, mantiene los scripts, revisa alertas de correo</td>
        </tr>
    </tbody>
</table>

<h4>Resistencia al cambio y cómo abordarla</h4>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Miedo a que el script falle en silencio:</strong> se mitiga con verificaciones, alertas por correo y periodo de doble ejecución (manual + automática) hasta ganar confianza.</li>
    <li><strong>Dependencia del técnico que programa:</strong> se mitiga con documentación (README, guía de operación, diccionario de logs) y reparto de conocimiento entre ambos técnicos.</li>
    <li><strong>Exceso de confianza ciega en la automatización:</strong> se mitiga recordando que los scripts deben <em>revisarse</em>, no solo ejecutarse; la persona manda, la herramienta asiste.</li>
    <li><strong>Falta de tiempo para implementar:</strong> se mitiga priorizando módulos por impacto (empezar por usuarios AD y copias) e implantando por fases.</li>
</ul>

<h4>Plan de implantación por fases</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fase</th>
            <th class="border border-slate-200 p-3 text-left">Contenido</th>
            <th class="border border-slate-200 p-3 text-left">Impacto en la operativa</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Fase 1 · Entorno de pruebas</td>
            <td class="border border-slate-200 p-3">Montaje de MVs, esquema de directorios del toolkit, repositorio Git</td>
            <td class="border border-slate-200 p-3">Nulo: se trabaja en laboratorio</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Fase 2 · Piloto de módulos críticos</td>
            <td class="border border-slate-200 p-3">Módulo de usuarios AD y módulo de copias en modo doble ejecución</td>
            <td class="border border-slate-200 p-3">Bajo: la vía manual sigue activa</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Fase 3 · Inventario e higiene</td>
            <td class="border border-slate-200 p-3">Módulos de inventario y detección de cuentas inactivas con revisión humana</td>
            <td class="border border-slate-200 p-3">Bajo: solo lectura y propuestas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Fase 4 · Automatización total</td>
            <td class="border border-slate-200 p-3">Planificación en cron y Programador de tareas, alertas por correo</td>
            <td class="border border-slate-200 p-3">Medio: requiere formación breve del equipo</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Fase 5 · Revisión y mejora continua</td>
            <td class="border border-slate-200 p-3">Auditoría de logs, ajuste de umbrales, incorporación de sugerencias del equipo</td>
            <td class="border border-slate-200 p-3">Nulo: consolidación</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-info">
    <div class="callout-title">
        <span>🤝</span>
        <span>Consejo de Coach Técnico</span>
    </div>
    <p>
        Cuando presentes el proyecto al "cliente interno" (el jefe de sistemas del escenario),
        enfócate en lo que gana: <strong>menos tareas aburridas, menos errores y más tiempo para
        incidencias de valor</strong>. La comunicación del beneficio es tan importante como el
        código. Documenta la formación ofrecida al equipo: un checklist de uso del toolkit vale
        más que una presentación de veinte diapositivas.
    </p>
</div>

<h3>3.4. Viabilidad legal y RGPD</h3>
<p>
    Los scripts del toolkit tratan <strong>datos personales</strong>: nombres de usuarios, correos,
    departamentos, fechas de última conexión. En una empresa de telemedicina que además gestiona
    datos de salud, el cumplimiento del <strong>RGPD</strong> (Reglamento General de Protección de
    Datos) y de la <strong>LOPDGDD</strong> (Ley Orgánica 3/2018) no es opcional. Estas son las
    principales obligaciones legales que debe reflejar tu proyecto:
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Obligación legal</th>
            <th class="border border-slate-200 p-3 text-left">Qué exige</th>
            <th class="border border-slate-200 p-3 text-left">Cómo se cumple en el toolkit (tu propuesta)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Principio de minimización</td>
            <td class="border border-slate-200 p-3">Tratar solo los datos estrictamente necesarios</td>
            <td class="border border-slate-200 p-3">Los logs registran solo el identificador de cuenta y la operación, no nombres completos ni datos clínicos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Principio de exactitud y actualización</td>
            <td class="border border-slate-200 p-3">Los datos deben estar al día</td>
            <td class="border border-slate-200 p-3">El módulo de higiene elimina o desactiva cuentas de personas cesadas, evitando datos desactualizados</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Principio de integridad y confidencialidad</td>
            <td class="border border-slate-200 p-3">Proteger los datos frente a accesos no autorizados</td>
            <td class="border border-slate-200 p-3">Permisos restrictivos en los scripts, credenciales en cuentas de servicio y cifrado de las copias</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Registro de actividades de tratamiento</td>
            <td class="border border-slate-200 p-3">Documentar qué tratamientos se realizan y con qué finalidad</td>
            <td class="border border-slate-200 p-3">Añadir al registro de la empresa una actividad por cada módulo que toque cuentas de usuario</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Principio de limitación del plazo de conservación</td>
            <td class="border border-slate-200 p-3">No conservar datos más tiempo del necesario</td>
            <td class="border border-slate-200 p-3">Política de retención explícita para logs (por ejemplo, 90 días) y para copias de seguridad</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Gestión de datos de contacto públicos (whois)</td>
            <td class="border border-slate-200 p-3">Datos de titularidad de dominios y servidores accesibles públicamente</td>
            <td class="border border-slate-200 p-3">Al generar el inventario, estudiar qué datos whois se publican y usar el servicio de privacidad de contactos</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Seguridad por diseño y por defecto</td>
            <td class="border border-slate-200 p-3">La protección debe estar incorporada desde el diseño (art. 25 RGPD)</td>
            <td class="border border-slate-200 p-3">Validaciones de entrada, contraseñas generadas aleatoriamente y principio de mínimo privilegio en cuentas de servicio</td>
        </tr>
    </tbody>
</table>
<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚖️</span>
        <span>Pista clave para el tribunal</span>
    </div>
    <p>
        Un detalle que marca la diferencia: el módulo de higiene de cuentas debe funcionar en modo
        <strong>propuesta</strong>, no de borrado silencioso. La baja definitiva de una cuenta la
        aprueba siempre una persona (el jefe de sistemas), dejando constancia. Ese pequeño diseño
        responde al principio RGPD de responsabilidad proactiva y demuestra sensibilidad legal.
    </p>
</div>

<h3>3.5. Análisis de riesgos</h3>
<p>
    Todo proyecto conlleva riesgos. Los registramos en una matriz estilo <strong>RAID</strong>
    (Risks, Assumptions, Issues, Dependencies) con probabilidad, impacto y mitigación. Los seis
    primeros vienen de la experiencia del escenario; añade al menos dos filas tuyas investigando el
    proyecto.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Riesgo</th>
            <th class="border border-slate-200 p-3 text-left">Probabilidad</th>
            <th class="border border-slate-200 p-3 text-left">Impacto</th>
            <th class="border border-slate-200 p-3 text-left">Mitigación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Un script con errores borra o modifica usuarios válidos</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Alto</td>
            <td class="border border-slate-200 p-3">Modo de prueba con entorno virtual, validaciones de entrada, modo propuesta antes de ejecución real y registro detallado</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Las copias automáticas fallan y nadie se entera</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Muy alto (pérdida de datos)</td>
            <td class="border border-slate-200 p-3">Verificación de integridad tras cada copia, alerta por correo en fallo y comprobación semanal del último informe</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Pérdida del código fuente por no versionar</td>
            <td class="border border-slate-200 p-3">Baja</td>
            <td class="border border-slate-200 p-3">Alto</td>
            <td class="border border-slate-200 p-3">Repositorio Git con respaldo remoto, commits frecuentes y etiquetas de versión</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Fuga de datos personales en logs o informes</td>
            <td class="border border-slate-200 p-3">Baja</td>
            <td class="border border-slate-200 p-3">Muy alto (sanción RGPD)</td>
            <td class="border border-slate-200 p-3">Minimización de datos en logs, permisos 600 en ficheros sensibles, cifrado del repositorio de copias y retención limitada</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Credenciales de servicio comprometidas</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Muy alto</td>
            <td class="border border-slate-200 p-3">Cuentas dedicadas con mínimo privilegio, contraseñas robustas en gestor, sin incrustar secretos en el código (usar variables de entorno)</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">El equipo no adopta el toolkit y sigue haciendo todo a mano</td>
            <td class="border border-slate-200 p-3">Media</td>
            <td class="border border-slate-200 p-3">Medio</td>
            <td class="border border-slate-200 p-3">Implantación por fases, formación práctica, documentación clara y comunicación del ahorro conseguido</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>
<p>
    Indica en tu documento la <strong>residualidad</strong> de cada riesgo tras aplicar la
    mitigación: la probabilidad e impacto restantes. Un tribunal entiende que ningún riesgo se
    elimina al 100%; se reduce y se prepara un plan de contingencia.
</p>

<hr class="my-8">

<div class="callout callout-info">
    <div class="callout-title">
        <span>🎯</span>
        <span>Objetivo de esta sección</span>
    </div>
    <p>
        Concluir el estudio de viabilidad debe darte <strong>confianza para empezar</strong>: sabes
        qué recursos necesitas, cuánto ahorras, cómo cambia el trabajo del equipo, qué obligaciones
        legales cumples y qué riesgos vigilarás. Ese análisis es lo primero que valorará el tribunal
        antes de mirar una sola línea de código.
    </p>
</div>

<div class="callout callout-success">
    <div class="callout-title">
        <span>🚀</span>
        <span>Mensaje del Coach Técnico</span>
    </div>
    <p>
        No te quedes con las cifras de ejemplo: <strong>haz tus propios cálculos</strong> con los
        datos del escenario y del laboratorio. Un buen análisis de viabilidad no impresiona por ser
        largo, sino por ser <strong>verificable y coherente</strong>. Ahora que ya sabes que el
        proyecto es viable, toca el paso más emocionante: definir los requisitos y diseñar tu suite.
        ¡Vamos a por ello!
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>🏆</span>
        <span>Consejos para el tribunal</span>
    </div>
    <ul class="list-disc pl-6 space-y-2">
        <li>Muestra <strong>tus cálculos</strong> de coste-beneficio con fórmulas visibles y supuestos explícitos (coste hora, número de operaciones, periodo de amortización).</li>
        <li>En la viabilidad legal, cita al menos el <strong>artículo 5 del RGPD</strong> (principios) y el <strong>artículo 25</strong> (protección de datos por diseño) con aplicaciones concretas a tus scripts.</li>
        <li>En la matriz de riesgos, usa valoraciones <strong>coherentes</strong> (un riesgo improbable no debe tener mitigación de máxima urgencia) y añade tus filas con argumentos propios.</li>
        <li>El plan de implantación por fases debe reflejarse después en la sección de implementación: la coherencia entre viabilidad y ejecución se puntúa.</li>
        <li>Presenta las conclusiones de cada subsección con un callout claro; al tribunal le gusta poder seguir el hilo sin perderte en los detalles.</li>
    </ul>
</div>
`;
