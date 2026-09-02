// Describes this component for search. Optional — leave empty to omit it.
export const description = "a WCAG contrast checker that scores a foreground and background colour pair live"


export const ContrastChecker = ({
  foreground = '#161616',
  background = '#f4f4f4',
  sampleText = 'The quick brown fox jumps over the lazy dog',
}) => {
  const [textColor, setTextColor] = useState(foreground)
  const [surfaceColor, setSurfaceColor] = useState(background)

  const toLinear = useCallback((hex) => {
    const normalized = String(hex).replace('#', '').trim()

    if (normalized.length !== 3 && normalized.length !== 6) {
      return null
    }

    const expanded = normalized.length === 3
      ? normalized.split('').map((character) => character + character).join('')
      : normalized

    if (!/^[0-9a-f]{6}$/i.test(expanded)) {
      return null
    }

    const channels = [0, 2, 4].map((offset) => {
      const channel = parseInt(expanded.slice(offset, offset + 2), 16) / 255

      return channel <= 0.03928
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4)
    })

    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
  }, [])

  const ratio = useMemo(() => {
    const textLuminance = toLinear(textColor)
    const surfaceLuminance = toLinear(surfaceColor)

    if (textLuminance === null || surfaceLuminance === null) {
      return null
    }

    const lighter = Math.max(textLuminance, surfaceLuminance)
    const darker = Math.min(textLuminance, surfaceLuminance)

    return (lighter + 0.05) / (darker + 0.05)
  }, [surfaceColor, textColor, toLinear])

  const grades = useMemo(() => {
    if (ratio === null) {
      return []
    }

    return [
      { label: 'AA body', threshold: 4.5 },
      { label: 'AA large', threshold: 3 },
      { label: 'AAA body', threshold: 7 },
      { label: 'AAA large', threshold: 4.5 },
    ].map((grade) => ({ ...grade, passes: ratio >= grade.threshold }))
  }, [ratio])

  const swap = useCallback(() => {
    setTextColor(surfaceColor)
    setSurfaceColor(textColor)
  }, [surfaceColor, textColor])

  const displayRatio = ratio === null ? '—' : `${ratio.toFixed(2)}:1`
  const passCount = grades.filter((grade) => grade.passes).length

  return (
    <div className="cw-wrapper">
      <style>{`
        .cw-wrapper {
          width: 100%;
          margin: 24px 0;
          box-sizing: border-box;
        }

        .cw-card {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.07);
        }

        .cw-preview {
          display: grid;
          place-items: center;
          gap: 10px;
          min-height: 150px;
          padding: 28px 24px;
          text-align: center;
          transition: background-color 0.2s ease, color 0.2s ease;
        }

        .cw-ratio {
          font-size: 30px;
          font-weight: 750;
          line-height: 1;
        }

        .cw-sample {
          max-width: 460px;
          font-size: 15px;
          line-height: 1.55;
        }

        .cw-controls {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
          gap: 14px;
          padding: 18px 20px;
          border-top: 1px solid #e2e8f0;
        }

        .cw-field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .cw-label {
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.9px;
          text-transform: uppercase;
        }

        .cw-input-row {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 6px 5px 5px;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          background: #f8fafc;
        }

        .cw-color {
          width: 34px;
          height: 30px;
          padding: 0;
          border: 0;
          border-radius: 7px;
          background: none;
          cursor: pointer;
        }

        .cw-text {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #0f172a;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 13px;
          text-transform: uppercase;
        }

        .cw-grades {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding: 0 20px 18px;
        }

        .cw-grade {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 11px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 650;
        }

        .cw-pass {
          background: #dcfce7;
          color: #15803d;
        }

        .cw-fail {
          background: #fee2e2;
          color: #b91c1c;
        }

        .cw-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 0 20px 18px;
        }

        .cw-summary {
          color: #64748b;
          font-size: 12px;
        }

        .cw-swap {
          padding: 7px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          background: #ffffff;
          color: #475569;
          cursor: pointer;
          font-size: 12px;
          font-weight: 650;
          transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;
        }

        .cw-swap:hover {
          border-color: #cbd5e1;
          background: #f1f5f9;
          color: #0f172a;
        }

        [data-theme="dark"] .cw-card,
        .dark .cw-card {
          border-color: #334155;
          background: #1e1e2e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .cw-controls,
        .dark .cw-controls {
          border-top-color: #334155;
        }

        [data-theme="dark"] .cw-input-row,
        .dark .cw-input-row {
          border-color: #334155;
          background: #273449;
        }

        [data-theme="dark"] .cw-text,
        .dark .cw-text {
          color: #e2e8f0;
        }

        [data-theme="dark"] .cw-swap,
        .dark .cw-swap {
          border-color: #334155;
          background: #273449;
          color: #cbd5e1;
        }

        [data-theme="dark"] .cw-swap:hover,
        .dark .cw-swap:hover {
          border-color: #475569;
          background: #334155;
          color: #f8fafc;
        }

        [data-theme="dark"] .cw-pass,
        .dark .cw-pass {
          background: rgba(34, 197, 94, 0.18);
          color: #4ade80;
        }

        [data-theme="dark"] .cw-fail,
        .dark .cw-fail {
          background: rgba(239, 68, 68, 0.18);
          color: #f87171;
        }

        @media (prefers-color-scheme: dark) {
          .cw-card:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #1e1e2e;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .cw-controls:not(.light *):not([data-theme="light"] *) {
            border-top-color: #334155;
          }

          .cw-input-row:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #273449;
          }

          .cw-text:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }

          .cw-swap:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #273449;
            color: #cbd5e1;
          }

          .cw-pass:not(.light *):not([data-theme="light"] *) {
            background: rgba(34, 197, 94, 0.18);
            color: #4ade80;
          }

          .cw-fail:not(.light *):not([data-theme="light"] *) {
            background: rgba(239, 68, 68, 0.18);
            color: #f87171;
          }
        }
      `}</style>

      <div className="cw-card">
        <div
          className="cw-preview"
          style={{ background: surfaceColor, color: textColor }}
        >
          <span className="cw-ratio">{displayRatio}</span>
          <span className="cw-sample">{sampleText}</span>
        </div>

        <div className="cw-controls">
          <label className="cw-field">
            <span className="cw-label">Text</span>
            <span className="cw-input-row">
              <input
                className="cw-color"
                type="color"
                value={/^#[0-9a-f]{6}$/i.test(textColor) ? textColor : '#000000'}
                aria-label="Pick text colour"
                onChange={(event) => setTextColor(event.target.value)}
              />
              <input
                className="cw-text"
                type="text"
                value={textColor}
                spellCheck="false"
                aria-label="Text colour hex value"
                onChange={(event) => setTextColor(event.target.value)}
              />
            </span>
          </label>

          <label className="cw-field">
            <span className="cw-label">Background</span>
            <span className="cw-input-row">
              <input
                className="cw-color"
                type="color"
                value={/^#[0-9a-f]{6}$/i.test(surfaceColor) ? surfaceColor : '#ffffff'}
                aria-label="Pick background colour"
                onChange={(event) => setSurfaceColor(event.target.value)}
              />
              <input
                className="cw-text"
                type="text"
                value={surfaceColor}
                spellCheck="false"
                aria-label="Background colour hex value"
                onChange={(event) => setSurfaceColor(event.target.value)}
              />
            </span>
          </label>
        </div>

        <div className="cw-grades">
          {grades.map((grade) => (
            <span
              key={grade.label}
              className={grade.passes ? 'cw-grade cw-pass' : 'cw-grade cw-fail'}
            >
              {grade.passes ? '✓' : '✕'} {grade.label}
            </span>
          ))}
        </div>

        <div className="cw-footer">
          <span className="cw-summary" aria-live="polite">
            {ratio === null
              ? 'Enter two valid hex colours to score the pair.'
              : `Passes ${passCount} of ${grades.length} WCAG levels.`}
          </span>
          <button className="cw-swap" type="button" onClick={swap}>
            Swap colours
          </button>
        </div>
      </div>
    </div>
  )
}
