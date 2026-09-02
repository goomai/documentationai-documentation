// Describes this component for search. Optional — leave empty to omit it.
export const description = "an interactive colour palette where each swatch copies its hex value on click"


export const ColorPalette = ({
  title = 'Palette',
  colors = 'Blue 60:#0f62fe,Blue 40:#78a9ff,Gray 100:#161616,Gray 60:#6f6f6f,Gray 10:#f4f4f4,Green 50:#24a148,Red 60:#da1e28,Yellow 30:#f1c21b',
  columns = 4,
}) => {
  const swatches = useMemo(() => {
    return String(colors)
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const separator = entry.lastIndexOf(':')
        const name = separator === -1 ? entry : entry.slice(0, separator).trim()
        const value = separator === -1 ? entry : entry.slice(separator + 1).trim()

        return { name, value }
      })
  }, [colors])

  const [copiedValue, setCopiedValue] = useState('')
  const copyTimeoutRef = useRef(null)

  const readableColumns = Math.min(6, Math.max(1, Number(columns) || 4))

  const luminance = useCallback((hex) => {
    const normalized = hex.replace('#', '')

    if (normalized.length !== 3 && normalized.length !== 6) {
      return 1
    }

    const expanded = normalized.length === 3
      ? normalized.split('').map((character) => character + character).join('')
      : normalized

    const channels = [0, 2, 4].map((offset) => {
      const channel = parseInt(expanded.slice(offset, offset + 2), 16) / 255

      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
  }, [])

  const copy = useCallback((value) => {
    const finish = () => {
      setCopiedValue(value)

      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current)
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedValue('')
        copyTimeoutRef.current = null
      }, 1400)
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(finish).catch(finish)
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
    <div className="cp-wrapper">
      <style>{`
        .cp-wrapper {
          width: 100%;
          margin: 24px 0;
          box-sizing: border-box;
        }

        .cp-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .cp-title {
          color: #0f172a;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }

        .cp-hint {
          color: #94a3b8;
          font-size: 11px;
        }

        .cp-grid {
          display: grid;
          gap: 10px;
        }

        .cp-swatch {
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
        }

        .cp-swatch:hover {
          transform: translateY(-3px);
          border-color: #cbd5e1;
          box-shadow: 0 10px 22px rgba(15, 23, 42, 0.12);
        }

        .cp-swatch:active {
          transform: translateY(-1px);
        }

        .cp-chip {
          position: relative;
          display: grid;
          place-items: center;
          height: 76px;
        }

        .cp-copied {
          padding: 4px 10px;
          border-radius: 999px;
          background: rgba(15, 23, 42, 0.62);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.4px;
        }

        .cp-copied.cp-on-dark {
          background: rgba(255, 255, 255, 0.82);
          color: #0f172a;
        }

        .cp-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 10px 12px 12px;
        }

        .cp-name {
          color: #0f172a;
          font-size: 13px;
          font-weight: 650;
        }

        .cp-value {
          color: #64748b;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 11.5px;
          text-transform: uppercase;
        }

        [data-theme="dark"] .cp-title,
        .dark .cp-title,
        [data-theme="dark"] .cp-name,
        .dark .cp-name {
          color: #e2e8f0;
        }

        [data-theme="dark"] .cp-swatch,
        .dark .cp-swatch {
          border-color: #334155;
          background: #1e1e2e;
        }

        [data-theme="dark"] .cp-swatch:hover,
        .dark .cp-swatch:hover {
          border-color: #475569;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.35);
        }

        [data-theme="dark"] .cp-value,
        .dark .cp-value {
          color: #94a3b8;
        }

        @media (prefers-color-scheme: dark) {
          .cp-title:not(.light *):not([data-theme="light"] *),
          .cp-name:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }

          .cp-swatch:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #1e1e2e;
          }

          .cp-value:not(.light *):not([data-theme="light"] *) {
            color: #94a3b8;
          }
        }

        @media (max-width: 480px) {
          .cp-chip {
            height: 60px;
          }
        }
      `}</style>

      <div className="cp-heading">
        <span className="cp-title">{title}</span>
        <span className="cp-hint">Click a swatch to copy its value</span>
      </div>

      <div
        className="cp-grid"
        style={{ gridTemplateColumns: `repeat(auto-fit, minmax(${Math.round(600 / readableColumns)}px, 1fr))` }}
      >
        {swatches.map((swatch) => (
          <button
            key={swatch.name + swatch.value}
            className="cp-swatch"
            type="button"
            aria-label={`Copy ${swatch.name}, ${swatch.value}`}
            onClick={() => copy(swatch.value)}
          >
            <span className="cp-chip" style={{ background: swatch.value }}>
              {copiedValue === swatch.value && (
                <span className={luminance(swatch.value) < 0.4 ? 'cp-copied cp-on-dark' : 'cp-copied'}>
                  Copied
                </span>
              )}
            </span>
            <span className="cp-meta">
              <span className="cp-name">{swatch.name}</span>
              <span className="cp-value">{swatch.value}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
