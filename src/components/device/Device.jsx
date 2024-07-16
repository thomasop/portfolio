import { useContext, useEffect } from "react";
import deviceContext from "../../providers/device/deviceContext";

const Device = () => {
  const { setDevice } = useContext(deviceContext);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDevice((prev) => ({
          ...prev,
          device: "mobile",
        }));
      } else {
        setDevice((prev) => ({
          ...prev,
          device: "desktop",
        }));
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setDevice]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setDevice((prev) => ({
        ...prev,
        device: "mobile",
      }));
    } else {
      setDevice((prev) => ({
        ...prev,
        device: "desktop",
      }));
    }
  }, [setDevice]);
  return null;
};

export default Device;
