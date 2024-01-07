import { useEffect, useRef } from "react";
import { styled } from "styled-components";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  title?: string;
  width?: number | string;
  height?: number | string;
};

export const Modal = ({
  children,
  isOpen,
  close,
  title,
  width,
  height,
}: ModalProps) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef(false);
  const coordi = useRef<{
    startX: number;
    startY: number;
    latX: number;
    latY: number;
  }>({
    startX: 0,
    startY: 0,
    latX: 0,
    latY: 0,
  });

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close()
    }
  }

  useEffect(() => {
    if(!isOpen) return
    if(!modalRef.current || !backdropRef.current)  return

    const modal = modalRef.current
    const backdrop = modalRef.current

    const handleMouseDown = (e: MouseEvent) => {
      if (e.y - modal?.getBoundingClientRect().y > 70) return
      isClicked.current = true
      coordi.current.startX = e.clientX
      coordi.current.startY = e.clientY
      coordi.current.latX = modal.offsetLeft
      coordi.current.latY = modal.offsetTop
    }

    const handleMouseUp = (e: MouseEvent) => {
      isClicked.current = false
      coordi.current.latX = modal.offsetLeft
      coordi.current.latY = modal.offsetTop
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return

      const nextX = e.clientX - coordi.current.startX + coordi.current.latX
      const nextY = e.clientY - coordi.current.startY + coordi.current.latY
      modal.style.left = `${nextX}px`
      modal.style.top = `${nextY}px`
    }

    modal.addEventListener("mousedown", handleMouseDown)
    modal.addEventListener("mouseup", handleMouseUp)
    backdrop.addEventListener("mousemove", handleMouseMove)
    backdrop.addEventListener("mouseout", handleMouseUp)

    const cleanUp = () => {
      modal.removeEventListener("mousedown", handleMouseDown)
      modal.removeEventListener("mouseup", handleMouseUp)
      backdrop.removeEventListener("mousemove", handleMouseMove)
      backdrop.removeEventListener("mouseout", handleMouseUp)
    }

    return cleanUp
  }, [isOpen])
  return (
    <>
      {/* <CSSTransition
        nodeRef={backdropRef}
        in={isOpen}
        timeout={200}
        className="backdrop"
        unmountonExit
        data-animate={suppressAnimation ? false : true}
      >
        <div className="backdrop" ref={backdropRef} onClick={}>
          <div className="modal" ref={modalRef}>
            <button className="closeButton" onClick={close}>
              &times;
            </button>
            {children}
          </div>
        </div>
      </CSSTransition> */}
    </>
  );

  
};

const BackDrop = styled.div`
    position: fixed;
    inset: 0;
    /* background-color: ${}; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal-backdrop);

    /* &:[data-animate="true"].backdrop-enter-active {
      animation: fadein 0.2s ease-out both;
    } */
  `