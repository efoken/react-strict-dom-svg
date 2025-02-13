import { StatusBar } from 'expo-status-bar';
import { css, html } from 'react-strict-dom';
import { svg } from 'react-strict-dom-svg';

const styles = css.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  svg: {
    aspectRatio: 620 / 472,
    marginTop: 10,
    maxWidth: '100%',
    width: 300
  },
  svgText: {
    whiteSpace: 'preserve'
  }
});

export default function App() {
  return (
    <html.div style={styles.container}>
      <html.p>Open up App.tsx to start working on your app!</html.p>
      <StatusBar style="auto" />
      <svg.svg
        style={styles.svg}
        viewBox="0 0 620 472"
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg.defs id="defs4">
          <svg.path
            id="box1"
            d="m0 0h77v210h-77z"
            stroke="#000"
            strokeWidth={2}
          />
          <svg.path
            id="box2"
            d="m0 0h77v60h-77z"
            stroke="#000"
            strokeWidth={2}
          />
        </svg.defs>
        <svg.path id="bg" d="m0 0h620v472h-620z" fill="#fff" />
        <svg.g id="g9" transform="translate(2 1)">
          <svg.use id="use11" fill="#fff" href="#box1" />
          <svg.use id="use13" x={77} fill="#ff0" href="#box1" />
          <svg.use id="use15" x={154} fill="#0ff" href="#box1" />
          <svg.use id="use17" x={231} fill="#0f0" href="#box1" />
          <svg.use id="use19" x={308} fill="#f0f" href="#box1" />
          <svg.use id="use21" x={385} fill="red" href="#box1" />
          <svg.use id="use23" x={462} fill="#00f" href="#box1" />
          <svg.use id="use25" x={539} href="#box1" />
        </svg.g>
        <svg.g id="g45" transform="translate(2 220)">
          <svg.use id="use47" fill="#0f0" href="#box2" />
          <svg.use id="use49" x={77} fill="#0f0" href="#box2" />
          <svg.use id="use51" x={154} fill="#0f0" href="#box2" />
          <svg.use id="use53" x={231} fill="#0f0" href="#box2" />
          <svg.use id="use55" x={308} fill="#fff" href="#box2" />
          <svg.use id="use57" x={385} fill="#fff" href="#box2" />
          <svg.use id="use59" x={462} fill="#fff" href="#box2" />
          <svg.use id="use61" x={539} fill="#fff" href="#box2" />
          <svg.text
            id="green100"
            x={30}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            0.59
          </svg.text>
        </svg.g>
        <svg.g id="g27" transform="translate(2 280)">
          <svg.use id="use29" fill="red" href="#box2" />
          <svg.use id="use31" x={77} fill="red" href="#box2" />
          <svg.use id="use33" x={154} fill="#fff" href="#box2" />
          <svg.use id="use35" x={231} fill="#fff" href="#box2" />
          <svg.use id="use37" x={308} fill="red" href="#box2" />
          <svg.use id="use39" x={385} fill="red" href="#box2" />
          <svg.use id="use41" x={462} fill="#fff" href="#box2" />
          <svg.use id="use43" x={539} fill="#fff" href="#box2" />
          <svg.text
            id="red100"
            x={20}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            +0.30
          </svg.text>
        </svg.g>
        <svg.g id="g63" transform="translate(2 340)">
          <svg.use id="use65" fill="#00f" href="#box2" />
          <svg.use id="use67" x={77} fill="#fff" href="#box2" />
          <svg.use id="use69" x={154} fill="#00f" href="#box2" />
          <svg.use id="use71" x={231} fill="#fff" href="#box2" />
          <svg.use id="use73" x={308} fill="#00f" href="#box2" />
          <svg.use id="use75" x={385} fill="#fff" href="#box2" />
          <svg.use id="use77" x={462} fill="#00f" href="#box2" />
          <svg.use id="use79" x={539} fill="#fff" href="#box2" />
          <svg.text
            id="blue100"
            x={20}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            +0.11
          </svg.text>
        </svg.g>
        <svg.g id="g63" transform="translate(2 410)">
          <svg.use id="grey100" fill="#fff" href="#box2" />
          <svg.use id="grey89" x={77} fill="#e3e3e3" href="#box2" />
          <svg.use id="grey70" x={154} fill="#b2b2b2" href="#box2" />
          <svg.use id="grey59" x={231} fill="#969696" href="#box2" />
          <svg.use id="grey41" x={308} fill="#696969" href="#box2" />
          <svg.use id="grey30" x={385} fill="#4d4d4d" href="#box2" />
          <svg.use id="grey11" x={462} fill="#1c1c1c" href="#box2" />
          <svg.use id="grey0" x={539} fill="#000" href="#box2" />
          <svg.text
            id="txgrey100"
            x={20}
            y={35}
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            100%
          </svg.text>
          <svg.text
            id="txgrey89"
            x={102}
            y={35}
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            89%
          </svg.text>
          <svg.text
            id="txgrey70"
            x={179}
            y={35}
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            70%
          </svg.text>
          <svg.text
            id="txgrey59"
            x={256}
            y={35}
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            59%
          </svg.text>
          <svg.text
            id="txgrey41"
            x={333}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            41%
          </svg.text>
          <svg.text
            id="txgrey30"
            x={408}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            30%
          </svg.text>
          <svg.text
            id="txgrey11"
            x={487}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            11%
          </svg.text>
          <svg.text
            id="txgrey0"
            x={569}
            y={35}
            fill="#fff"
            fontFamily="DejaVu Sans, Arial, Helvetica"
            strokeWidth={1}
            style={styles.svgText}
          >
            0%
          </svg.text>
        </svg.g>
        <svg.text
          id="text3446"
          x={90}
          y={184}
          fill="#fff"
          fontSize={180}
          fontFamily="DejaVu Sans, Arial, Helvetica"
          strokeWidth={4}
          style={styles.svgText}
        >
          TEST
        </svg.text>
        <svg.text
          id="text3447"
          x={80}
          y={174}
          fontFamily="DejaVu Sans, Arial, Helvetica"
          strokeWidth={4}
          style={styles.svgText}
        >
          <svg.tspan id="tspan3448" x={80} y={174} fontSize={180}>
            TEST
          </svg.tspan>
        </svg.text>
      </svg.svg>
    </html.div>
  );
}
