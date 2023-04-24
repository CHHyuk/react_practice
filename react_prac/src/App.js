import React, { useState } from "react"
import classnames from 'https://cdn.skypack.dev/classnames';

let NotifyOnce__workDone = false;

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);

  if (NotifyOnce__workDone == false) {
    setTimeout(function () {
      setVisible(true);
    },1000);

    setTimeout(function () {
      setVisible(false);
    },3000);

    NotifyOnce__workDone = true;
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible,
        },
        {
          "top-[10px]": visible,
        }
      )}
    >
      {children}
    </div>

  )
}

function Alert({ color: _color, children }) {
  const color = _color ?? "white";

  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-${color}`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <NotifyOnce>
        <Alert>안녕하세요</Alert>
      </NotifyOnce>
      <hr className="my-4" />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Iusto quam accusamus esse voluptatem aliquam inventore amet 
        consectetur labore blanditiis. Ipsa sed maiores non repudiandae 
        cupiditate, dignissimos facere consequuntur cumque voluptatibus.
      </div>
    </>
  );
}

export default App;
