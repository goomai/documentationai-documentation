// Describes this component for search. Optional — leave empty to omit it.
export const description = "an interactive spacing scale that previews each token at its real size"


export const SpacingScale = ({
  tokens = 'spacing-01:2,spacing-02:4,spacing-03:8,spacing-04:12,spacing-05:16,spacing-06:24,spacing-07:32,spacing-08:40,spacing-09:48,spacing-10:64',
  unit = 'px',
  baseFontSize = 16,
}) => {
  const scale = useMemo(() => {
    return String(tokens)
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean)
      .map((entry) => {
        const separator = entry.lastIndexOf(':')
        const name = separator === -1 ? entry : entry.slice(0, separator).trim()
        const rawValue = separator === -1 ? '0' : entry.slice(separator + 1).trim()

        return { name, pixels: Number(rawValue) || 0 }
      })
      .sort((first, second) => first.pixels - second.pixels)
  }, [tokens])

  const [activeName, setActiveName] = useState('')
  const [showRem, setShowRem] = useState(false)
  const [copiedName, setCopiedName] = useState('')
  const copyTimeoutRef = useRef(null)

  const largest = scale.reduce((maximum, item) => Math.max(maximum, item.pixels), 1)
  const root = Number(baseFontSize) || 16

  const format = useCallback(
    (pixels) => {
      if (!showRem) {
        return `${pixels}${unit}`
      }

      const remValue = pixels / root

      return `${Number(remValue.toFixed(4))}rem`
    },
    [root, showRem, unit],
  )

  const copy = useCallback((token) => {
    const finish = () => {
      setCopiedName(token.name)

      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current)
      }

      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedName('')
        copyTimeoutRef.current = null
      }, 1400)
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(token.name).then(finish).catch(finish)
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
    <div className="ss-wrapper">
      <style>{`
        .ss-wrapper {
          width: 100%;
          margin: 24px 0;
          box-sizing: border-box;
        }

        .ss-card {
          padding: 18px 20px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .ss-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 14px;
        }

        .ss-title {
          color: #0f172a;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .ss-toggle {
          display: inline-flex;
          padding: 3px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          background: #f1f5f9;
        }

        .ss-toggle-option {
          padding: 5px 13px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          font-size: 12px;
          font-weight: 650;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .ss-toggle-option.ss-active {
          background: #ffffff;
          color: #0f172a;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.14);
        }

        .ss-row {
          display: grid;
          grid-template-columns: 122px 1fr 82px;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 7px 8px;
          border: 0;
          border-radius: 9px;
          background: transparent;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: background 0.16s ease;
        }

        .ss-row:hover,
        .ss-row.ss-selected {
          background: #f1f5f9;
        }

        .ss-name {
          overflow: hidden;
          color: #475569;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ss-bar-track {
          display: flex;
          align-items: center;
          height: 22px;
        }

        .ss-bar {
          height: 12px;
          min-width: 2px;
          border-radius: 3px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ss-value {
          color: #0f172a;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 12px;
          font-weight: 650;
          text-align: right;
        }

        .ss-footer {
          margin-top: 10px;
          padding-top: 10px;
          border-top: 1px solid #e2e8f0;
          color: #94a3b8;
          font-size: 11px;
          text-align: center;
        }

        [data-theme="dark"] .ss-card,
        .dark .ss-card {
          border-color: #334155;
          background: #1e1e2e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .ss-title,
        .dark .ss-title,
        [data-theme="dark"] .ss-value,
        .dark .ss-value {
          color: #e2e8f0;
        }

        [data-theme="dark"] .ss-toggle,
        .dark .ss-toggle {
          border-color: #334155;
          background: #273449;
        }

        [data-theme="dark"] .ss-toggle-option.ss-active,
        .dark .ss-toggle-option.ss-active {
          background: #475569;
          color: #f8fafc;
        }

        [data-theme="dark"] .ss-row:hover,
        .dark .ss-row:hover,
        [data-theme="dark"] .ss-row.ss-selected,
        .dark .ss-row.ss-selected {
          background: #273449;
        }

        [data-theme="dark"] .ss-name,
        .dark .ss-name {
          color: #94a3b8;
        }

        [data-theme="dark"] .ss-footer,
        .dark .ss-footer {
          border-top-color: #334155;
        }

        @media (prefers-color-scheme: dark) {
          .ss-card:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #1e1e2e;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .ss-title:not(.light *):not([data-theme="light"] *),
          .ss-value:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }

          .ss-toggle:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #273449;
          }

          .ss-toggle-option.ss-active:not(.light *):not([data-theme="light"] *) {
            background: #475569;
            color: #f8fafc;
          }

          .ss-row:hover:not(.light *):not([data-theme="light"] *),
          .ss-row.ss-selected:not(.light *):not([data-theme="light"] *) {
            background: #273449;
          }

          .ss-name:not(.light *):not([data-theme="light"] *) {
            color: #94a3b8;
          }

          .ss-footer:not(.light *):not([data-theme="light"] *) {
            border-top-color: #334155;
          }
        }

        @media (max-width: 520px) {
          .ss-row {
            grid-template-columns: 96px 1fr 70px;
            gap: 8px;
          }
        }
      `}</style>

      <div className="ss-card">
        <div className="ss-header">
          <span className="ss-title">Spacing scale</span>
          <span className="ss-toggle" role="group" aria-label="Value unit">
            <button
              className={showRem ? 'ss-toggle-option' : 'ss-toggle-option ss-active'}
              type="button"
              aria-pressed={!showRem}
              onClick={() => setShowRem(false)}
            >
              {unit}
            </button>
            <button
              className={showRem ? 'ss-toggle-option ss-active' : 'ss-toggle-option'}
              type="button"
              aria-pressed={showRem}
              onClick={() => setShowRem(true)}
            >
              rem
            </button>
          </span>
        </div>

        {scale.map((token) => (
          <button
            key={token.name}
            className={activeName === token.name ? 'ss-row ss-selected' : 'ss-row'}
            type="button"
            aria-label={`Copy token name ${token.name}`}
            onClick={() => {
              setActiveName(token.name)
              copy(token)
            }}
          >
            <span className="ss-name">{token.name}</span>
            <span className="ss-bar-track">
              <span
                className="ss-bar"
                style={{ width: `${Math.max(1, (token.pixels / largest) * 100)}%` }}
              />
            </span>
            <span className="ss-value">
              {copiedName === token.name ? 'Copied' : format(token.pixels)}
            </span>
          </button>
        ))}

        <p className="ss-footer">Click any row to copy its token name.</p>
      </div>
    </div>
  )
}
