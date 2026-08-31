export const Counter = ({}) => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <style>{`
        @keyframes counter-pop {
          0% { transform: scale(1); }
          40% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .counter-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 28px 36px;
          border-radius: 16px;
          border: 1px solid #e8e8ec;
          background: #fafafa;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03);
          transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .counter-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #94a3b8;
          transition: color 0.2s ease;
        }
        .counter-value {
          font-size: 32px;
          font-weight: 700;
          color: #1e293b;
          min-width: 44px;
          text-align: center;
          line-height: 1;
          animation: counter-pop 0.2s ease;
          transition: color 0.2s ease;
        }
        .counter-buttons {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .counter-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: #6366f1;
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 2px 6px rgba(99,102,241,0.25);
        }
        .counter-btn:hover {
          background: #5558e3;
          box-shadow: 0 4px 12px rgba(99,102,241,0.35);
        }
        .counter-btn:active {
          transform: scale(0.92);
        }
        .counter-reset {
          margin-top: 4px;
          border: none;
          background: transparent;
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 20px;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .counter-reset:hover {
          background: rgba(99,102,241,0.08);
          color: #6366f1;
        }

        [data-theme="dark"] .counter-card,
        .dark .counter-card {
          background: #1e1e2e;
          border-color: #2e2e40;
          box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2);
        }
        [data-theme="dark"] .counter-label,
        .dark .counter-label {
          color: #64748b;
        }
        [data-theme="dark"] .counter-value,
        .dark .counter-value {
          color: #e2e8f0;
        }
        [data-theme="dark"] .counter-btn,
        .dark .counter-btn {
          background: #818cf8;
          box-shadow: 0 2px 6px rgba(129,140,248,0.25);
        }
        [data-theme="dark"] .counter-btn:hover,
        .dark .counter-btn:hover {
          background: #6f7bf3;
          box-shadow: 0 4px 12px rgba(129,140,248,0.35);
        }
        [data-theme="dark"] .counter-reset,
        .dark .counter-reset {
          color: #64748b;
        }
        [data-theme="dark"] .counter-reset:hover,
        .dark .counter-reset:hover {
          background: rgba(129,140,248,0.12);
          color: #818cf8;
        }
        @media (prefers-color-scheme: dark) {
          .counter-card:not(.light *):not([data-theme="light"] *) {
            background: #1e1e2e;
            border-color: #2e2e40;
            box-shadow: 0 1px 2px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.2);
          }
          .counter-label:not(.light *):not([data-theme="light"] *) {
            color: #64748b;
          }
          .counter-value:not(.light *):not([data-theme="light"] *) {
            color: #e2e8f0;
          }
          .counter-btn:not(.light *):not([data-theme="light"] *) {
            background: #818cf8;
            box-shadow: 0 2px 6px rgba(129,140,248,0.25);
          }
          .counter-btn:not(.light *):not([data-theme="light"] *):hover {
            background: #6f7bf3;
            box-shadow: 0 4px 12px rgba(129,140,248,0.35);
          }
          .counter-reset:not(.light *):not([data-theme="light"] *) {
            color: #64748b;
          }
          .counter-reset:not(.light *):not([data-theme="light"] *):hover {
            background: rgba(129,140,248,0.12);
            color: #818cf8;
          }
        }
      `}</style>
      <div className="counter-card">
        <span className="counter-label">Counter</span>
        <span key={count} className="counter-value">{count}</span>
        <div className="counter-buttons">
          <button className="counter-btn" onClick={() => setCount(c => c - 1)}>−</button>
          <button className="counter-btn" onClick={() => setCount(c => c + 1)}>+</button>
        </div>
        {count !== 0 && (
          <button className="counter-reset" onClick={() => setCount(0)}>Reset</button>
        )}
      </div>
    </div>
  )
}
