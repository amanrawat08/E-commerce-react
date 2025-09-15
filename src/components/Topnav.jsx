function Topnav() {
  return (
    <div className="topnav">
      <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
        <p
          style={{
            display: "inline-block",
            paddingLeft: "100%",
            animation: "marquee 10s linear infinite",
            marginBottom: 0,
          }}
        >
          🚀 Welcome to my React Project! This text scrolls like a marquee.
        </p>

        <style>
          {`
          @keyframes marquee {
            0%   { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
        </style>
      </div>
    </div>
  );
}
export default Topnav;
