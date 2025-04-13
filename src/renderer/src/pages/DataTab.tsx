import { witsElementFront } from 'src/types/front.types'

function DataTab(): JSX.Element {
  return (
    <div className="relative overflow-x-auto rounded-2xl shadow-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-2xl">
        <thead className="text-xs text-white  bg-indigo-950 rounded-2xl">
          <tr>
            <th scope="col" className="px-6 py-3">
              active
            </th>
            <th scope="col" className="px-6 py-3">
              Mnemonic
            </th>
            <th scope="col" className="px-6 py-3">
              WitsCode
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Metrics
            </th>
            <th scope="col" className="px-6 py-3">
              Value
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
        {Datax().map((witsElement) => {
            return (
              <tr key={client.id} className="bg-white border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {client.id}
                </th>
                <td className="px-6 py-4">{client.ip}</td>
                <td className="px-6 py-4">{client.remotePort}</td>
                <td className="px-6 py-4">{client.ipType}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      deleteClientHandle(client.id)
                    }}
                    className="font-medium text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          }
          <tr className="bg-white border-b border-gray-200">
            <td className="px-6 py-4">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  focus:ring-2 "
              />
            </td>
            <td className="px-6 py-4">{'Mnemonic'}</td>
            <td className="px-6 py-4">{'WitsCode'}</td>
            <td className="px-6 py-4">{'Description'}</td>
            <td className="px-6 py-4">{'Metrics'}</td>
            <td className="px-6 py-4">{'Valor'}</td>
            <td className="px-6 py-4">{'-'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DataTab

const Datax = (): witsElementFront[] => {
  return [
    {
      active: true,
      mnemonic: 'ACTC',
      witsCode: '107',
      description: 'Actividad',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DBTM',
      witsCode: '108',
      description: 'Profundidad de la barrena',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DBTV',
      witsCode: '109',
      description: 'Profundidad de la barrena - Vertical',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DMEA',
      witsCode: '110',
      description: 'Profundidad Medida',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DVER',
      witsCode: '111',
      description: 'Profundidad Vertical',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BPOS',
      witsCode: '112',
      description: 'Posición del Bloque',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'ROP',
      witsCode: '113',
      description: 'Velocidad de perforación',
      metrics: 'm/hr',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HKLM',
      witsCode: '114',
      description: 'Carga en gancho ',
      metrics: 'tons',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HKLX',
      witsCode: '115',
      description: 'Carga en gancho- Max',
      metrics: 'tons',
      value: 10
    },
    {
      active: true,
      mnemonic: 'WOBA',
      witsCode: '116',
      description: 'Peso sobre barrena',
      metrics: 'tons',
      value: 10
    },
    {
      active: true,
      mnemonic: 'RPM',
      witsCode: '120',
      description: 'Revoluciones por minuto',
      metrics: 'rpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPP',
      witsCode: '121',
      description: 'Presión en Standpipe',
      metrics: 'psi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'CHKP',
      witsCode: '122',
      description: 'Presión de revestimiento (Choke) ',
      metrics: 'psi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPM1',
      witsCode: '123',
      description: 'Embolada  bomba # 1',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPM2',
      witsCode: '124',
      description: 'Embolada  bomba # 2',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPM3',
      witsCode: '125',
      description: 'Embolada  bomba # 3',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MFOM',
      witsCode: '128',
      description: 'Flujo lodo salida ',
      metrics: '%',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MFIM',
      witsCode: '130',
      description: 'Flujo lodo entrada ',
      metrics: '%',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MDOM',
      witsCode: '131',
      description: 'Densidad lodo salida ',
      metrics: 'gr/cm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MDIM',
      witsCode: '132',
      description: 'Densidad lodo entrada ',
      metrics: 'gr/cm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MTOM',
      witsCode: '133',
      description: 'Temperatura lodo salida',
      metrics: 'ºC',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MTIA',
      witsCode: '134',
      description: 'Temperatura lodo entrada',
      metrics: 'ºC',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MCOM',
      witsCode: '135',
      description: 'Conductividad lodo salida',
      metrics: 'mmho',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MCIM',
      witsCode: '136',
      description: 'Conductividad lodo entrada',
      metrics: 'mmho',
      value: 10
    },
    {
      active: true,
      mnemonic: 'STKC',
      witsCode: '137',
      description: 'Emboladas totales',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LSTK',
      witsCode: '138',
      description: 'Emboladas de atraso ',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DRTM',
      witsCode: '139',
      description: 'Profundidad de atraso ',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'GASA',
      witsCode: '140',
      description: 'Gas total (sensor)',
      metrics: '%',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPM4',
      witsCode: '141',
      description: 'Embolada  bomba # 4',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPM5',
      witsCode: '142',
      description: 'Embolada bomba # 5',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PS1',
      witsCode: '143',
      description: 'Emboladas acum de bomba # 1 ',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PS2',
      witsCode: '144',
      description: 'Emboladas acum de bomba # 2',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PS3',
      witsCode: '145',
      description: 'Emboladas acum de bomba # 3',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PS4',
      witsCode: '146',
      description: 'Emboladas acum de bomba # 4',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PS5',
      witsCode: '147',
      description: 'Emboladas acum de bomba # 5',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TQR',
      witsCode: '147',
      description: 'Torque taladro',
      metrics: 'psi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'RTQ',
      witsCode: '148',
      description: 'Torque Bruto (Sensor)',
      metrics: 'A',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PSCI',
      witsCode: '149',
      description: 'EPMS Total ',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'RROP',
      witsCode: '150',
      description: 'Velocidad de perforación',
      metrics: 'min/m',
      value: 10
    },
    {
      active: true,
      mnemonic: 'RUPT',
      witsCode: '153',
      description: 'Riser - Tiempo Atraso',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LUPT',
      witsCode: '155',
      description: 'Tiempo de atraso agujero',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'RSTK',
      witsCode: '156',
      description: 'Emboladas en Riser',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BSTK',
      witsCode: '157',
      description: 'Emb atraso a la posición del la barrena',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BUPT',
      witsCode: '158',
      description: 'Tiempo atraso posicion de barrena',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SROP',
      witsCode: '185',
      description: 'ROP Sexagesimal ',
      metrics: 'minsec/m',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BRVC',
      witsCode: '216',
      description: 'Revoluciones acum de la barrena ',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR7',
      witsCode: '234',
      description: 'Disponible 1-9',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR9',
      witsCode: '236',
      description: 'Disponible 1-9',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR1',
      witsCode: '322',
      description: 'Disponible 1-5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR3',
      witsCode: '324',
      description: 'Disponible 1-5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR5',
      witsCode: '326',
      description: 'Disponible 1-5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PLB',
      witsCode: '417',
      description: 'Pérdida de presión - barrena',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PLDS',
      witsCode: '418',
      description: 'Pérdida de presión - sarta',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PLA',
      witsCode: '419',
      description: 'Pérdida de presión - Anular',
      metrics: 'psi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'JIF',
      witsCode: '426',
      description: 'Fuerza de impacto del chorro',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'JV',
      witsCode: '427',
      description: 'Velocidad del chorro',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'ECDT',
      witsCode: '430',
      description: 'ECD en Profundidad total',
      metrics: 'g/cc',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DSVM',
      witsCode: '708',
      description: 'Prof. Sensor direccional en la lectura',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DSVV',
      witsCode: '709',
      description: 'Prof.TVD sensor direccional en la lectura',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L000',
      witsCode: '713',
      description: 'Angulo de Inclinación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SINC',
      witsCode: '713',
      description: 'Angulo de inclinación',
      metrics: '°',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SAZC',
      witsCode: '715',
      description: 'Svy Acimut- Corregido',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SMTF',
      witsCode: '716',
      description: 'Svy magnética de Cara Herramienta',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SGTF',
      witsCode: '717',
      description: 'Svy de la Gravedad de Cara Herramienta',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SNS',
      witsCode: '718',
      description: 'Posición Svy Norte-Sur',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SEW',
      witsCode: '719',
      description: 'Posición Svy Este-Oeste',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SDLS',
      witsCode: '720',
      description: 'Survey de la severidad de pata de perro',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L001',
      witsCode: '722',
      description: 'Sección Vertical',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L002',
      witsCode: '808',
      description: 'Profundidad desarrollada (mdbmr)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L003',
      witsCode: '809',
      description: 'Profundidad vertical (mvbmr)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DR1M',
      witsCode: '813',
      description: 'Profundidad del sensor de resistividad 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DR1V',
      witsCode: '814',
      description: 'Profundidad TVD del sensor de resistividad 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MR1',
      witsCode: '815',
      description: 'Lectura de Resistividad 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DR2M',
      witsCode: '817',
      description: 'Profundidad del sensor de resistividad 2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DR2V',
      witsCode: '818',
      description: 'Profundidad TVD del sensor de resistividad 2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MR2',
      witsCode: '819',
      description: 'Lectura de Resistividad 2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DG1M',
      witsCode: '821',
      description: 'Profundidad Sensor Gamma Ray',
      metrics: 'm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L004',
      witsCode: '821',
      description: 'Profundidad desarrollada del sensor (Rayos Gamma)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DG1V',
      witsCode: '822',
      description: 'Profundidad TVD del sensor Gamma Ray 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L005',
      witsCode: '823',
      description: 'Rayos Gamma',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MG1',
      witsCode: '823',
      description: 'Gamma Ray 1',
      metrics: 'mho',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MG2',
      witsCode: '827',
      description: 'Gamma Ray 2 -Lectura',
      metrics: 'mho',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DP1M',
      witsCode: '829',
      description: 'Profundidad del sensor de porosidad 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DP1V',
      witsCode: '830',
      description: 'Profundidad TVD del sensor de porosidad 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MPO1',
      witsCode: '831',
      description: 'Lectura de porosidad de la herramienta 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DFDM',
      witsCode: '839',
      description: 'Prof. Sensor de densidad de formación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DFDV',
      witsCode: '840',
      description: 'Prof.TVD  Sensor de densidad de formación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MFD',
      witsCode: '841',
      description: 'Densidad Formación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DCLM',
      witsCode: '842',
      description: 'Prof. Sensor del Caliper - Medido',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'DCLV',
      witsCode: '843',
      description: 'Prof. Sensor del caliperr- Vertical',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MCLP',
      witsCode: '844',
      description: 'Calibrar',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWD1',
      witsCode: '847',
      description: 'Registro de resistividad # 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L006',
      witsCode: '847',
      description: 'Conductividad somera',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L007',
      witsCode: '848',
      description: 'Conductividad Profunda',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWD2',
      witsCode: '848',
      description: 'Registro de resistividad # 2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWD3',
      witsCode: '849',
      description: 'Registro de resistividad # 3',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L008',
      witsCode: '849',
      description: 'Atenuación Somera',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L009',
      witsCode: '850',
      description: 'Atenuación Profunda',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWD4',
      witsCode: '850',
      description: 'Registro de resistividad # 4',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWD5',
      witsCode: '851',
      description: 'Registro de resistividad # 5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L010',
      witsCode: '851',
      description: 'Eficiencia torcional',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L011',
      witsCode: '852',
      description: 'Vibración Axial',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWDP',
      witsCode: '852',
      description: 'Presión LWD-PWD',
      metrics: 'psi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'LWT',
      witsCode: '853',
      description: 'Temperatura LWD-PWD',
      metrics: 'ºC',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L012',
      witsCode: '853',
      description: 'Vibración Lateral',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L013',
      witsCode: '854',
      description: 'Registro sónico',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PWD1',
      witsCode: '854',
      description: 'PWD Spare 1',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PWD2',
      witsCode: '855',
      description: 'PWD Spare 2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PWD3',
      witsCode: '856',
      description: 'PWD Spare 3',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PWD4',
      witsCode: '857',
      description: 'PWD Spare 4',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PWD5',
      witsCode: '858',
      description: 'PWD Spare 5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L014',
      witsCode: '908',
      description: 'Profundidad desarrollada (mdbmr)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L015',
      witsCode: '909',
      description: 'Profundidad vertical (mvbmr)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MBPA',
      witsCode: '913',
      description: 'Presión anular en el fondo de pozo',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MBPI',
      witsCode: '914',
      description: 'Presión intena en el fondo de pozo',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MMRP',
      witsCode: '919',
      description: 'RPM del motor de fondo ',
      metrics: 'rpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L018',
      witsCode: '926',
      description: 'Densidad Equivalente de Circulación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L016',
      witsCode: '927',
      description: 'Profundidad del Sensor',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'L017',
      witsCode: '928',
      description: 'Temperatura',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR1',
      witsCode: '940',
      description: 'Bh',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR2',
      witsCode: '941',
      description: 'Ch',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR3',
      witsCode: '942',
      description: 'C1(%)',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR4',
      witsCode: '943',
      description: 'Biodegradación',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR5',
      witsCode: '944',
      description: 'Saturacion Fluido',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR6',
      witsCode: '945',
      description: 'Indicador del Petroleo',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR7',
      witsCode: '946',
      description: 'Inverso del Petroleo',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR8',
      witsCode: '947',
      description: 'Indicador Porosidad',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR9',
      witsCode: '948',
      description: 'Pixler C1/C2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VAR0',
      witsCode: '949',
      description: 'Wh',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA10',
      witsCode: '950',
      description: 'Pixler C1/C3',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA11',
      witsCode: '951',
      description: 'Pixler C1/C4',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA12',
      witsCode: '952',
      description: 'Pixler C1/C5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA13',
      witsCode: '953',
      description: 'Variable Matemática 13',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA14',
      witsCode: '954',
      description: 'Variable Matemática 14',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA15',
      witsCode: '955',
      description: 'Variable Matemática 15',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA16',
      witsCode: '956',
      description: 'Variable Matemática 16',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA17',
      witsCode: '957',
      description: 'Variable Matemática 17',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA18',
      witsCode: '958',
      description: 'Variable Matemática  18',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'VA19',
      witsCode: '959',
      description: 'Variable Matemática 19',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TVT',
      witsCode: '110',
      description: 'Volumen de presa Total',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TVA',
      witsCode: '111',
      description: 'Volumen de presa Activo',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TVCA',
      witsCode: '113',
      description: 'Perdida/ Ganancia -Lodo',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TVRT',
      witsCode: '114',
      description: 'Perdida/ Ganancia -Tiempo',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV01',
      witsCode: '115',
      description: 'Volumen de presa 01',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV02',
      witsCode: '116',
      description: 'Volumen de presa 02',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV03',
      witsCode: '117',
      description: 'Volumen de presa 03',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV04',
      witsCode: '118',
      description: 'Volumen de presa 04',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV05',
      witsCode: '119',
      description: 'Volumen de presa 05',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV06',
      witsCode: '120',
      description: 'Volumen de presa 06',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV07',
      witsCode: '121',
      description: 'Volumen de presa 07',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV08',
      witsCode: '122',
      description: 'Volumen de presa 08',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV09',
      witsCode: '123',
      description: 'Volumen de presa 09',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV10',
      witsCode: '124',
      description: 'Volumen de presa 10',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV11',
      witsCode: '125',
      description: 'Volumen de presa 11',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV12',
      witsCode: '126',
      description: 'Volumen de presa 12',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV13',
      witsCode: '127',
      description: 'Volumen de presa 13',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TV14',
      witsCode: '128',
      description: 'Volumen de presa 14',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TTV1',
      witsCode: '129',
      description: 'presa de  viaje 1',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TTV2',
      witsCode: '130',
      description: 'presa de  viaje 2',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PTV1',
      witsCode: '131',
      description: 'Volumen de pildora 01',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PTV2',
      witsCode: '132',
      description: 'Volumen de pildora 02',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'METH',
      witsCode: '212',
      description: 'Metano - C1',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'ETH',
      witsCode: '213',
      description: 'Etano - C2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PRP',
      witsCode: '214',
      description: 'Propano - C3',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IBUT',
      witsCode: '215',
      description: 'Iso-Butano - IC4',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NBUT',
      witsCode: '216',
      description: 'Nor-Butano - NC4',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IPEN',
      witsCode: '217',
      description: 'Iso-pentano - IC5',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NPEN',
      witsCode: '218',
      description: 'Nor-pentano - NC5',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'EPEN',
      witsCode: '219',
      description: 'Neo-pentano - EC5',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IHEX',
      witsCode: '220',
      description: 'Iso-Hexano - IC6',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NHEX',
      witsCode: '221',
      description: 'Nor-Hexano - NC6',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'CO2',
      witsCode: '222',
      description: 'CO2 (chrom)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SOA',
      witsCode: '224',
      description: 'Gas (Suma de alcanos)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'C1C2',
      witsCode: '228',
      description: 'Relación C1 - C2',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'C1C3',
      witsCode: '229',
      description: 'Relación C1 - C3',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'C1C4',
      witsCode: '230',
      description: 'Relación C1 - C4',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'C1C5',
      witsCode: '231',
      description: 'Relación C1 - C5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MET2',
      witsCode: '233',
      description: '(C1) Metano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'ETH2',
      witsCode: '234',
      description: '(C2) Etano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PRP2',
      witsCode: '235',
      description: '(C3) Propano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IBU2',
      witsCode: '236',
      description: '(IC4) Iso-Butano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NBU2',
      witsCode: '237',
      description: '(NC4) Nor-Butano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IPE2',
      witsCode: '238',
      description: '(IC5) Iso-Pentano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NPE2',
      witsCode: '239',
      description: '(NC5) Nor-Pentano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'EPE2',
      witsCode: '240',
      description: 'Neo-Pentano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'IHE2',
      witsCode: '243',
      description: '(IC6) Iso-Hexano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'NHE2',
      witsCode: '244',
      description: '(NC6) Nor-Hexano Chrom 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC1',
      witsCode: '249',
      description: 'Espectrómetro (C1)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC2',
      witsCode: '250',
      description: 'Espectrómetro (C2)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC3',
      witsCode: '251',
      description: 'Espectrómetro (C3)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC4',
      witsCode: '252',
      description: 'Espectrómetro (C4)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC5',
      witsCode: '253',
      description: 'Espectrómetro (C5)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC6',
      witsCode: '254',
      description: 'Espectrómetro (C6)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC7',
      witsCode: '255',
      description: 'Espectrómetro (C7)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC8',
      witsCode: '256',
      description: 'Espectrómetro (C8)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC9',
      witsCode: '257',
      description: 'Espectrómetro (C9)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSC0',
      witsCode: '258',
      description: 'Espectrómetro (C10)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSCH',
      witsCode: '259',
      description: 'Espectrómetro DQ Ch',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSBH',
      witsCode: '260',
      description: 'Espectrómetro DQ Bh',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSWH',
      witsCode: '261',
      description: 'Espectrómetro DQ Wh',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSR0',
      witsCode: '262',
      description: 'Espectrómetro R0',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSR1',
      witsCode: '263',
      description: 'Espectrómetro R1',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSR2',
      witsCode: '264',
      description: 'Espectrómetro R2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSR3',
      witsCode: '265',
      description: 'Espectrómetro R3',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSAR',
      witsCode: '266',
      description: 'Espectrómetro Aromático',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSNA',
      witsCode: '267',
      description: 'Espectrómetro naftenos',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSPA',
      witsCode: '268',
      description: 'Espectrómetro parafina',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSBT',
      witsCode: '269',
      description: 'Espectrómetro Ben / Tol',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSBN',
      witsCode: '270',
      description: 'Espectrómetro Ben / nC6',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSBC',
      witsCode: '271',
      description: 'Espectrómetro Ben / CC6',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSS1',
      witsCode: '272',
      description: 'Espectrómetro Azufre_1',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSS2',
      witsCode: '273',
      description: 'Espectrómetro Azufre_2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSS3',
      witsCode: '274',
      description: 'Espectrómetro Azufre_3',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSS4',
      witsCode: '275',
      description: 'Espectrómetro Azufre_4',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSA1',
      witsCode: '276',
      description: 'Espectrómetro Aire_1',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSA2',
      witsCode: '277',
      description: 'Espectrómetro Aire_2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSHE',
      witsCode: '278',
      description: 'Espectrómetro Helio',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSHY',
      witsCode: '279',
      description: 'Espectrómetro Hidrógeno',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSCR',
      witsCode: '280',
      description: 'Espectrómetro CO2_bruto ',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSCC',
      witsCode: '281',
      description: 'Espectrómetro CO2_calc',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSNI',
      witsCode: '282',
      description: 'Espectrómetro Nitrógeno',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSOX',
      witsCode: '283',
      description: 'Espectrómetro oxígeno',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSTG',
      witsCode: '284',
      description: 'Espectrómetro gas total',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'GASU',
      witsCode: '285',
      description: 'Gas (totalizados Alcanos)',
      metrics: 'uni',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SOAP',
      witsCode: '286',
      description: 'Gas (Suma de alcanos) (%)',
      metrics: '%',
      value: 10
    },
    {
      active: true,
      mnemonic: 'CO2S',
      witsCode: '341',
      description: 'Sensor de CO2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HPA1',
      witsCode: '416',
      description: 'Sensor de H2S 1',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HSA',
      witsCode: '423',
      description: 'H2S (chrom)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HPA2',
      witsCode: '475',
      description: 'Sensor de H2S 2',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HPA3',
      witsCode: '476',
      description: 'Sensor de H2S 3',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'HPA4',
      witsCode: '477',
      description: 'Sensor de H2S 4',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR2',
      witsCode: '062',
      description: 'Disponible 1-5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR4',
      witsCode: '064',
      description: 'Disponible 1-5',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BDIA',
      witsCode: '109',
      description: 'Diámetro Barrena',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BDTI',
      witsCode: '124',
      description: 'Tiempo Perforado Barrena',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR6',
      witsCode: '146',
      description: 'Disponible 1-9',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SPR8',
      witsCode: '148',
      description: 'Disponible 1-9',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TQM',
      witsCode: '068',
      description: 'Rotación Torque (medido)',
      metrics: 'lb-ft',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PMPO',
      witsCode: '090',
      description: 'Gasto de Salida',
      metrics: 'gpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TPMP',
      witsCode: '092',
      description: 'Gasto/Sumatoria',
      metrics: 'gpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TUPT',
      witsCode: '093',
      description: 'Tiempo de atraso/Sumatoria',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TMLW',
      witsCode: '094',
      description: 'Tiempo de bajada',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'PMPR',
      witsCode: '095',
      description: 'Gasto en Riser',
      metrics: 'gpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'FCTM',
      witsCode: '096',
      description: 'Tiempo de ciclo completo (Down + Up)',
      metrics: 'min',
      value: 10
    },
    {
      active: true,
      mnemonic: 'SMLW',
      witsCode: '097',
      description: 'Emboladas bajando',
      metrics: 'spm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'TRPM',
      witsCode: '004',
      description: 'Revoluciones/Sumatoria',
      metrics: 'rpm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BROP',
      witsCode: '014',
      description: 'Velocidad Rotaria Barrena',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'WH',
      witsCode: '024',
      description: 'Humedad de Hidrocarburo',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'BH',
      witsCode: '025',
      description: 'Relación Balance',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'CH',
      witsCode: '026',
      description: 'Carácter de Hidrocarburo',
      metrics: '',
      value: 10
    },
    {
      active: true,
      mnemonic: 'GASS',
      witsCode: '035',
      description: 'Gas total (Sensor)',
      metrics: 'ppm',
      value: 10
    },
    {
      active: true,
      mnemonic: 'ANVO',
      witsCode: '020',
      description: 'Volumen Anular',
      metrics: 'm³',
      value: 10
    },
    {
      active: true,
      mnemonic: 'MSE',
      witsCode: '200',
      description: 'Energía Mecánica específica',
      metrics: 'kpsi',
      value: 10
    },
    {
      active: true,
      mnemonic: 'EMBS',
      witsCode: '249',
      description: 'Emboladas en superficie ',
      metrics: 'spm',
      value: 10
    }
  ]
}
