export const description = "An interactive React color picker component with a live preview swatch, hex code input with validation, eight preset color swatches, and a native color picker for custom selection. Includes full dark mode support via data-theme attribute, .dark class, and prefers-color-scheme media query."

export const Colorpicker = () => {
  const [color, setColor] = useState('#6366f1')

  const presets = [
    '#6366f1', '#8b5cf6', '#ec4899', '#f43f5e',
    '#f97316', '#10b981', '#0ea5e9', '#64748b',
  ]

  const isValidHex = (v) => /^#[0-9a-fA-F]{6}$/.test(v)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <style>{`
        .colorpicker-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 28px 36px;
          border-radius: 16px;
          border: 1px solid #e8e8ec;
          background: #fafafa;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .colorpicker-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #94a3b8;
          transition: color 0.2s ease;
        }
        .colorpicker-swatch {
          width: 100%;
          min-width: 200px;
          height: 80px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.06);
          transition: background 0.2s ease;
        }
        .colorpicker-input {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          background: #fff;
          color: #1e293b;
          font-family: ui-monospace, monospace;
          font-size: 14px;
          text-align: center;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
        }
        .colorpicker-input:focus {
          border-color: #6366f1;
        }
        .colorpicker-presets {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        .colorpicker-preset {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          cursor: pointer;
          transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .colorpicker-preset:hover {
          transform: scale(1.15);
        }
        .colorpicker-preset-active {
          border-color: #fff;
          box-shadow: 0 0 0 2px currentColor, 0 2px 6px rgba(0,0,0,0.15);
        }
        .colorpicker-custom {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid #e2e8f0;
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          background: conic-gradient(red, yellow, lime, cyan, blue, magenta, red);
          transition: transform 0.15s ease, border-color 0.2s ease;
        }
        .colorpicker-custom:hover {
          transform: scale(1.15);
          border-color: #6366f1;
        }
        .colorpicker-custom input {
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
          border: none;
          padding: 0;
        }
        .colorpicker-divider {
          width: 100%;
          height: 1px;
          background: #e8e8ec;
          margin: 2px 0;
          transition: background 0.2s ease;
        }

        [data-theme="dark"] .colorpicker-card,
        .dark .colorpicker-card {
          background: #1e1e2e;
          border-color: #2e2e40;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2);
        }
        [data-theme="dark"] .colorpicker-label,
        .dark .colorpicker-label {
          color: #64748b;
        }
        [data-theme="dark"] .colorpicker-input,
        .dark .colorpicker-input {
          background: #1e1e2e;
          border-color: #2e2e40;
          color: #e2e8f0;
        }
        [data-theme="dark"] .colorpicker-input:focus,
        .dark .colorpicker-input:focus {
          border-color: #818cf8;
        }
        [data-theme="dark"] .colorpicker-custom,
        .dark .colorpicker-custom {
          border-color: #2e2e40;
        }
        [data-theme="dark"] .colorpicker-divider,
        .dark .colorpicker-divider {
          background: #2e2e40;
        }
        @media (prefers-color-scheme: dark) {
          .colorpicker-card:not(.light *):not([data-theme="light"] *) {
            background: #1e1e2e;
            border-color: #2e2e40;
            box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2);
          }
          .colorpicker-label:not(.light *):not([data-theme="light"] *) {
            color: #64748b;
          }
          .colorpicker-input:not(.light *):not([data-theme="light"] *) {
            background: #1e1e2e;
            border-color: #2e2e40;
            color: #e2e8f0;
          }
          .colorpicker-input:not(.light *):not([data-theme="light"] *):focus {
            border-color: #818cf8;
          }
          .colorpicker-custom:not(.light *):not([data-theme="light"] *) {
            border-color: #2e2e40;
          }
          .colorpicker-divider:not(.light *):not([data-theme="light"] *) {
            background: #2e2e40;
          }
        }
      `}</style>
      <div className="colorpicker-card">
        <span className="colorpicker-label">Color Picker</span>
        <div className="colorpicker-swatch" style={{ background: color }} />
        <input
          className="colorpicker-input"
          type="text"
          value={color}
          onChange={(e) => {
            const v = e.target.value
            if (isValidHex(v)) setColor(v)
            else if (v.length <= 7) setColor(v)
          }}
          onBlur={(e) => {
            if (!isValidHex(e.target.value)) setColor('#6366f1')
          }}
          maxLength={7}
        />
        <div className="colorpicker-divider" />
        <div className="colorpicker-presets">
          {presets.map((c) => (
            <div
              key={c}
              className={`colorpicker-preset ${c.toLowerCase() === color.toLowerCase() ? 'colorpicker-preset-active' : ''}`}
              style={{ background: c, color: c }}
              onClick={() => setColor(c)}
            />
          ))}
          <label className="colorpicker-custom">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </label>
        </div>
      </div>
    </div>
  )
}
