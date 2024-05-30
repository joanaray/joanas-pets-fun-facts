import { useState } from "react";
import { createPortal } from "react-dom";

export default function Dialog() {
  const [showModal, setModal] = useState(false);

  return (
    <>
      <button type="button" className="btn-link" onClick={() => setModal(true)}>2024 May K9 massacre</button>
      {showModal &&
        createPortal(
          <dialog open>
            <div>
              <h4>2024 May K9 massacre</h4>
              <p>
              The 2024 May K9 massacre occurred when two motherfucking stray dogs managed to get into the chicken coop one night and attacked 3 of the 4 chickens inside.
              </p>
              <button onClick={() => setModal(false)}>close</button>
            </div>
          </dialog>,
          document.body
        )}
    </>
  );
}
