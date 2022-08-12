import { motion, AnimatePresence, animate } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "./components/Modal/index";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const [x, setX] = useState(0);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    modalOpen ? close() : open();

    setToggle(!toggle);
    if (toggle) setX(0);
    else setX(100);
  };

  // useEffect(() => {});

  return (
    <div>
      <motion.button
        className="save-button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        animate={{ x: x }}
        onClick={() => handleClick()}
      >
        Launch modal
      </motion.button>

      <AnimatePresence
        // Disable any intial animations on children that
        // are present when the component is first rendered.
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires wehn all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
