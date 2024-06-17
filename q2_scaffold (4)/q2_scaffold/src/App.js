import "./styles.css";
//create a object to store all the styles.
export default function App() {
  return (
    <div className="App">
      {/* Refactor the inline style to use the internal style. */}
      <form
        style={styles.form}
      >
        {/* Refactor the inline style to use the internal style. */}
        <h3 style={styles.h3style}>Sign Up</h3>
        <input style={styles.paddingStyle} placeholder="Username" />
        <input style={styles.paddingStyle} placeholder="Email" />
        <input style={styles.paddingStyle} placeholder="Password" />
        {/* Refactor the inline style to use the internal style. */}
        <div
          style={styles.divstyle}
        >
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button1style}
          >
            Cancel
          </button>
          {/* Refactor the inline style to use the internal style. */}
          <button
            style={styles.button1style}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form:{
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20
  },
  h3style:{ fontSize: "2rem", letterSpacing: 2 },
  paddingStyle:{ padding: 10 },
  divstyle:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },
  button1style:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }
}
