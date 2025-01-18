import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <div>
        <Header />{" "}
        {/* Header is now outside the Routes, so it appears on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/neural-network-accelerator"
            element={<NeuralNetworkAccelerator />}
          />
          <Route path="/projects/fpga-pong" element={<FPGAPong />} />
          <Route
            path="/projects/helmet-brake-light"
            element={<HelmetBrakeLight />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/jan8" element={<Jan8Post />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Hero />
      <Projects />
    </div>
  );
}

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null); // To handle dynamic scrolling

  useEffect(() => {
    if (location.pathname === "/" && scrollTarget) {
      document
        .getElementById(scrollTarget)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      setScrollTarget(null); // Reset the state to avoid repeated scrolling
    }
  }, [location, scrollTarget]);

  const handleNavigationClick = (e, target) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on the homepage, scroll directly
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // Navigate to the homepage and set the target section to scroll
      setScrollTarget(target);
      navigate("/");
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/" onClick={(e) => handleNavigationClick(e, "home")}>
          SC
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/" onClick={(e) => handleNavigationClick(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={(e) => handleNavigationClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  useEffect(() => {
    const binaryElements = document.querySelectorAll(".jumping-binary span");

    binaryElements.forEach((el) => {
      const interval = setInterval(() => {
        el.textContent = Math.random() > 0.5 ? "1" : "0"; // Randomly switch between 1 and 0
      }, 300); // Change every 300ms

      // Cleanup the interval on component unmount
      return () => clearInterval(interval);
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();
  const [scrollTarget, setScrollTarget] = useState(null); // To handle dynamic scrolling

  useEffect(() => {
    if (location.pathname === "/" && scrollTarget) {
      document
        .getElementById(scrollTarget)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      setScrollTarget(null); // Reset the state to avoid repeated scrolling
    }
  }, [location, scrollTarget]);

  const handleNavigationClick = (e, target) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If already on the homepage, scroll directly
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      // Navigate to the homepage and set the target section to scroll
      setScrollTarget(target);
      navigate("/");
    }
  };

  return (
    <section id="home" className="hero">
      <h1>Hi, I'm Shayaan 👋</h1>
      <h2>Computer Engineering & Applied Mathematics @ Brown University</h2>
      <p>
        I am a student passionate about all things digital. Currently interested
        in and experimenting with FPGAs and embedded systems. I am seeking
        professional internship opportunities to learn more in these fields.
        Feel free to reach out with any questions or comments about my work!
      </p>
      <div className="contact-icons">
        <a
          href="https://github.com/shayaanc4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.png" alt="GitHub" className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/shayaan-chaudhary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.png" alt="LinkedIn" className="icon" />
        </a>
        <a href="mailto:shayaanschaudhary@gmail.com">
          <img src="/mail.png" alt="Email" className="icon" />
        </a>
      </div>

      {/* Jumping and Changing Binary Animation */}
      <div className="jumping-binary">
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
        <span>1</span>
        <span>0</span>
      </div>

      <a
        href="/"
        onClick={(e) => handleNavigationClick(e, "projects")}
        className="cta-button hero-button"
      >
        View My Work
      </a>
    </section>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [projects] = useState([
    {
      name: "Neural Network Accelerator",
      description:
        "An FPGA-based neural network accelerator implemented in SystemVerilog for efficient hardware inference.",
      tags: ["FPGA", "SystemVerilog", "Machine Learning"],
      link: "/projects/neural-network-accelerator",
    },
    {
      name: "FPGA Pong",
      description:
        "A fully hardware-based implementation of the classic Pong game on an FPGA platform using Verilog. The game is displayed via a VGA output and controlled by on-board buttons on an Altera DE0-CV board.",
      tags: ["FPGA", "Verilog"],
      link: "/projects/fpga-pong",
    },
    {
      name: "Helmet-Mounted Brake Light System with Real-Time Deceleration Detection",
      description:
        "A helmet-mounted LED brake light system using an ESP32 microcontroller and an MPU6050 accelerometer sensor communicating via I2C to detect real-time deceleration.",
      tags: ["Embedded Systems", "I2C"],
      link: "/projects/helmet-brake-light",
    },
    {
      name: "SBraille",
      description:
        "A cheaper, novel haptic refreshable braille display built in a team using Eagle EDA, a Raspberry Pi, and Fusion360.",
      tags: ["Embedded Systems", "PCB Design"],
      link: "#",
    },
    {
      name: "Assassin",
      description:
        "A java-based simulation for a game of “Assassin” developed for the Brown Union of Global Students. Includes features such as target shuffling, leaderboards, etc.",
      tags: ["Data Structures", "Algorithms", "Java"],
      link: "#",
    },
  ]);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div
        className="project-grid"
        style={{
          maxHeight: showAll ? "none" : "calc(40vh + 2vh)", // Show 1 row or expand fully
        }}
      >
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-footer">
              <Link to={project.link}>Learn More</Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="cta-button project-button"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
}

function NeuralNetworkAccelerator() {
  return (
    <section className="project-page">
      <h2>Neural Network Accelerator</h2>
      <p>
        This project involved designing an FPGA-based accelerator for neural
        networks to enable efficient hardware inference. It leveraged
        SystemVerilog to create a highly optimized design.
      </p>
      <Link to="/" className="cta-button">
        Back to Home
      </Link>
    </section>
  );
}

