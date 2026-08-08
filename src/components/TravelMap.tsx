import { useState, useMemo } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
  ZoomableGroup,
} from 'react-simple-maps'
import type { TravelCity } from '../data/about'
import styles from './TravelMap.module.css'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

interface TravelMapProps {
  cities: TravelCity[]
}

// Normalize lat/lng to [longitude, latitude] (react-simple-maps uses [x, y])
const toCoord = (lng: number, lat: number): [number, number] => [lng, lat]

// Predefined real-world coordinates
const CITY_COORDS: Record<string, [number, number]> = {
  // China
  Changsha: [112.9388, 28.2282],
  Shenzhen: [114.0579, 22.5431],
  Guangzhou: [113.2644, 23.1291],
  Beijing: [116.4074, 39.9042],
  Shanghai: [121.4737, 31.2304],
  Chengdu: [104.0665, 30.5728],
  Hangzhou: [120.1551, 30.2741],
  Xiamen: [118.0894, 24.4798],
  'Hong Kong': [114.1694, 22.3193],
  Macau: [113.5439, 22.1987],
  "Xi'an": [108.9402, 34.3416],
  Chongqing: [106.5516, 29.563],
  Suzhou: [120.5853, 31.2990],
  Nanjing: [118.7969, 32.0603],
  Qingdao: [120.3826, 36.0671],
  Dalian: [121.6147, 38.9140],
  Kunming: [102.8329, 24.8801],
  Lhasa: [91.1145, 29.6456],
  Taipei: [121.5654, 25.0330],
  // International
  Tokyo: [139.6917, 35.6895],
  Seoul: [126.978, 37.5665],
  Bangkok: [100.5018, 13.7563],
  Singapore: [103.8198, 1.3521],
  Paris: [2.3522, 48.8566],
  London: [-0.1276, 51.5074],
  'New York': [-74.006, 40.7128],
}

function TravelMap({ cities }: TravelMapProps) {
  const [hover, setHover] = useState<string | null>(null)

  const markers = useMemo(() => {
    return cities
      .map((c) => {
        const coord = CITY_COORDS[c.name]
        if (!coord) return null
        return {
          city: c,
          coord: coord as [number, number],
          isIntl: !!c.label,
        }
      })
      .filter(Boolean) as Array<{ city: TravelCity; coord: [number, number]; isIntl: boolean }>
  }, [cities])

  // Build connection lines from Beijing as a hub to major cities
  const lines = useMemo(() => {
    const hub = CITY_COORDS['Beijing']
    if (!hub) return []
    const domestic = markers.filter((m) => !m.isIntl)
    return domestic.slice(1).map((m) => ({
      from: hub,
      to: m.coord,
      cityName: m.city.name,
    }))
  }, [markers])

  const intlMarkers = markers.filter((m) => m.isIntl)
  const cnMarkers = markers.filter((m) => !m.isIntl)

  return (
    <div className={styles.mapWrap}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 130,
          center: [100, 30],
        }}
        style={{ width: '100%', height: 'auto' }}
      >
        <ZoomableGroup center={[100, 30]} zoom={1} maxZoom={1.2} minZoom={1}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e8ecdf"
                  stroke="#c5ccb7"
                  strokeWidth={0.3}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#d4dcc3' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Connection lines from Beijing hub */}
          {lines.map((line, i) => (
            <Line
              key={`line-${i}`}
              from={line.from as [number, number]}
              to={line.to as [number, number]}
              stroke="#9ab89a"
              strokeWidth={0.5}
              strokeLinecap="round"
              strokeDasharray="2,3"
              style={{
                default: { opacity: 0.4 },
                hover: { opacity: 0.9 },
                pressed: { opacity: 0.9 },
              }}
            />
          ))}

          {/* China markers */}
          {cnMarkers.map((m) => (
            <g
              key={`cn-${m.city.name}`}
              onMouseEnter={() => setHover(m.city.name)}
              onMouseLeave={() => setHover(null)}
            >
              <Marker coordinates={m.coord}>
                <circle
                  r={hover === m.city.name ? 4 : 3}
                  fill="#4a8a4f"
                  stroke="#fff"
                  strokeWidth={1}
                  style={{
                    default: { transition: 'all 0.2s' },
                    hover: { transition: 'all 0.2s' },
                    pressed: { transition: 'all 0.2s' },
                  }}
                />
                <circle
                  r={8}
                  fill="#4a8a4f"
                  opacity={0.15}
                  style={{
                    default: {},
                    hover: {},
                    pressed: {},
                  }}
                >
                  <animate
                    attributeName="r"
                    values="5;12;5"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.3;0;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  textAnchor="middle"
                  y={-7}
                  className={styles.cityLabel}
                  style={{
                    opacity: hover === m.city.name ? 1 : 0.75,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {m.city.name}
                </text>
              </Marker>
            </g>
          ))}

          {/* International markers */}
          {intlMarkers.map((m) => (
            <g
              key={`intl-${m.city.name}`}
              onMouseEnter={() => setHover(m.city.label ?? m.city.name)}
              onMouseLeave={() => setHover(null)}
            >
              <Marker coordinates={m.coord}>
                <circle
                  r={hover === (m.city.label ?? m.city.name) ? 4.5 : 3.2}
                  fill="#d4873c"
                  stroke="#fff"
                  strokeWidth={1}
                  style={{
                    default: { transition: 'all 0.2s' },
                    hover: { transition: 'all 0.2s' },
                    pressed: { transition: 'all 0.2s' },
                  }}
                />
                <circle
                  r={9}
                  fill="#d4873c"
                  opacity={0.12}
                  style={{
                    default: {},
                    hover: {},
                    pressed: {},
                  }}
                >
                  <animate
                    attributeName="r"
                    values="6;13;6"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.25;0;0.25"
                    dur="3.5s"
                    repeatCount="indefinite"
                  />
                </circle>
                <text
                  textAnchor="middle"
                  y={-7}
                  className={styles.cityLabelIntl}
                  style={{
                    opacity: hover === (m.city.label ?? m.city.name) ? 1 : 0.7,
                    transition: 'opacity 0.2s',
                  }}
                >
                  {m.city.label ?? m.city.name}
                </text>
              </Marker>
            </g>
          ))}
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip / hover label */}
      {hover && (
        <div className={styles.hoverLabel}>{hover}</div>
      )}

      {/* Legend */}
      <div className={styles.legend}>
        <span className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.legendDotCn}`}></span>
          Cities lived / visited
        </span>
        <span className={styles.legendItem}>
          <span className={`${styles.legendDot} ${styles.legendDotIntl}`}></span>
          International
        </span>
        <span className={styles.legendItem}>
          <span className={styles.legendLine}></span>
          Beijing hub routes
        </span>
      </div>
    </div>
  )
}

export default TravelMap
