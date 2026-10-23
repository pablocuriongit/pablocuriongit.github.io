window.sectionsContent = window.sectionsContent || {};
window.sectionsContent["herramientas"] = `
<div class="callout callout-info">
    <div class="callout-title">
        <span>🧰</span>
        <span>Herramientas de Apoyo: Recursos Listos para Usar</span>
    </div>
    <p>
        Plantillas, checklists, rúbricas y glosarios para la implementación del MediConnect AutoAdmin
        Toolkit. Son documentos de trabajo: debes <strong>rellenarlos, adaptarlos y entregarlos</strong>
        como evidencia y como autoevaluación antes de la defensa.
    </p>
</div>

<h3>8.1. Plantilla de Nomenclatura de Usuarios</h3>
<p>
    El M1 genera el sAMAccountName de cada alta con esta regla; tu
    <code class="text-sm">alta-usuario.ps1</code> debe implementarla y validarla.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Campo</th>
            <th class="border border-slate-200 p-3 text-left">Descripción y Ejemplo</th>
            <th class="border border-slate-200 p-3 text-left">Validación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Inicial</td>
            <td class="border border-slate-200 p-3">Primera letra del nombre de pila en minúscula (Javier → j)</td>
            <td class="border border-slate-200 p-3">Sin tilde; ñ y ç pasan a n y c</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Apellido1</td>
            <td class="border border-slate-200 p-3">Cuatro primeras letras, o el completo si es más corto (Ruiz → ruiz)</td>
            <td class="border border-slate-200 p-3">Sin acentos ni espacios; minúsculas</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Apellido2</td>
            <td class="border border-slate-200 p-3">Dos primeras letras (González → go)</td>
            <td class="border border-slate-200 p-3">Obligatorio; sin acentos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Antigüedad</td>
            <td class="border border-slate-200 p-3">Dos últimos dígitos del año de ingreso (2021 → 21)</td>
            <td class="border border-slate-200 p-3">Año 2000-2099; si existe, añadir dígito incremental</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">UPN y OU</td>
            <td class="border border-slate-200 p-3">jruizgo21@mediconnect.local en OU=Usuarios,OU=Torrent</td>
            <td class="border border-slate-200 p-3">UPN = sAMAccountName; OU debe existir antes de crear</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>⚠️</span>
        <span>Regla de Oro del M1</span>
    </div>
    <p>
        Valida <strong>antes</strong> de crear: campo inválido, error en el log y la fila se omite sin
        cortar el lote. O la cuenta completa, o ninguna.
    </p>
</div>

<h4>Ejemplos Válidos e Inválidos</h4>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Entrada</th>
            <th class="border border-slate-200 p-3 text-left">Usuario</th>
            <th class="border border-slate-200 p-3 text-left">¿Válido?</th>
            <th class="border border-slate-200 p-3 text-left">Explicación</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">Javier Ruiz González · 2021</td>
            <td class="border border-slate-200 p-3"><code class="text-sm">jruizgo21</code></td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">Sí</span></td>
            <td class="border border-slate-200 p-3">Cumple todos los campos</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Marta López García · 2023 (ya existe)</td>
            <td class="border border-slate-200 p-3"><code class="text-sm">mlopezga232</code></td>
            <td class="border border-slate-200 p-3"><span class="text-green-600 font-bold">Sí</span></td>
            <td class="border border-slate-200 p-3">Colisión resuelta con incremental</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Javier Ruiz González</td>
            <td class="border border-slate-200 p-3"><code class="text-sm">JRuizGo21</code></td>
            <td class="border border-slate-200 p-3"><span class="text-red-600 font-bold">No</span></td>
            <td class="border border-slate-200 p-3">Mayúsculas</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">Javier Ruiz González</td>
            <td class="border border-slate-200 p-3"><code class="text-sm">jruizgoñ21</code></td>
            <td class="border border-slate-200 p-3"><span class="text-red-600 font-bold">No</span></td>
            <td class="border border-slate-200 p-3">Ñ sin normalizar</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3">Javier Ruiz González</td>
            <td class="border border-slate-200 p-3"><code class="text-sm">jruizgo</code></td>
            <td class="border border-slate-200 p-3"><span class="text-red-600 font-bold">No</span></td>
            <td class="border border-slate-200 p-3">Falta antigüedad</td>
        </tr>
    </tbody>
</table>

<h3>8.2. Checklist de Puesta en Marcha</h3>
<p>
    Cambia cada <strong>☐</strong> a <strong>✅</strong> al verificarlo. No avances de fase con puntos
    pendientes: los módulos dependen unos de otros.
</p>

<h4>Fase 0 · Entorno</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ MV Windows Server 2022 con AD, DNS, RSAT y dominio de laboratorio.</li>
    <li>☐ MV Debian 12 con openssh-server, rsync, mysql-client y cron.</li>
    <li>☐ OU=Lab creada y usuario de prueba con permisos de administrador.</li>
    <li>☐ Servidor SMTP de prueba accesible y puerto 587 abierto.</li>
    <li>☐ Repositorio Git inicializado con README.md y .gitignore.</li>
</ul>

<h4>Fase 1 · M1 (Usuarios AD)</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ alta-usuario.ps1 probado con 3 usuarios válidos y OU verificada.</li>
    <li>☐ Usuarios inválidos de la tabla 8.1 rechazados sin crear cuentas.</li>
    <li>☐ baja-usuario.ps1: cuenta deshabilitada, movida a OU=Baja y logueada.</li>
    <li>☐ Log con fecha, acción y usuario afectado revisado como evidencia.</li>
</ul>

<h4>Fase 2 · M2 (Copias)</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ rsync incremental completado y verificado (rsync -n o comparación).</li>
    <li>☐ mysqldump comprimido con gzip y tamaño registrado.</li>
    <li>☐ Retención 30/90/365 días aplicada y borrado probado.</li>
    <li>☐ Informe (formato 8.3) generado y correo de aviso recibido.</li>
</ul>

<h4>Fase 3 · M3 (Inventario)</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ inventario.py ejecutado en al menos 3 equipos.</li>
    <li>☐ Salidas CSV y HTML abiertas en hoja de cálculo y navegador.</li>
    <li>☐ CSV contrastado con el formato del Anexo C.</li>
</ul>

<h4>Fase 4 · M4 (Higiene de Cuentas)</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ Listado de cuentas inactivas más de 60 días generado (Windows y Linux).</li>
    <li>☐ Modo propuesta (solo informa) revisado con el profesorado.</li>
    <li>☐ Modo ejecución con confirmación interactiva probado y logueado.</li>
</ul>

<h4>Fase 5 · M5 (Planificación)</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ Tarea creada en el Programador de tareas de Windows Server.</li>
    <li>☐ Entrada de cron creada con crontab -e y verificada con crontab -l.</li>
    <li>☐ Historial revisado tras un ciclo completo y alerta recibida.</li>
</ul>

<h4>Fase 6 · Documentación y Cierre</h4>
<ul class="list-none space-y-1 my-3">
    <li>☐ README.md actualizado tras las últimas pruebas.</li>
    <li>☐ Diccionario de logs completado (severidades y códigos de salida).</li>
    <li>☐ Registro de pruebas (Anexo D) relleno y capturas (Anexo E) insertadas.</li>
</ul>

<h3>8.3. Plantilla de Informe de Ejecución de Backup</h3>
<p>
    El M2 genera este informe tras cada ejecución. Las dos primeras filas muestran el detalle esperado.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Fecha y Hora</th>
            <th class="border border-slate-200 p-3 text-left">Origen</th>
            <th class="border border-slate-200 p-3 text-left">Destino</th>
            <th class="border border-slate-200 p-3 text-left">Tamaño</th>
            <th class="border border-slate-200 p-3 text-left">Verificación</th>
            <th class="border border-slate-200 p-3 text-left">Incidencias</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3">14/10/2026 · 02:00</td>
            <td class="border border-slate-200 p-3">/var/www/mediconnect</td>
            <td class="border border-slate-200 p-3">/srv/backup/incremental/2026-10-14/</td>
            <td class="border border-slate-200 p-3">1,8 GB</td>
            <td class="border border-slate-200 p-3">rsync -n: 312 archivos OK</td>
            <td class="border border-slate-200 p-3">Ninguna</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3">14/10/2026 · 02:45</td>
            <td class="border border-slate-200 p-3">mysqldump · citas_db</td>
            <td class="border border-slate-200 p-3">/srv/backup/bd/citas_20261014.sql.gz</td>
            <td class="border border-slate-200 p-3">240 MB</td>
            <td class="border border-slate-200 p-3">gzip -t OK; restauración de prueba OK</td>
            <td class="border border-slate-200 p-3">Aviso SMTP no entregado (revisar 587)</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-success">
    <div class="callout-title">
        <span>✅</span>
        <span>Regla de Verificación (OE-02)</span>
    </div>
    <p>
        Una copia sin verificar no es una copia: la columna <strong>Verificación</strong> nunca puede quedar
        vacía; si falla, marca la incidencia y devuelve un código de salida distinto de cero.
    </p>
</div>

<h3>8.4. Rúbrica de Evaluación del Proyecto</h3>
<p>
    Usa esta rúbrica como <strong>autoevaluación</strong> antes de entregar; el profesorado la aplicará
    como instrumento de evaluación. Puntúa cada criterio de 1 a 6.
</p>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Criterio</th>
            <th class="border border-slate-200 p-3 text-left">Inicial (1-2)</th>
            <th class="border border-slate-200 p-3 text-left">Medio (3-4)</th>
            <th class="border border-slate-200 p-3 text-left">Avanzado (5-6)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Funcionalidad</td>
            <td class="border border-slate-200 p-3">Ejecutan partes del módulo; fallan o no completan el flujo.</td>
            <td class="border border-slate-200 p-3">Los cinco módulos completan su flujo principal.</td>
            <td class="border border-slate-200 p-3">Fiables, cubren extremos y resultados verificables.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Validación de errores</td>
            <td class="border border-slate-200 p-3">Sin comprobaciones; mensajes crípticos o silenciosos.</td>
            <td class="border border-slate-200 p-3">Errores comunes capturados con mensajes claros.</td>
            <td class="border border-slate-200 p-3">Validación total, códigos coherentes, logs con severidad y fallos sin estados a medias.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Seguridad y RGPD</td>
            <td class="border border-slate-200 p-3">Credenciales visibles o ejecución como admin/root sin necesidad.</td>
            <td class="border border-slate-200 p-3">Credenciales fuera del código y mínimo privilegio básico.</td>
            <td class="border border-slate-200 p-3">Mínimo privilegio, copias cifradas, RGPD aplicado y trazabilidad completa.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Documentación</td>
            <td class="border border-slate-200 p-3">Faltan README o guías; casi no hay comentarios.</td>
            <td class="border border-slate-200 p-3">README, cabeceras comentadas y diccionario de logs básico.</td>
            <td class="border border-slate-200 p-3">Completa y suficiente para operar la suite sin ayuda.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Planificación de tareas</td>
            <td class="border border-slate-200 p-3">Todo manual.</td>
            <td class="border border-slate-200 p-3">Tres o más módulos programados con registro.</td>
            <td class="border border-slate-200 p-3">Los cinco programados, con alertas e historial comprobado.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Calidad de código</td>
            <td class="border border-slate-200 p-3">Duplicado, sin funciones ni estilo coherente.</td>
            <td class="border border-slate-200 p-3">Funciones, nombres descriptivos y comentarios útiles.</td>
            <td class="border border-slate-200 p-3">Modular, sin duplicación y versionado en Git con commits claros.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-medium">Pruebas</td>
            <td class="border border-slate-200 p-3">Sin pruebas documentadas.</td>
            <td class="border border-slate-200 p-3">Flujos principales probados y registrados.</td>
            <td class="border border-slate-200 p-3">Casos positivos y negativos, regresión y fallos corregidos.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-medium">Presentación y defensa</td>
            <td class="border border-slate-200 p-3">Explicación desordenada; no responde preguntas básicas.</td>
            <td class="border border-slate-200 p-3">Estructura clara, capturas incluidas y respuestas correctas.</td>
            <td class="border border-slate-200 p-3">Demo en vivo y respuestas con fundamento (RGPD, ITIL, ISO 27001).</td>
        </tr>
    </tbody>
</table>

<h3>8.5. Checklist de Entrega Final</h3>
<ul class="list-none space-y-1 my-4">
    <li>☐ Repositorio Git subido con historial completo y sin temporales ni credenciales.</li>
    <li>☐ README comprobado en el navegador con enlaces funcionando.</li>
    <li>☐ Los cinco scripts con permisos correctos (chmod +x / ExecutionPolicy).</li>
    <li>☐ Ninguna credencial real en el código, los logs ni las capturas.</li>
    <li>☐ Ficheros de ejemplo incluidos: CSV de usuarios, CSV de inventario e informe de backup.</li>
    <li>☐ Registro de pruebas (Anexo D) completo con al menos 9 pruebas OK/KO.</li>
    <li>☐ Al menos un informe de backup real del laboratorio adjunto.</li>
    <li>☐ Capturas del Anexo E insertadas, legibles y numeradas.</li>
    <li>☐ Conclusiones (sección 9) completadas con tu autoevaluación e impacto.</li>
    <li>☐ Bibliografía ampliada con al menos 3 fuentes consultadas de verdad.</li>
    <li>☐ Rúbrica 8.4 usada como autoevaluación sin puntos por debajo del nivel medio.</li>
    <li>☐ PDF generado con el nombre de convención y revisado página a página.</li>
    <li>☐ HTML comprobado: abre sin errores de consola y se navega bien.</li>
    <li>☐ Prueba final: ejecución limpia de un módulo completo desde cero.</li>
    <li>☐ Entrega registrada en la plataforma dentro del plazo.</li>
</ul>

<h3>8.6. Glosario Técnico</h3>
<table class="w-full border-collapse my-6">
    <thead>
        <tr class="bg-slate-50">
            <th class="border border-slate-200 p-3 text-left">Término</th>
            <th class="border border-slate-200 p-3 text-left">Definición</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">OU</td>
            <td class="border border-slate-200 p-3">Unidad organizativa: contenedor de Active Directory para agrupar objetos y aplicar políticas; destino de las altas del M1.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Active Directory</td>
            <td class="border border-slate-200 p-3">Servicio de Microsoft que centraliza autenticación y gestión de objetos en Windows Server; destino del M1.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">SMTP</td>
            <td class="border border-slate-200 p-3">Protocolo de envío de correo (RFC 5321) usado por el M5 para las alertas de ejecución.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">rsync</td>
            <td class="border border-slate-200 p-3">Herramienta de Linux que sincroniza directorios transfiriendo solo diferencias; motor de copias del M2.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">checksum</td>
            <td class="border border-slate-200 p-3">Valor calculado desde el contenido de un fichero para detectar alteraciones; usado en la verificación del M2.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">SHA-256</td>
            <td class="border border-slate-200 p-3">Algoritmo de resumen criptográfico de 256 bits que genera una huella única para demostrar integridad.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">cron</td>
            <td class="border border-slate-200 p-3">Programador de tareas de Linux (fichero crontab); el M5 lo usa junto al Programador de tareas de Windows.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">WMI</td>
            <td class="border border-slate-200 p-3">Infraestructura de gestión de Windows que expone hardware y software (Win32_Processor...); la usa el M3.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Mínimo privilegio</td>
            <td class="border border-slate-200 p-3">Principio (least privilege) de dar a cada cuenta o proceso solo los permisos estrictamente necesarios.</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Retención</td>
            <td class="border border-slate-200 p-3">Política que define cuánto tiempo se conservan las copias (30, 90 y 365 días) antes de borrarse.</td>
        </tr>
        <tr>
            <td class="border border-slate-200 p-3 font-bold">Log</td>
            <td class="border border-slate-200 p-3">Registro cronológico de acciones y resultados de cada script; base de la trazabilidad (ISO 27001).</td>
        </tr>
        <tr class="bg-slate-50">
            <td class="border border-slate-200 p-3 font-bold">Git</td>
            <td class="border border-slate-200 p-3">Control de versiones con el que se versiona el toolkit para revertir cambios y documentar su evolución.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout-warning">
    <div class="callout-title">
        <span>📌</span>
        <span>Adapta, no Copies</span>
    </div>
    <p>
        Si adaptas una plantilla a tu laboratorio (otra OU, otra nomenclatura, otro umbral),
        <strong>documenta el cambio y su motivo</strong> en el README: el tribunal valora las decisiones
        justificadas por encima de la copia literal.
    </p>
</div>
`;
