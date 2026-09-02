// Describes this component for search. Optional — leave empty to omit it.
export const description = "a tickable checklist that tracks how much of a task the reader has completed"


export const Checklist = ({
  title = 'Before you publish',
  items = 'Rewrite every sample page,List each page in documentation.json,Point openapi.yaml at your real API,Ask a teammate to read the site end to end',
}) => {
  const entries = useMemo(() => {
    return String(items)
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean)
  }, [items])

  const [checked, setChecked] = useState([])

  const toggle = useCallback((label) => {
    setChecked((current) => (
      current.includes(label)
        ? current.filter((item) => item !== label)
        : current.concat(label)
    ))
  }, [])

  const clear = useCallback(() => {
    setChecked([])
  }, [])

  const total = entries.length
  const done = entries.filter((entry) => checked.includes(entry)).length
  const percent = total === 0 ? 0 : Math.round((done / total) * 100)
  const isComplete = total > 0 && done === total

  return (
    <div className="ct-wrapper">
      <style>{`
        @keyframes ct-check-in {
          from { transform: scale(0.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .ct-wrapper {
          width: 100%;
          margin: 24px 0;
          box-sizing: border-box;
        }

        .ct-card {
          overflow: hidden;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          background: #ffffff;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .ct-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 18px 20px 12px;
        }

        .ct-title {
          color: #0f172a;
          font-size: 15px;
          font-weight: 700;
        }

        .ct-count {
          padding: 4px 10px;
          border-radius: 999px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 12px;
          font-weight: 650;
          white-space: nowrap;
        }

        .ct-count.ct-complete {
          background: #dcfce7;
          color: #15803d;
        }

        .ct-progress {
          height: 5px;
          margin: 0 20px;
          overflow: hidden;
          border-radius: 999px;
          background: #e2e8f0;
        }

        .ct-progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #6366f1, #a855f7);
          transition: width 0.35s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
        }

        .ct-progress-fill.ct-complete {
          background: linear-gradient(90deg, #22c55e, #16a34a);
        }

        .ct-list {
          margin: 12px 0 0;
          padding: 0 12px 6px;
          list-style: none;
        }

        .ct-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          width: 100%;
          padding: 11px 10px;
          border: 0;
          border-radius: 10px;
          background: transparent;
          cursor: pointer;
          font: inherit;
          text-align: left;
          transition: background 0.16s ease;
        }

        .ct-item:hover {
          background: #f8fafc;
        }

        .ct-box {
          display: grid;
          flex: 0 0 auto;
          place-items: center;
          width: 20px;
          height: 20px;
          margin-top: 1px;
          border: 2px solid #cbd5e1;
          border-radius: 6px;
          color: #ffffff;
          font-size: 12px;
          font-weight: 800;
          line-height: 1;
          transition: background 0.18s ease, border-color 0.18s ease;
        }

        .ct-box.ct-on {
          border-color: #6366f1;
          background: #6366f1;
          animation: ct-check-in 0.2s ease;
        }

        .ct-label {
          color: #334155;
          font-size: 14px;
          line-height: 1.5;
          transition: color 0.18s ease;
        }

        .ct-label.ct-done {
          color: #94a3b8;
          text-decoration: line-through;
        }

        .ct-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          min-height: 22px;
          padding: 4px 20px 16px;
        }

        .ct-status {
          color: #16a34a;
          font-size: 12px;
          font-weight: 650;
        }

        .ct-reset {
          padding: 5px 12px;
          border: 0;
          border-radius: 999px;
          background: transparent;
          color: #64748b;
          cursor: pointer;
          font-size: 12px;
          font-weight: 650;
          transition: background 0.18s ease, color 0.18s ease;
        }

        .ct-reset:hover {
          background: rgba(99, 102, 241, 0.1);
          color: #4f46e5;
        }

        [data-theme="dark"] .ct-card,
        .dark .ct-card {
          border-color: #334155;
          background: #1e1e2e;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="dark"] .ct-title,
        .dark .ct-title {
          color: #e2e8f0;
        }

        [data-theme="dark"] .ct-count,
        .dark .ct-count {
          background: #273449;
          color: #94a3b8;
        }

        [data-theme="dark"] .ct-count.ct-complete,
        .dark .ct-count.ct-complete {
          background: rgba(34, 197, 94, 0.18);
          color: #4ade80;
        }

        [data-theme="dark"] .ct-progress,
        .dark .ct-progress {
          background: #334155;
        }

        [data-theme="dark"] .ct-item:hover,
        .dark .ct-item:hover {
          background: #273449;
        }

        [data-theme="dark"] .ct-box,
        .dark .ct-box {
          border-color: #475569;
        }

        [data-theme="dark"] .ct-box.ct-on,
        .dark .ct-box.ct-on {
          border-color: #818cf8;
          background: #818cf8;
          color: #1e1e2e;
        }

        [data-theme="dark"] .ct-label,
        .dark .ct-label {
          color: #cbd5e1;
        }

        [data-theme="dark"] .ct-label.ct-done,
        .dark .ct-label.ct-done {
          color: #64748b;
        }

        [data-theme="dark"] .ct-status,
        .dark .ct-status {
          color: #4ade80;
        }

        @media (prefers-color-scheme: dark) {
          .ct-card:not(.light *):not([data-theme="light"] *) {
            border-color: #334155;
            background: #1e1e2e;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }

          .ct-title:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }

          .ct-count:not(.light *):not([data-theme="light"] *) {
            background: #273449;
            color: #94a3b8;
          }

          .ct-progress:not(.light *):not([data-theme="light"] *) {
            background: #334155;
          }

          .ct-item:hover:not(.light *):not([data-theme="light"] *) {
            background: #273449;
          }

          .ct-box:not(.light *):not([data-theme="light"] *) {
            border-color: #475569;
          }

          .ct-box.ct-on:not(.light *):not([data-theme="light"] *) {
            border-color: #818cf8;
            background: #818cf8;
            color: #1e1e2e;
          }

          .ct-label:not(.light *):not([data-theme="light"] *) {
            color: #cbd5e1;
          }

          .ct-label.ct-done:not(.light *):not([data-theme="light"] *) {
            color: #64748b;
          }

          .ct-status:not(.light *):not([data-theme="light"] *) {
            color: #4ade80;
          }
        }
      `}</style>

      <div className="ct-card">
        <div className="ct-header">
          <span className="ct-title">{title}</span>
          <span className={isComplete ? 'ct-count ct-complete' : 'ct-count'}>
            {done} of {total} done
          </span>
        </div>

        <div className="ct-progress">
          <div
            className={isComplete ? 'ct-progress-fill ct-complete' : 'ct-progress-fill'}
            style={{ width: `${percent}%` }}
            role="progressbar"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Checklist progress"
          />
        </div>

        <ul className="ct-list">
          {entries.map((entry) => {
            const isChecked = checked.includes(entry)

            return (
              <li key={entry}>
                <button
                  className="ct-item"
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => toggle(entry)}
                >
                  <span className={isChecked ? 'ct-box ct-on' : 'ct-box'} aria-hidden="true">
                    {isChecked ? '✓' : ''}
                  </span>
                  <span className={isChecked ? 'ct-label ct-done' : 'ct-label'}>
                    {entry}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>

        <div className="ct-footer">
          <span className="ct-status" aria-live="polite">
            {isComplete ? 'All done — you are ready to publish.' : ''}
          </span>
          {done > 0 && (
            <button className="ct-reset" type="button" onClick={clear}>
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
