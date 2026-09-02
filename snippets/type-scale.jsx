// Describes this component for search. Optional — leave empty to omit it.
export const description = "a type scale previewer with an adjustable ratio and base size"


export const TypeScale = ({
  baseSize = 16,
  ratio = 1.25,
  steps = 6,
  sampleText = 'Design systems scale with their teams',
}) => {
  const stepCount = Math.min(9, Math.max(2, Number(steps) || 6))

  const [base, setBase] = useState(Number(baseSize) || 16)
  const [scaleRatio, setScaleRatio] = useState(Number(ratio) || 1.25)
  const [copiedIndex, setCopiedIndex] = useState(-1)

  const copyTimeoutRef = useRef(null)

  const namedRatios = [
    { label: 'Minor third', value: 1.2 },
    { label: 'Major third', value: 1.25 },
    { label: 'Perfect fourth', value: 1.333 },
    { label: 'Golden', value: 1.618 },
  ]

  const rows = useMemo(() => {
    return Array.from({ length: stepCount }, (unused, index) => {
      const level = stepCount - 1 - index
      const size = base * Math.pow(scaleRatio, level)

      return {
        level,
        name: level === 0 ? 'body' : `step-${level}`,
        size: Number(size.toFixed(2)),
      }
    })
  }, [base, scaleRatio, stepCount])

  const copy = useCallback((row, index) => {
    const finish = () => {
      setCopiedIndex(index)

      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current)
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedIndex(-1)
        copyTimeoutRef.current = null
      }, 1400)
    }

    const declaration = `font-size: ${row.size}px;`

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(declaration).then(finish).catch(finish)
      return
    }

    finish()
  }, [])

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="ts-wrapper">
      <style>{`
        .ts-wrapper {
          width: 100%;
          margin: 24px 0;
          box-sizing: border-box;
        }

        .ts-card {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .ts-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
          padding: 18px 20px;
          border-bottom: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        .ts-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .ts-field-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
        }

        .ts-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.9px;
          text-transform: uppercase;
        }

        .ts-readout {
          color: #0f172a;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 12px;
          font-weight: 700;
        }

        .ts-range {
          width: 100%;
          height: 4px;
          margin: 6px 0;
          appearance: none;
          border-radius: 999px;
          background: #cbd5e1;
          cursor: pointer;
        }

        .ts-range::-webkit-slider-thumb {
          width: 16px;
          height: 16px;
          appearance: none;
          border: 2px solid #ffffff;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 1px 5px rgba(15, 23, 42, 0.28);
          cursor: pointer;
        }

        .ts-range::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border: 2px solid #ffffff;
          border-radius: 50%;
          background: #6366f1;
          box-shadow: 0 1px 5px rgba(15, 23, 42, 0.28);
          cursor: pointer;
        }

        .ts-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .ts-preset {
          padding: 5px 11px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          background: #ffffff;
          color: #64748b;
          cursor: pointer;
          font-size: 11.5px;
          font-weight: 650;
          transition: border-color 0.16s ease, background 0.16s ease, color 0.16s ease;
        }

        .ts-preset:hover {
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .ts-preset.ts-active {
          border-color: #6366f1;
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
        }

        .ts-rows {
          padding: 8px 12px 14px;
        }

        .ts-row {
          display: flex;
          align-items: baseline;
          gap: 14px;
          width: 100%;
          padding: 9px 10px;
          overflow: hidden;
          border: 0;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: background 0.16s ease;
        }

        .ts-row:hover {
          background: #f8fafc;
        }

        .ts-meta {
          flex: 0 0 96px;
          color: #94a3b8;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11px;
          line-height: 1.4;
        }

        .ts-meta-name {
          display: block;
          color: #64748b;
          font-weight: 650;
        }

        .ts-sample {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          color: #0f172a;
          font-weight: 600;
          line-height: 1.2;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: font-size 0.2s ease;
        }

        .ts-footer {
          padding: 0 20px 15px;
          color: #94a3b8;
          font-size: 11px;
          text-align: center;
        }

        [data-theme="dark"] .ts-card,
        .dark .ts-card {
          border-color: #334155;
          background: #1e1e2e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .ts-controls,
        .dark .ts-controls {
          border-bottom-color: #334155;
          background: #273449;
        }

        [data-theme="dark"] .ts-readout,
        .dark .ts-readout,
        [data-theme="dark"] .ts-sample,
        .dark .ts-sample {
          color: #e2e8f0;
        }

        [data-theme="dark"] .ts-range,
        .dark .ts-range {
          background: #475569;
        }

        [data-theme="dark"] .ts-range::-webkit-slider-thumb,
        .dark .ts-range::-webkit-slider-thumb {
          border-color: #1e1e2e;
          background: #818cf8;
        }

        [data-theme="dark"] .ts-range::-moz-range-thumb,
        .dark .ts-range::-moz-range-thumb {
          border-color: #1e1e2e;
          background: #818cf8;
        }

        [data-theme="dark"] .ts-preset,
        .dark .ts-preset {
          border-color: #475569;
          background: #1e1e2e;
          color: #94a3b8;
        }

        [data-theme="dark"] .ts-preset:hover,
        .dark .ts-preset:hover {
          border-color: #64748b;
          color: #f8fafc;
        }

        [data-theme="dark"] .ts-preset.ts-active,
        .dark .ts-preset.ts-active {
          border-color: #818cf8;
          background: rgba(129, 140, 248, 0.16);
          color: #a5b4fc;
        }

        [data-theme="dark"] .ts-row:hover,
        .dark .ts-row:hover {
          background: #273449;
        }

        @media (prefers-color-scheme: dark) {
          .ts-card:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #1e1e2e;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .ts-controls:not(.light *):not([data-theme="light"] *) {
            border-bottom-color: #334155;
            background: #273449;
          }

          .ts-readout:not(.light *):not([data-theme="light"] *),
          .ts-sample:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }

          .ts-range:not(.light *):not([data-theme="light"] *) {
            background: #475569;
          }

          .ts-preset:not(.light *):not([data-theme="light"] *) {
            border-color: #475569;
            background: #1e1e2e;
            color: #94a3b8;
          }

          .ts-preset.ts-active:not(.light *):not([data-theme="light"] *) {
            border-color: #818cf8;
            background: rgba(129, 140, 248, 0.16);
            color: #a5b4fc;
          }

          .ts-row:hover:not(.light *):not([data-theme="light"] *) {
            background: #273449;
          }
        }

        @media (max-width: 520px) {
          .ts-meta {
            flex-basis: 74px;
          }
        }
      `}</style>

      <div className="ts-card">
        <div className="ts-controls">
          <div className="ts-field">
            <span className="ts-field-head">
              <span className="ts-label">Base size</span>
              <span className="ts-readout">{base}px</span>
            </span>
            <input
              className="ts-range"
              type="range"
              min="12"
              max="24"
              step="1"
              value={base}
              aria-label="Base font size in pixels"
              onChange={(event) => setBase(Number(event.target.value))}
            />
          </div>

          <div className="ts-field">
            <span className="ts-field-head">
              <span className="ts-label">Ratio</span>
              <span className="ts-readout">{scaleRatio.toFixed(3)}</span>
            </span>
            <div className="ts-presets">
              {namedRatios.map((preset) => (
                <button
                  key={preset.label}
                  className={
                    Math.abs(scaleRatio - preset.value) < 0.001
                      ? 'ts-preset ts-active'
                      : 'ts-preset'
                  }
                  type="button"
                  onClick={() => setScaleRatio(preset.value)}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="ts-rows">
          {rows.map((row, index) => (
            <button
              key={row.name}
              className="ts-row"
              type="button"
              aria-label={`Copy font size for ${row.name}`}
              onClick={() => copy(row, index)}
            >
              <span className="ts-meta">
                <span className="ts-meta-name">{row.name}</span>
                {copiedIndex === index ? 'Copied' : `${row.size}px`}
              </span>
              <span className="ts-sample" style={{ fontSize: `${row.size}px` }}>
                {sampleText}
              </span>
            </button>
          ))}
        </div>

        <p className="ts-footer">Click a row to copy its font-size declaration.</p>
      </div>
    </div>
  )
}
