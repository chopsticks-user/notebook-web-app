import React, { useRef } from "react"

type VerResizerProps = {
  height: number,
  color: string
}

const VerResizer: React.FC<VerResizerProps> = ({ height, color }) => {
  const ref = useRef<HTMLSpanElement>(null);
  let dragLast: number = 0;

  const onmousemove = (e: any) => {
    e.preventDefault();
    const px = e.clientX;
    const dx = px - (dragLast || px);
    dragLast = px;
    const lTarget: any = ref.current?.previousElementSibling;
    const rTarget: any = ref.current?.nextElementSibling;

    if (dx < 0) {
      const w = Math.round(parseInt(getComputedStyle(lTarget).width) + dx);
      lTarget.style.flex = `0 ${w < 10 ? 0 : w}px`;
      rTarget.style.flex = `1 0`;
    }

    if (dx > 0) {
      const w = Math.round(parseInt(getComputedStyle(rTarget).width) + dx);
      rTarget.style.flex = `0 ${w < 10 ? 0 : w}px`;
      lTarget.style.flex = `1 0`;
    }
  }

  const onmouseup = (e: any) => {
    e.preventDefault();
    document.removeEventListener("mousemove", onmousemove);
    document.removeEventListener("mouseup", onmouseup);
  }

  const resizeX = (e: any) => {
    e.preventDefault();
    document.addEventListener("mousemove", onmousemove);
    document.addEventListener("mouseup", onmouseup);
  }

  return (
    <span className="ver-resizer" ref={ref} onMouseDown={resizeX}></span>
  );
}

export default VerResizer