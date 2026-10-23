window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["conclusiones"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🏁</span>
        <span>Conclusiones: Tu Valoración Personal</span>
    </div>
    <p>
        Este apartado <strong>no está escrito para ti: lo escribes tú</strong>. Aquí tienes guías, tablas de
        autoevaluación y preguntas de reflexión para redactar tus conclusiones con lo que realmente has
        programado y probado. Un tribunal detecta al instante una conclusión genérica; una conclusión con
        tus datos, tus errores y tus cifras demuestra que has entendido el proyecto completo.
    </p>
</div>

<h3>9.1. Valoración de los Objetivos del Proyecto</h3>
    <p>
        Comprueba uno a uno los objetivos SMART de la introducción (OE-01 a OE-06) y rellena las dos últimas
        columnas con <strong>tus pruebas y tus ficheros reales</strong> (captura, log o CSV). Sé honesto/a:
        un objetivo parcialmente cumplido con explicación vale más que un cumplimiento inflado sin pruebas.
    </p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Objetivo</th>
            <th class="border border-slate-200 p-3 text-left">Cómo lo Demuestras</th>
            <th class="border border-slate-200 p-3 text-left">Evidencia (fichero o captura)</th>
            <th class="border border-slate-200 p-3 text-left">Cumplimiento</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">OE-01 · Alta de usuarios en menos de 1 minuto y 100% de campos validados</td>
            <td class="border border-slate-200 p-3">Cronometra un lote real de alta-usuario.ps1 y muestra el log de validaciones.</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">OE-02 · Copias diarias verificadas con aviso en menos de 15 minutos</td>
            <td class="border border-slate-200 p-3">Muestra un informe (sección 8.3) con verificación completada y hora del correo recibido.</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">OE-03 · Inventario del parque en un solo clic, en CSV y HTML</td>
            <td class="border border-slate-200 p-3">Adjunta el CSV (formato Anexo C) y el informe HTML en el navegador.</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">OE-04 · Detección de cuentas inactivas más de 60 días y eliminación de huérfanas</td>
            <td class="border border-slate-200 p-3">Presenta el listado de detección, el modo propuesta y el resultado final (cuentas deshabilitadas o movidas).</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">OE-05 · Suite documentada (README, diccionario de logs, guía de operación)</td>
            <td class="border border-slate-200 p-3">Entrega los tres documentos y una captura del README renderizado.</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">OE-06 · Planificación en cron y Programador de tareas con registro trazable</td>
            <td class="border border-slate-200 p-3">Muestra crontab -l, la tarea de Windows y el historial tras un ciclo.</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>

<h3>9.2. Conclusiones Técnicas</h3>
<p>
    Redacta un párrafo por cada bloque respondiendo con honestidad a estas preguntas guía. Intenta incluir
    ejemplos concretos de tu código o de tus logs, no generalidades.
</p>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Complejidad por módulo:</strong> ¿cuál te costó más y por qué (errores de PowerShell, sintaxis de rsync, orientación a objetos de Python)?</li>
    <li><strong>Errores encontrados:</strong> ¿qué fallos aparecieron en las primeras ejecuciones y cómo los detectaste y corregiste?</li>
    <li><strong>Bash frente a PowerShell:</strong> ¿qué te ha parecido automatizar lo mismo en los dos mundos? ¿Cuál elegirías para una nueva tarea?</li>
    <li><strong>Aprendizaje con Python:</strong> ¿qué te ha aportado el M3: psutil, la generación del CSV o la planificación del flujo?</li>
    <li><strong>Planificación:</strong> ¿qué aprendiste diferenciando cron del Programador de tareas? ¿Qué problemas causó el entorno (rutas, permisos, usuario del servicio)?</li>
    <li><strong>Seguridad:</strong> ¿cómo gestionaste credenciales y mínimo privilegio? ¿Qué cambiaste al aplicar el RGPD?</li>
    <li><strong>Versionado:</strong> ¿qué dificultades tuviste con Git (conflictos, commits mal etiquetados, ficheros casi filtrados)?</li>
    <li><strong>Transferibilidad:</strong> ¿qué comando o fragmento reutilizarías mañana en una empresa real sin dudarlo?</li>
</ul>

<h3>9.3. Impacto Empresarial en MediConnect</h3>
<p>
    El escenario inicial cifró el problema; tú cifra la solución con <strong>tus resultados medidos</strong>.
    Completa las columnas vacías y añade los indicadores que consideres necesarios.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Indicador</th>
            <th class="border border-slate-200 p-3 text-left">Situación Inicial (Escenario)</th>
            <th class="border border-slate-200 p-3 text-left">Resultado con Tu Toolkit</th>
            <th class="border border-slate-200 p-3 text-left">Ahorro o Mejora</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Tiempo por alta de usuario</td>
            <td class="border border-slate-200 p-3">15-20 minutos manuales</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Horas mensuales en altas y bajas</td>
            <td class="border border-slate-200 p-3">~6 horas al mes</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Horas mensuales en informes manuales</td>
            <td class="border border-slate-200 p-3">~10 horas al mes</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Copias verificadas automáticamente</td>
            <td class="border border-slate-200 p-3">0 al día (2 fallos no detectados en 12 meses)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Cuentas huérfanas activas</td>
            <td class="border border-slate-200 p-3">18 cuentas (riesgo RGPD estimado en 6.800 €)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Equipos del inventario desactualizados</td>
            <td class="border border-slate-200 p-3">12 equipos sin registrar (riesgo de 9.000 €)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Trazabilidad de operaciones administrativas</td>
            <td class="border border-slate-200 p-3">Sin registro de quién hizo cada alta o baja</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">(Añade tu propio indicador)</td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
            <td class="border border-slate-200 p-3"></td>
        </tr>
    </tbody>
</table>
<p>
    Además de las cifras, reflexiona en un párrafo sobre los riesgos que se eliminan: menos exposición a
    sanciones del RGPD, menos parones por pérdida de datos y menos errores humanos en cuentas privilegiadas.
</p>

<h3>9.4. Líneas Futuras y Mejora Continua</h3>
<p>
    Ninguna suite de scripts es definitiva. Investiga brevemente cada evolución y explica cuáles tienen
    más sentido para MediConnect y qué módulo modificarías para adaptarlas.
</p>
<ul class="list-disc pl-6 space-y-2 my-4">
    <li><strong>Contenedores Docker:</strong> empaquetar los módulos M2 y M3 para ejecutarlos de forma idéntica en laboratorio y producción, sin depender del entorno.</li>
    <li><strong>Ansible:</strong> convertir tareas repetitivas de configuración (OU, paquetes, permisos) en playbooks idempotentes que complementen al M1 en entornos heterogéneos.</li>
    <li><strong>IA para detección de anomalías:</strong> analizar los logs del toolkit para anticipar fallos de backup o picos de creación de cuentas que indiquen un incidente.</li>
    <li><strong>CMDB:</strong> evolucionar el CSV del M3 hacia una base de datos de configuración con ciclo de vida del activo, garantías y licencias (por ejemplo, integrable con GLPI).</li>
    <li><strong>Integración estilo ServiceNow:</strong> que el alta de un usuario dispare también tickets de bienvenida, asignación de software y grupos de correo.</li>
    <li><strong>CI/CD de los scripts:</strong> un pipeline (GitHub Actions o Jenkins) que ejecute las pruebas del Anexo D en cada commit y bloquee el despliegue si hay KO.</li>
    <li><strong>Cifrado de copias con GPG:</strong> que el volcado de la base de datos no sea legible aunque el servidor de copias sea comprometido.</li>
    <li><strong>Portal de autoservicio:</strong> un formulario web interno donde recursos humanos solicite altas y bajas validadas, disparando tus scripts.</li>
</ul>

<h3>9.5. Autoevaluación y Reflexión</h3>
<p>
    Responde con una o dos líneas cada pregunta. Son para ti y para tu bitácora: te ayudarán a explicar
    en la defensa qué has aprendido más allá del código.
</p>
<ol class="list-decimal pl-6 space-y-3 my-4">
    <li>Si tuvieras que empezar de cero, ¿qué harías distinto en la planificación del proyecto?</li>
    <li>¿En qué momento te sentiste más bloqueado/a y qué estrategia te sacó del bloqueo?</li>
    <li>¿Qué concepto de seguridad (mínimo privilegio, RGPD, trazabilidad) entendías peor al empezar y ahora aplicas con criterio?</li>
    <li>¿Cómo ha influido versionar con Git en tu forma de trabajar?</li>
    <li>¿Qué parte del proyecto explicarías con más orgullo a un técnico de una empresa real?</li>
    <li>¿Has cometido algún error que pudiera haber sido grave en producción (credencial expuesta, borrado sin confirmación)? ¿Cómo lo corregiste?</li>
    <li>¿Cómo valoras tu autonomía para buscar documentación oficial frente a depender de videotutoriales?</li>
    <li>¿Qué módulo o competencia te gustaría explorar más a fondo en el futuro?</li>
</ol>

<div class="callout callout-success">
    <div class="callout-title">
        <span>💡</span>
        <span>Consejo del Coach Técnico</span>
    </div>
    <p>
        Las mejores conclusiones combinan <strong>cifras</strong> (horas, porcentajes, cuentas),
        <strong>evidencias</strong> (logs, capturas, commits) y <strong>reflexión honesta</strong>. Evita
        el párrafo vacío tipo "el proyecto ha ido muy bien": un tribunal de FP premia el análisis concreto
        por encima del optimismo genérico.
    </p>
</div>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>✍️</span>
        <span>Este Apartado lo Completas TÚ con tu Experiencia Real</span>
    </div>
    <p>
        Las tablas 9.1 y 9.3 llegan vacías a propósito y las preguntas de 9.2, 9.4 y 9.5 son guías, no
        respuestas. Redacta este apartado <strong>con tus resultados de laboratorio, tus cifras y tu voz
        propia</strong>: una sección copiada se considerará plagio y se calificará con la nota mínima.
    </p>
</div>
`;