function FPGAPong() {
  return (
    <section className="project-page">
      <h2>FPGA Pong</h2>
      <p>
        A classic Pong game implemented entirely in hardware using Verilog. The
        game uses VGA for display and is controlled via onboard buttons.
      </p>
      <Link to="/" className="cta-button">
        Back to Home
      </Link>
    </section>
  );
}

function HelmetBrakeLight() {
  return (
    <section className="project-page">
      <h2>Helmet-Mounted Brake Light System</h2>
      <p>
        An innovative helmet-mounted brake light system built using an ESP32
        microcontroller. It detects real-time deceleration using an MPU6050
        accelerometer sensor.
      </p>
      <Link to="/" className="cta-button">
        Back to Home
      </Link>
    </section>
  );
}

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Yours Truly: Signed or Unsigned?",
      date: "January 8, 2025",
      snippet:
        "When I first encountered signed and unsigned binary numbers, I underestimated how much of a headache they could be...",
      link: "/blog/jan8",
    },
  ];

  return (
    <section className="blog-page">
      <h2>Blog</h2>
      <div className="blog-posts">
        {posts.map((post) => (
          <div key={post.id} className="blog-post">
            <h3>{post.title}</h3>
            <p className="post-date">{post.date}</p>
            <p>{post.snippet}</p>
            <a href={post.link} className="cta-button blog-button">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function Jan8Post() {
  return (
    <section className="blog-post-page">
      <h2>Yours Truly: Signed or Unsigned?</h2>
      <p className="post-date">January 8, 2025</p>
      <p>
        When I first encountered signed and unsigned binary numbers, I
        underestimated how much of a headache they could be. Binary is just ones
        and zeros, right? How complicated could it get? But when you’re dealing
        with binary arithmetic in hardware descriptions languages (HDLs) like
        SystemVerilog, these distinctions become critical—and, frankly, a bit
        frustrating. This post is as much about sharing what I learned as it is
        about solidifying my own understanding.
      </p>
      <p>
        In hardware design, unsigned binary numbers are straightforward—they
        represent positive values starting from zero. Signed binary numbers,
        however, use two’s complement to encode negative numbers, which can make
        interpretation tricky. For example, what happens in SystemVerilog when
        you multiply a signed number by an unsigned number? This gets even more
        tricky if you don't manage the bit width of each number correctly. One
        of the bugs in my neural network accelerator project that took me the
        longest to fix arose because I was shifting a signed binary number with
        the "&gt;&gt;" operator, only to find out this doesn't preserve sign,
        and you're ACTUALLY supposed to use "&gt;&gt;&gt;".
      </p>
      <p>
        Now tack on handling fixed-point numbers with both integer and
        fractional parts, and suddenly you've got subtle arithmetic errors
        everywhere. Handling of these numbers requires not only great
        organization and modularity, but a way to benchmark whether the numbers
        you are getting are actually the ones you want. Now for this, if I went
        in and manually converted each signed fixed-point number to decimal
        manually, I would have never had time to write this post, so I looked to
        software. I was unable to find a function that encompassed signed and
        fractional numbers, so I wrote one myself, also in an effort to become
        even more comfortable with complex binary arithmetic and conversion. The
        task? Write a python function that takes in a signed, fractional (or
        integer) decimal number and produces its binary representation.
      </p>
      <p>
        First, I broke the problem into steps. I needed to separate the integer
        and fractional parts of the number, convert each part to binary, and
        combine them. Here’s how I handled it:
      </p>
      <p>
        1. Extract the integer and fractional parts using Python’s{" "}
        <code>int</code> and arithmetic operations.
        <br />
        2. Convert the integer part to binary with a fixed width using NumPy’s{" "}
        <code>binary_repr</code>.
        <br />
        3. Convert the fractional part iteratively by multiplying it by 2,
        extracting the integer bit, and repeating the process until the desired
        precision is reached.
      </p>
      <p>
        Then, I combined the two binary strings (integer and fractional) to form
        a complete binary representation of the number. For negative numbers, I
        applied two’s complement logic to ensure proper encoding.
      </p>
      <p>Here’s the final function:</p>
      <pre>
        <code>
          {`def binary_repr_frac(num, integer_width=3, precision=5):\n    total_width = integer_width + precision\n    integer_part = int(abs(num))\n    fractional_part = abs(num) - integer_part\n\n    integer_binary = np.binary_repr(integer_part, width=integer_width)\n\n    fractional_binary = ""\n    for _ in range(precision):\n        fractional_part *= 2\n        bit = int(fractional_part)\n        fractional_binary += str(bit)\n        fractional_part -= bit\n\n    combined_binary = f"{integer_binary}{fractional_binary}"\n\n    if num < 0:\n        combined_value = int(combined_binary, 2)\n        twos_complement_value = (1 << total_width) - combined_value\n        combined_binary = f"{twos_complement_value:0{total_width}b}"\n\n    return combined_binary`}
        </code>
      </pre>
      <p></p>
      <p>
        Writing this function was a great learning experience. It clarified my
        understanding of binary representation and fixed-point arithmetic, and
        it reinforced how critical precise conversions are in hardware design.
      </p>
      <Link to="/blog" className="cta-button">
        Back to Blog
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} Shayaan Chaudhary. All rights
        reserved.
      </p>
    </footer>
  );
}

export default App;
